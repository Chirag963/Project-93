import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  Button,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text styles={styles.button}>
          <Button
            title="Settings"
            styles={{ width: 100, height: 100 }}
            onPress={() => this.props.navigation.navigate('SettingScreen')}
          />
        </Text>
        <TouchableOpacity
          style={{ backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Battery Alert App</Text>
          
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
});
