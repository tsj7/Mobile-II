import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Content from './Content';

class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {

    };
  }
  static navigationOptions = {
    title: 'Homepage'
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title = {'SignIn'}
          onPress = {() => {
            this.props.navigation.navigate('SignIn')
          }}
        />
        <Button
          title = {'SignUp'}
          onPress = {() => {
            this.props.navigation.navigate('SignUp')
          }}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Routes = StackNavigator({
  Home: { screen: Home },
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  Content: { screen: Content },
})

export default Routes;
