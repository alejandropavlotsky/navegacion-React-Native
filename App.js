import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation'; 
import { createStackNavigator } from 'react-navigation-stack';


const Logo = () => {
  return (
    <Text>LALALA</Text>
  )
}


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Ir a detalle"
        onPress={() => navigation.navigate('Detalle', {id: '2'})}
      />
      <StatusBar style="auto" />
    </View>
  )
}

HomeScreen.navigationOptions = {
  headerTitle: () => <Logo/>,
}





const DetalleScreen = ({navigation}) => {
  const lala = navigation.getParam('lala', 'valor por defecto')
  return (
    <View style={styles.container}>
      <Text>Soy la pantalla de detalle {lala}</Text>
      <Button title="Volver"
        onPress={() => navigation.setParams({ title: 'Usuario 1'})}
      />
      <StatusBar style="auto" />
    </View>
  )
}
DetalleScreen.navigationOptions = ({ navigation, navigationOptions }) => {
  return {
    title: navigation.getParam('title', 'Cargando...'),
    headerStyle: {
      backgroundColor: navigationOptions.headerStyle.backgroundColor
    }
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Detalle: {
    screen: DetalleScreen
  }
}, { initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
    backgroundColor: '#fec'
  },
  headerTintColor: '#222',
  headerTitleStyle: {
    fontWeight: '100',
    letterSpacing: 5
  }
  }
})

export default createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
