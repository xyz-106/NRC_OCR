
import { Provider } from 'react-redux';
import {StatusBar,View} from 'react-native';
import React from 'react';
import configs from './src/Utils/config';
import {Router,Scene} from 'react-native-router-flux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, sagaMiddleware, persistor } from './store';
import Home from './src/screens/Home';
import CameraView from './src/screens/CameraView';

const AppV2=()=>{

  return(
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <View style={{flex:1}}>
             <StatusBar backgroundColor={configs.colors.primaryColor} />
             <Router>       
                <Scene key='root'>
                <Scene key='HomeScreen' component={Home}  initial={true} hideNavBar/>
                <Scene key='CameraViewScreen' component={CameraView} hideNavBar/> 
                 </Scene>
             </Router>   
             </View>
          </PersistGate>
       
      </Provider>

  
   
  
  )
}
export default AppV2;