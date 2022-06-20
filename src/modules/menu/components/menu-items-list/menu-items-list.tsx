import React from 'react'
import { View } from 'react-native'
import { styles } from './menu-items-list-style'

interface Props {
    children: JSX.Element[]
}

export const MenuItemsList = ({ children }: Props) => {
    return <View style={styles.menuItemsList}>{children}</View>
}
