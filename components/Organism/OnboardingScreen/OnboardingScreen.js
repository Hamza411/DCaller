import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StatusBar, FlatList, ImageBackground } from 'react-native'
import { COLORS, SIZES } from '../../../assets/constant/index'
import data from '../../Atoms/data'
import FlatlistItem from '../../Molecules/FlatlistItems'
import OnboardingBottomSection from '../../Molecules/OnboardingBottomSection'
import OnboardingTopSection from '../../Molecules/OnboardingTopSection/OnboardingTopSection'
import Styles from './Styles'


const OnboardingScreen = () => {

    const flatListRef = useRef();

    const [currentPage, setCurrentPage] = useState(0)

    const [viewableItems, setViewableItems] = useState([])

    const handleViewableItemsChanged = useRef(({ viewableItems }) => {
        setViewableItems(viewableItems)
    })

    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index)
            return;
        setCurrentPage(viewableItems[0].index)
    }, [viewableItems])


    const handleNext = () => {
        if (currentPage == data.length - 1)
            return;

        flatListRef.current.scrollToIndex({
            animated: true,
            index: currentPage + 1
        })
    }

    const handleBack = () => {
        if (currentPage === 0)
            return;
        flatListRef.current.scrollToIndex({
            animated: true,
            index: currentPage - 1
        })
    }

    const handleSkip = () => {
        flatListRef.current.scrollToIndex({
            animated: true,
            index: data.length - 1
        })
    }


    return (
        <>
            <View style={Styles.bg}>
                <StatusBar barStyle="dark-content" backgroundColor={COLORS.bgColor} />

                {/* Top section back and skip button */}

                <OnboardingTopSection
                    handleBack={handleBack}
                    handleSkip={handleSkip}
                    currentPage={currentPage}
                />

                {/* FlatList With Pages */}
                <FlatList
                    data={data}
                    pagingEnabled
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) => <FlatlistItem item={item} />}
                    ref={flatListRef}
                    onViewableItemsChanged={handleViewableItemsChanged.current}
                    viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                    initialNumToRender={1}
                    extraData={SIZES.width}
                />
                {/* Bottom Section Pagination and GetSTarted Button */}

                <OnboardingBottomSection
                    currentPage={currentPage}
                    handleNext={handleNext}
                />
            </View>
        </>

    )
}

export default OnboardingScreen
