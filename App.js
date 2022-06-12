import * as React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SettingScreen: SettingScreen,
});

const AppContainer = createAppContainer(AppNavigator);
