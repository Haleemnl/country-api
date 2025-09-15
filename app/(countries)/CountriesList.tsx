'use client'
import { useState } from 'react'
import { Box, Card, CardSection, SimpleGrid, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import SearchAndFilter from './SearchAndFilter'

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
    cca3: string
}

export default function CountriesList({ countries }: { countries: Country[] }) {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null)


    // Get unique regions for the select options
    const allRegions = countries.map(country => country.region);
    //Remove duplicates
    const uniqueRegions = allRegions.filter((region, index) => allRegions.indexOf(region) === index);

    // Apply filters directly
    const filteredCountries = countries.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesRegion = !selectedRegion || country.region === selectedRegion
        return matchesSearch && matchesRegion
    })

    return (
        <>



            <SearchAndFilter
                uniqueRegions={uniqueRegions}
                searchTerm={searchTerm}
                onSearch={setSearchTerm}
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
            />

            {filteredCountries.length === 0 ? (
                <Text>No countries found.</Text>
            ) : (
                <SimpleGrid
                    cols={{ base: 1, xs: 2, md: 3, lg: 4 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                >
                    {filteredCountries.map(country => (
                        <Card key={country.cca3}>
                            <Link href={`/details/${country.cca3}`}>
                                <CardSection>
                                    <Image
                                        src={country.flags.svg}
                                        width={200}
                                        height={150}
                                        alt={country.name.common}
                                        style={{
                                            width: '100%',
                                            height: '150px',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </CardSection>
                            </Link>

                            <Box my={30}>
                                <Text fw="bold" fz="xl">
                                    {country.name.common}
                                </Text>
                                <Text>
                                    <b>Population</b>: {country.population.toLocaleString()}
                                </Text>
                                <Text>
                                    <b>Region</b>: {country.region}
                                </Text>
                                <Text>
                                    <b>Capital</b>: {country.capital?.[0] || 'N/A'}
                                </Text>
                            </Box>
                        </Card>
                    ))}
                </SimpleGrid>
            )}
        </>
    )
}
