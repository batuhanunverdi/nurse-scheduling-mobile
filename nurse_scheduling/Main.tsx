import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import HomePage from "./src/pages/HomePage.tsx";
import HomeIcon from "./src/assets/icons/HomeIcon.tsx";
import ShiftSelect from "./src/pages/ShiftSelect.tsx";
import ChangeShiftRequest from "./src/pages/ChangeShiftRequest.tsx";
import MyProfile from "./src/pages/MyProfile.tsx";
import ShiftSelectIcon from "./src/assets/icons/ShiftSelectIcon.tsx";
import React, {useContext} from "react";
import ChangeShiftRequestIcon from "./src/assets/icons/ChangeShiftRequestIcon.tsx";
import ProfileIcon from "./src/assets/icons/ProfileIcon.tsx";
import Login from "./src/pages/Login.tsx";
import MyShifts from "./src/pages/MyShifts.tsx";
import CreateShiftRequest from "./src/pages/CreateShiftRequest.tsx";
import {AuthContext} from "./src/contexts/AuthContext.tsx";
import SuccessfulPage from "./src/pages/SuccessfulPage.tsx";

const Tabs = createBottomTabNavigator();

type HomeStackParamList = {
HomePageScreen: undefined,
}
type ShiftSelectStackParamList = {
ShiftSelectScreen:undefined,
}
type ChangeShiftParamList = {
ChangeShiftRequestScreen: undefined,
CreateShiftRequestScreen:undefined,
SuccessfulPageScreen:undefined,
}

type ProfileStackParamList = {
MyProfileScreen:undefined,
MyShiftsScreen:undefined,
}
const HomePageStack = createStackNavigator<HomeStackParamList>();
const ShiftSelectStack = createStackNavigator<ShiftSelectStackParamList>();
const ChangeShiftStack = createStackNavigator<ChangeShiftParamList>();
const ProfileStack = createStackNavigator<ProfileStackParamList>();
const HomePageStackScreen = () => (
    <HomePageStack.Navigator>
        <HomePageStack.Screen
            name="HomePageScreen"
            component={HomePage}
            options={{
                headerShown: false,
            }}
        />
    </HomePageStack.Navigator>
);
const ShiftSelectStackScreen = () => (
    <ShiftSelectStack.Navigator>
        <ShiftSelectStack.Screen
            name="ShiftSelectScreen"
            component={ShiftSelect}
            options={{
                headerShown: false,
            }}
        />
    </ShiftSelectStack.Navigator>
);

const ChangeShiftStackScreen = () => (
    <ChangeShiftStack.Navigator>
        <ChangeShiftStack.Screen
            name="ChangeShiftRequestScreen"
            component={ChangeShiftRequest}
            options={{
                headerShown: false,
            }}
        />
        <ChangeShiftStack.Screen
            name={"CreateShiftRequestScreen"}
            component={CreateShiftRequest}
            options={{headerShown: false}}
        />
        <ChangeShiftStack.Screen
            name={"SuccessfulPageScreen"}
            component={SuccessfulPage}
            options={{headerShown: false}}
        />
    </ChangeShiftStack.Navigator>
);

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen
            name="MyProfileScreen"
            component={MyProfile}
            options={{
                headerShown: false,
            }}
        />
        <ProfileStack.Screen
            name="MyShiftsScreen"
            component={MyShifts}
            options={{headerShown: false}}
        />
    </ProfileStack.Navigator>
);

export default function Main() {
    const {isAuth} = useContext(AuthContext);
    return (
        !isAuth? <Login/>:
        <Tabs.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: {
                    backgroundColor: "#F5F6FA",
                    borderTopWidth: 0,
                },
            }}
        >
            <Tabs.Screen
                name="HomePage"
                component={HomePageStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <HomeIcon color={color}  />
                    ),
                }}
            />
            <Tabs.Screen
                name="ShiftSelect"
                component={ShiftSelectStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <ShiftSelectIcon color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="ChangeShiftRequest"
                component={ChangeShiftStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <ChangeShiftRequestIcon color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="MyProfile"
                component={ProfileStackScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) => (
                        <ProfileIcon color={color} />
                    ),
                }}/>
        </Tabs.Navigator>
    )
}
