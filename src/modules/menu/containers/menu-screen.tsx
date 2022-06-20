import React from 'react'
import { SafeAreaView, ScrollView, Text } from 'react-native'
import { styles } from './menu-screen-styles'
import { MenuItemsList } from '../components/menu-items-list/menu-items-list'
import { MenuItem } from '../components/menu-item/menu-item'

interface Props {
    value: number
    increment: () => void
    decrement: () => void
}

export const MenuScreen = ({ value, increment, decrement }: Props) => {
    const onPressIncrement = () => increment()
    const onPressDecrement = () => decrement()

    return (
        <SafeAreaView style={styles.screenContainer}>
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text>Counter value: {value}</Text>
                <MenuItemsList>
                    <MenuItem handleOnPress={onPressIncrement}>
                        {'Host Screen'}
                    </MenuItem>
                    <MenuItem handleOnPress={onPressDecrement}>
                        {'Client Screen'}
                    </MenuItem>
                </MenuItemsList>
            </ScrollView>
        </SafeAreaView>
    )
}
