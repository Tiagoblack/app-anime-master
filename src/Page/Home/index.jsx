import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import NotificatioScreen from './RoutesHome/Notification'
import FavoriteScreen from './RoutesHome/Favorite';
import HomeTabScreen from './RoutesHome/HomeTab';
import ProfileScreen from './RoutesHome/Profile'
import SearchScreen from './RoutesHome/Search'

const Tabs = createBottomTabNavigator();
export default ()=>(

    <Tabs.Navigator>
        <Tabs.Screen name="HomeTab" component={HomeTabScreen}
            options={{
                headerShown:false,
                headerMode: 'none',
            navigationOptions: {
                 headerVisible: false,
                }
            }}        
        />
        <Tabs.Screen name="Notification" component={NotificatioScreen}/>
        <Tabs.Screen name="Search"  component={SearchScreen}/>
        <Tabs.Screen name="favorite" component={FavoriteScreen}/>
        <Tabs.Screen name="Profile" component={ProfileScreen}/>
    </Tabs.Navigator>

)