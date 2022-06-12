import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class SettingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text styles={styles.Text}>Settings</Text>
      </View>
    );
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen: 'HomeScreen',
  SettingScreen: 'SettingScreen',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5653D4',
  },
});
