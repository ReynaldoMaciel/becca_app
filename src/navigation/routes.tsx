import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import DrawerMenu from '../components/DrawerMenu/DrawerMenu';
import {RootState} from '../store';
import {UserState} from '../store/user/types';
import Login from '../pages/Login/Login';
import ForgotPassword from '../pages/ForgotPassword/ForgotPassword';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';

const Drawer = createDrawerNavigator();

const LoginStack = createStackNavigator();

const Routes = () => {
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  const user = useSelector<RootState, UserState>((state) => state.user);

  useEffect(() => {
    setIsLogged(!!user.token);
  }, []);

  if (isLogged === null) {
    return null;
  }

  return (
    <NavigationContainer>
      {user.token ? (
        <Drawer.Navigator
          screenOptions={{unmountOnBlur: true}}
          drawerContent={(props) => <DrawerMenu {...props} />}>
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      ) : (
        <LoginStack.Navigator headerMode="none">
          <LoginStack.Screen name="Login" component={Login} />
          <LoginStack.Screen name="Register" component={Register} />
        </LoginStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
