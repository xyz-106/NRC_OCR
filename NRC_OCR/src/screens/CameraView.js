import React, { Component } from 'react';
import { RNCamera } from 'react-native-camera';
import { View, Dimensions, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
import ImageEditor from '@react-native-community/image-editor';
import Icon from 'react-native-vector-icons/Entypo';
import { Actions } from 'react-native-router-flux';
import BarcodeMask from 'react-native-barcode-mask';
import {connect} from 'react-redux';
import mlAction from "../actions/mlAction";

const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const SQUARE_SIZE = 250;
const ref = React.createRef();

class CameraView extends Component {
  constructor(props) {
    super(props);
  }
  hasAndroidPermission = async () => {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }

  takePicture = async () => {
    if (ref.current) {
      const options = { quality: 0.5, base64: true };

      const data = await ref.current.takePictureAsync(options);
      const temp=data.uri;
      this.setState({Uncrop_Image:temp});
      this.props.getUnCropImage(this.state.Uncrop_Image);
      
       const cropData = {
         offset: {
           x: data.width / 5,
           y: data.height / 4,

         },    
         size: {
           width: (data.width/1.8), 
           height: (data.height/2),
         },
         resizeMode: 'contain'
       };
       ImageEditor.cropImage(
         temp,
         cropData).then(temp => {  
         this.setState({Crop_Image:temp});
         this.props.getCropImage(this.state.Crop_Image);
         this.setState({Flag:true})
         this.props.controlFlag(this.state.Flag)
         Actions.HomeScreen();
       });
    }
  }

  goToMainPage = () => {
    Actions.cropimage2();
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          
           <RNCamera
                ref={ref}
                type={RNCamera.Constants.Type.back}
                captureAudio={false}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                }}

                style={{ flex: 1 }}
                ratio={'1:1'}
              >
                <BarcodeMask
                  width={300} height={200} showAnimatedLine={false}
                  outerMaskOpacity={0.8} style={{ backgroundColor: 'transparent' }}
                />
                <View style={styles.caputureContainer}>
                  <TouchableOpacity style={styles.SubmitButtonStyle}
                    onPress={() => this.takePicture()}
                  />

                </View>
              </RNCamera>
             
        </View>
        <Icon color={'#ffffff'} name='cross' size={40}
          style={{ position: 'absolute', top: height / 10, left: width / 1.5 + 30 }}
          onPress={() => this.goToMainPage()}
        />
      </View>

    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  caputureContainer: {
    position: 'absolute',
    bottom: (windowHeight / 7),
    left: (windowWidth / 2 - 25)
  },

  SubmitButtonStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#ccc'
  }
})

const bindState=(state)=>{
  return{
    Crop_Image: state.mlDataState.Crop_Image,
    Uncrop_Image: state.mlDataState.Uncrop_Image,
    Flag:state.mlDataState.Flag
  }
}
const bindDispatch=dispatch=>{
  return{
    getCropImage:(Crop_Image)=>dispatch(mlAction.getCropImage(Crop_Image)),
    getUnCropImage:(Uncrop_Image)=>dispatch(mlAction.getUnCropImage(Uncrop_Image)),
    controlFlag:()=>dispatch(mlAction.controlFlag())
  }
}
export default connect(bindState,bindDispatch)(CameraView);