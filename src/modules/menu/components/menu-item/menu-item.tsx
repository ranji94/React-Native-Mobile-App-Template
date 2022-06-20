import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './menu-item-styles'

interface Props {
    children: string
    handleOnPress: () => void
}

export const MenuItem = ({ children, handleOnPress }: Props) => {
    return (
        <TouchableOpacity style={styles.menuElement} onPress={handleOnPress}>
            <Text style={styles.buttonText}>{children}</Text>
        </TouchableOpacity>
    )
}
