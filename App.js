import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useCallback, useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import { navigationRef } from './RootNavigation';
import Homepage from './Home';
import Header from './Header';
import Footer from './Footer';
import NewsDetail from './NewsDetail';
import AboutJunk from './About';
import QuotePage from './Quote';
import Catalogpage from './Catalog';
import CatalogDetail from './CatalogDetail';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  } else {

    return (
      <NavigationContainer
        style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}
        ref={navigationRef}
        onReady={onLayoutRootView}
      >
        <Stack.Navigator 
          initialRouteName='Junkyard'
        >

          <Stack.Screen
            name="Junkyard"
            component={Homepage}
            options={{
              header: () => <Header headerDisplay="Junkyard" />,
              headerMode:"screen"
            }}
          />
          <Stack.Screen
            name="NewsDetail"
            component={NewsDetail}
            options={{
              header: () => <Header headerDisplay="News" />,
              headerMode:"screen"
            }}
          />
          <Stack.Screen
            name="AboutJunk"
            component={AboutJunk}
            options={{
              header: () => <Header headerDisplay="About Junkyard" />,
              headerMode:"screen"
            }}
          />
          <Stack.Screen
            name="Quote"
            component={QuotePage}
            options={{
              header: () => <Header headerDisplay="Get a quote" />,
              headerMode:"screen"
            }}
          />
          <Stack.Screen
            name="Catalog"
            component={Catalogpage}
            options={{
              header: () => <Header headerDisplay="Catalog" />,
              headerMode:"screen"
            }}
          />
          <Stack.Screen
            name="CatalogDetail"
            component={CatalogDetail}
            options={{
              header: () => <Header headerDisplay="Product Information" />,
              headerMode:"screen"
            }}
          />
        </Stack.Navigator>
        <Footer/>
      </NavigationContainer>
    );
  }
}