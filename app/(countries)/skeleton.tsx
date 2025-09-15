import { Box, Container, Flex, Grid, GridCol, SimpleGrid, Skeleton } from '@mantine/core';

export default function SkeletonLoader() {
    return (
        <>

            <Container size='lg'>

                <SimpleGrid
                    cols={{ base: 1, xs: 2, md: 3, lg: 4 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                >


                    <Skeleton height={200} width={200} radius="sm" />

                    <Skeleton height={200} width={200} radius="sm" />

                    <Skeleton height={200} width={200} radius="sm" />

                    <Skeleton height={200} width={200} radius="sm" />

                    <Skeleton height={200} width={200} radius="sm" />

                    <Skeleton height={200} width={200} radius="sm" />

                    <Skeleton height={200} width={200} radius="sm" />

                    <Skeleton height={200} width={200} radius="sm" />



                </SimpleGrid>
            </Container>

        </>
    );
}