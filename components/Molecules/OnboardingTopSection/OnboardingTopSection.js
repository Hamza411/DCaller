import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'
import AntDesignIcons from "react-native-vector-icons/AntDesign"
import Styles from './Styles'

const OnboardingTopSection = ({ handleBack, handleSkip, currentPage }) => {
    return (
        <SafeAreaView>
            <View style={Styles.topRow}>

                {/* Back Button */}

                <TouchableOpacity
                    onPress={handleBack}
                    style={Styles.ButtonPadding}>
                    <AntDesignIcons name="left"
                        style={[
                            Styles.TopButton,
                            { opacity: currentPage === 0 ? 0 : 1 },
                        ]} />
                </TouchableOpacity>

                {/* Skip Button */}

                <TouchableOpacity onPress={handleSkip}>
                    <Text style={[
                        Styles.TopButton,
                        { opacity: currentPage === data.length - 1 ? 0 : 1 }
                    ]}>Skip</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default OnboardingTopSection
