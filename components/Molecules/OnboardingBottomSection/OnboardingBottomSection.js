import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { SIZES, COLORS } from '../../../assets/constant'
import data from '../../Atoms/data'
import AntDesignIcons from "react-native-vector-icons/AntDesign"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, CommonActions } from '@react-navigation/native';
import Styles from './Styles'



const OnboardingBottomSection = ({ currentPage, handleNext }) => {

    const navigation = useNavigation();

    console.log("Navigation>>>", navigation)
    const handleOnboardingScreen = () => {

        AsyncStorage.setItem('Onboarding', "true"),

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        {
                            name: 'Drawer',
                        },
                    ],
                }),
            );
    }


    return (

        <SafeAreaView>
            <View style={Styles.bottomRow}>

                {/* pagination */}

                <View
                    style={Styles.allignDots}
                >

                    {
                        //No. of Dots
                        [...Array(data.length)].map((_, index) => (
                            <View
                                key={index}
                                style={[Styles.dotsContainer,
                                { backgroundColor: index === currentPage ? COLORS.redColor : COLORS.redColor + "20" },
                                ]} />
                        ))
                    }
                </View>
                {/* text of get started */}
                {/* show hide button */}

                {
                    currentPage != data.length - 1 ? (
                        <TouchableOpacity
                            onPress={handleNext}
                            style={Styles.next}
                        >
                            <AntDesignIcons name="right"
                                style={Styles.lightNext} />

                            <AntDesignIcons name="right"
                                style={Styles.nextIcon} />

                        </TouchableOpacity>
                    ) : (
                        // Get Started
                        <TouchableOpacity
                            onPress={handleOnboardingScreen}
                            style={Styles.getStart}>

                            <Text style={Styles.innerText}>Get Started</Text>

                            <AntDesignIcons name="right"
                                style={Styles.lightNext} />

                            <AntDesignIcons name="right"
                                style={Styles.nextIcon} />
                        </TouchableOpacity>
                    )
                }

            </View>
        </SafeAreaView>
    )
}

export default OnboardingBottomSection
