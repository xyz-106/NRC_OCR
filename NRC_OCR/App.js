
import {StatusBar,View} from 'react-native';
import React from 'react';
import config from './src/Utils/config';
import Home from './src/screens/Home';
import CameraView from './src/screens/CameraView';
import {Router,Scene} from 'react-native-router-flux';

const App=()=>{

  return(
      <View style={{flex:1}}>
        <StatusBar backgroundColor={config.colors.primaryColor} />
        <Router>  
            <Scene key='root'>
             <Scene key='HomeScreen' component={Home}  initial={true} hideNavBar/>
             <Scene key='CameraViewScreen' component={CameraView} hideNavBar/> 

            </Scene>
        </Router>        
      </View>
  )
}
export default App;