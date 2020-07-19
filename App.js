import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './APP/Pages/Home';

const APPNAVIGATOR = createStackNavigator();

// ADD ALL APP SCREENS HERE
function App(logout) {
  return (
    <APPNAVIGATOR.Navigator initialRouteName="HomePage">
      {/* Your screens will be here */}
      <APPNAVIGATOR.Screen name="HomePage" component={Home} />
    </APPNAVIGATOR.Navigator>
  );
}

export default App;
