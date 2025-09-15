'use client'
import { Box, TextInput, Select, Flex } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

interface SearchAndFilterProps {
    uniqueRegions: string[]
    searchTerm: string
    onSearch: React.Dispatch<React.SetStateAction<string>>
    // onSearch: (value: string) => void
    selectedRegion: string | null
    onRegionChange: React.Dispatch<React.SetStateAction<string | null>>
    // onRegionChange: (value: string | null) => void
}

export default function SearchAndFilter({ uniqueRegions, searchTerm, onSearch, selectedRegion, onRegionChange }: SearchAndFilterProps) {

    return (
        <Box mb={30}>
            <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'space-between' }}
            >
                <TextInput
                    w={{ base: '100%', sm: '50%', md: '30%' }}
                    size="md"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={(e) => onSearch(e.target.value)}
                    leftSection={<IconSearch size="18" />}
                />

                <Select
                    w={{ base: '70%', xs: '40%', sm: '25%', md: '15%' }}
                    size="md"
                    placeholder="Filter by region"
                    data={uniqueRegions}
                    value={selectedRegion}
                    onChange={onRegionChange}
                    clearable
                />
            </Flex>
        </Box>
    )
}
