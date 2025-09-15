'use client'
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Flex, Text } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import cx from 'clsx';
import classes from '../../css/Demo.module.css';

export default function Demo() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

    const toggleScheme = () =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light');

    return (
        <Flex align="center" bd='1px solid rd' mt={3} gap="sm">
            <ActionIcon
                onClick={toggleScheme}
                variant="default"
                size="lg"
                aria-label="Toggle color scheme"
            >
                <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
                <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            </ActionIcon>

            <Text fw={300}>
                {computedColorScheme === 'light' ? 'Light Mode' : 'Dark Mode'}
            </Text>
        </Flex>
    );
}
