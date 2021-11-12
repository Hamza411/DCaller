import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import Styles from './Styles'


const FlatlistItem = ({ item }) => {
    return (
        <View style={Styles.imageContainer}>
            <View style={Styles.textContainer}>
                <ImageBackground
                    source={item.img}
                    style={Styles.bgImage}
                />
            </View>

            <View style={Styles.titleContainer}>
                <Text style={Styles.title}>{item.title}</Text>

                <Text style={Styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

export default FlatlistItem
