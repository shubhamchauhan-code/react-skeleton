import React, {useCallback} from 'react';
import Signin from '../APP/Pages/Signin';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import Signup from '../APP/Pages/Signup';
import SplashScreens from '../APP/Pages/SplashScreens';
import App from '../App';

const AppStackNavigator = createStackNavigator();
const AuthContext = React.createContext();

function SignInScreen({route, navigation}) {
  const {signIn} = React.useContext(AuthContext);
  return (
    <Signin
      route={route}
      navigation={navigation}
      onSignin={(token) => {
        signIn(token);
      }}
    />
  );
}

function SignUpScreen({route, navigation}) {
  const {signUp} = React.useContext(AuthContext);
  return (
    <Signup
      route={route}
      navigation={navigation}
      onSignin={(token) => {
        signUp(token);
      }}
    />
  );
}

function ll() {
  const {signOut} = React.useContext(AuthContext);
  signOut();
}

function StartApp() {
  return App(ll);
}

const Root: () => React$Node = () => {
  AsyncStorage.removeItem('token');
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem('token');
      } catch (e) {
        // Restoring token failed
      }
      // After restoring token, we may need to validate it in production apps
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      setTimeout(() => {
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      }, 1000);
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (token) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        AsyncStorage.setItem('token', token).then((res) => {
          dispatch({type: 'SIGN_IN', token: token});
        });
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (token) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        AsyncStorage.setItem('token', token).then((res) => {
          dispatch({type: 'SIGN_IN', token: token});
        });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <AppStackNavigator.Navigator>
          {state.isLoading ? (
            <AppStackNavigator.Screen
              options={{headerShown: false}}
              name="Spalshscreen"
              component={SplashScreens}
            />
          ) : state.userToken == null ? (
            <>
              <AppStackNavigator.Screen
                options={{headerShown: false}}
                name="Signin"
                component={SignInScreen}
              />
              <AppStackNavigator.Screen
                options={{headerShown: false}}
                name="Signup"
                component={SignUpScreen}
              />
            </>
          ) : (
            <AppStackNavigator.Screen
              options={{headerShown: false}}
              name="Home"
              component={StartApp}
            />
          )}
        </AppStackNavigator.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Root;
