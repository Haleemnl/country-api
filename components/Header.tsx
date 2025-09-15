'use client'
import { Container, Flex, Text, useComputedColorScheme } from '@mantine/core';
import classes from '../css/HeaderMenu.module.css';
import Demo from '@/app/(countries)/Demo';



export function HeaderMenu() {


    const computedColorScheme = useComputedColorScheme('light', {
        getInitialValueInEffect: true,
    });
    return (
        <header className={classes.header}
            style={{
                backgroundColor: computedColorScheme === 'dark' ? '#333' : '#f5f5f5',
                color: computedColorScheme === 'dark' ? '#f9f9f9' : '#111',
                width: '100%'
            }}
        >

            <Container size={1200} h="100%">
                <Flex justify='space-between' align='center' h="100%" >

                    <Text>Where in the World</Text>


                    <Demo />


                </Flex>
            </Container>

        </header >
    );
}


