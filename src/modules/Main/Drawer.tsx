import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import Home from '../Home';
import Info from '../Info';

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC = () => {
    const drawerIcon: React.FC<{ focused: boolean; size: any }> = ({ focused, size }, name) => {
        return <Icon name={name} size={size} color={focused ? Colors.active : Colors.inactive} />;
    };
    return (
        <Drawer.Navigator
            drawerType={'slide'}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: Colors.transparent,
                drawerInactiveBackgroundColor: Colors.transparent,
                drawerActiveTintColor: Colors.active,
                drawerInactiveTintColor: Colors.inactive,
                drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
                overlayColor: Colors.transparent,
                drawerStyle: {
                    backgroundColor: Colors.bg,
                    width: '60%',
                },
                sceneContainerStyle: {
                    backgroundColor: Colors.bg,
                },
            }}>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    drawerIcon: options => drawerIcon(options, 'home-outline'),
                }}
            />
            <Drawer.Screen
                name="Info"
                component={Info}
                options={{
                    drawerIcon: options => drawerIcon(options, 'heart-outline'),
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

const Colors = {
    bg: '#7E3F8F',
    active: '#fff',
    inactive: 'grey',
    transparent: 'transparent',
};
