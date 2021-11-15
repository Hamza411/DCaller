import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigator from "./BottomNavigator";
import Notification from "../Organism/SideMenu/Notification";
import BlockUser from "../Organism/SideMenu/BlockUser";
import Faq from "../Organism/SideMenu/Faq";
import Feedback from "../Organism/SideMenu/Feedback";
import InviteFriend from "../Organism/SideMenu/InviteFriend";
import Setting from "../Organism/SideMenu/Setting";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const DrawerNavigator = () => {


    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerType: "front"
            }}
        >
            <Drawer.Screen name="Home" component={BottomNavigator}
                options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="md-home"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Notification" component={Notification}
                options={{
                    title: 'Notification',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="notifications"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="Block User" component={BlockUser}
                options={{
                    title: 'Block User',
                    drawerIcon: ({ focused, size }) => (
                        <MaterialIcons
                            name="block"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
            <Drawer.Screen name="FAQ" component={Faq}
                options={{
                    title: 'FAQ',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="information-circle-outline"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
            <Drawer.Screen name="Send FeedBack" component={Feedback}
                options={{
                    title: 'Send FeedBack',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="chatbubble-outline"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }} />
            <Drawer.Screen name="Invite Friends" component={InviteFriend} options={{
                title: 'Invite Friends',
                drawerIcon: ({ focused, size }) => (
                    <FontAwesome5
                        name="user-friends"
                        size={size}
                        color={focused ? '#7cc' : '#ccc'}
                    />
                ),
            }} />
            <Drawer.Screen name="Setting" component={Setting}
                options={{
                    title: 'Setting',
                    drawerIcon: ({ focused, size }) => (
                        <Ionicons
                            name="settings-outline"
                            size={size}
                            color={focused ? '#7cc' : '#ccc'}
                        />
                    ),
                }}
            />
        </Drawer.Navigator >
    )
}

export default DrawerNavigator;