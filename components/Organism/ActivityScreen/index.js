import React from 'react'
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const ActivityScreen = ({ navigate }) => {
    const navigation = useNavigation();

    // navigation.toggleDrawer();

    return (
        <View>
            <Text>
                Activity Screen
            </Text>
        </View>
    )
}

export default ActivityScreen
