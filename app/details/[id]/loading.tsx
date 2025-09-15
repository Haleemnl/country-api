import { Box, Flex, Skeleton, Text } from '@mantine/core'
import React from 'react'

export default function Loading() {
    return (
        <>

            <Flex
                align={{ base: 'start', sm: 'center' }}
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'sm' }}
                justify={{ base: 'start', sm: 'space-between' }}
            >

                <Skeleton

                    width={600}
                    height={400}
                    radius={10}

                />




                <Box p={10}>


                    <Flex
                        justify={{ base: 'left', sm: "space-between" }}
                        gap="xl" align={{ base: 'start', sm: 'center' }}
                        direction={{ base: 'column', sm: 'row' }}
                        mr={{ sm: 30 }}
                    >
                        <Box>

                            <Flex gap={10} mb={10} align='center'>
                                <b>Name:</b>
                                <Skeleton
                                    ml={5}
                                    width={70}
                                    height={30}
                                    radius={5}
                                />
                            </Flex>

                            <Flex gap={10} mb={10} align='center'>
                                <b >Capital:</b>
                                <Skeleton
                                    width={70}
                                    height={30}
                                    radius={5}
                                />
                            </Flex>

                            <Flex gap={10} mb={10} align='center'>
                                <b >Official:</b>
                                <Skeleton
                                    width={70}
                                    height={30}
                                    radius={5}
                                />
                            </Flex>

                            <Flex gap={10} mb={10} align='center'>
                                <b >Region:</b>
                                <Skeleton
                                    width={70}
                                    height={30}
                                    radius={5}
                                />
                            </Flex>

                        </Box>



                        <Box>
                            <Flex gap={10} mb={10} align='center'>
                                <b>cca3:</b>
                                <Skeleton
                                    width={70}
                                    height={30}
                                    radius={5}
                                />
                            </Flex>
                            <Flex gap={10} mb={10} align='center'>
                                <b>Population</b>
                                <Skeleton
                                    width={70}
                                    height={30}
                                    radius={5}
                                />
                            </Flex>
                        </Box>
                    </Flex>




                    <Flex gap={10} mt={10}>
                        <Text fw='bold'> Border Countries: </Text>

                        <Skeleton
                            width={70}
                            height={30}
                            radius={5}
                        />
                        <Skeleton
                            width={70}
                            height={30}
                            radius={5}
                        />
                        {/* <Skeleton
                            width={70}
                            height={30}
                            radius={5}
                        /> */}
                    </Flex>
                </Box>

            </Flex>
        </>
    )
}

