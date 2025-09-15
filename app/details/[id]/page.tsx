import React, { Suspense } from 'react'
import { Box, Button, Flex, Paper, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import { IconArrowNarrowLeft } from '@tabler/icons-react'

interface Country {
    name: {
        common: string
        official: string
    },
    region: string,
    population: number,
    capital?: string[],
    flags: {
        svg: string
        png: string
    },
    cca3: string,
    borders?: string[]
}

interface PageProps {
    params: { id: string }
}

const Page = async ({ params }: PageProps) => {
    const { id } = params

    const data = await fetch('https://restcountries.com/v3.1/all?fields=name,region,population,capital,flags,cca3,borders')
    const countries: Country[] = await data.json()

    const country = countries.find((c) => c.cca3 === id)

    if (!country) {
        return (
            <Box>

                <Button component={Link} href={"/"} variant="default" color="gray" leftSection={<IconArrowNarrowLeft />}>
                    Go back
                </Button>

                <Text>Country not found.</Text>
            </Box>
        )
    }

    return (
        <>

            <Button component={Link} href={"/"} variant="default" color="gray" leftSection={<IconArrowNarrowLeft />}>
                Go back
            </Button>



            {/* //s */}

            <Flex
                align={{ base: 'start', sm: 'center' }}
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'md' }}
                justify={{ base: 'start', sm: 'space-between' }}
            >
                {/* <Box mt={20}> */}
                <Image
                    src={country.flags.svg}
                    width={500}
                    height={350}
                    alt={country.name.common}
                    style={{ marginTop: '20px' }}
                // style={{ width: '100%' }}
                />

                {/* </Box> */}


                {/* text */}
                <Box maw={400} mt={{ base: 30, sm: 5 }}>
                    <Flex
                        justify={{ base: 'left', sm: "space-between" }}
                        gap="xl" align={{ base: 'start', sm: 'center' }}
                        direction={{ base: 'column', sm: 'row' }}
                        mr={{ sm: 30 }} mt={-20}
                    >

                        <Box>
                            <Text mb={20} fw="bold" fz="h3">
                                {country.name.common}
                            </Text>

                            <Text mb={10} >
                                <b> Name</b>: {country.name.common}
                            </Text>
                            <Text mb={10}>
                                <b>Capital</b>: {country.capital?.[0] || 'N/A'}
                            </Text>
                            <Text mb={10}>
                                <b>Official</b>: {country.name.official}
                            </Text>
                            <Text mb={10}>
                                <b>Region</b>: {country.region}
                            </Text>
                        </Box>

                        <Box>
                            <Text mb={10}>
                                <b>cca3</b>: {country.cca3}
                            </Text>
                            <Text mb={10}>
                                <b>Population</b>: {country.population.toLocaleString()}
                            </Text>
                        </Box>


                    </Flex>




                    <Flex
                        wrap="wrap"
                        rowGap='md'
                        maw={400}
                        // direction={{ base: 'column', md: 'row' }}
                        gap="sm"
                        mt="lg"
                        align="center"
                    // bd='1px solid red'
                    >

                        <Text fw="bold">Border Countries:</Text>


                        {/* <Box w='100%' bd='1px solid red'> */}

                        {country.borders && country.borders.length > 0 ? (

                            country.borders.map((border) => {
                                const borderCountry = countries.find((country) => country.cca3 === border)
                                return (
                                    <Button key={border} component={Link} href={`${border}`} variant="default" color="gray" size="xs">
                                        {borderCountry ? borderCountry.name.common : border}
                                    </Button>
                                )
                            })

                        ) : (
                            <Text ml="sm">None</Text>
                        )}

                        {/* </Box> */}
                    </Flex>
                </Box>

            </Flex >


        </>
    )
}

export default Page
