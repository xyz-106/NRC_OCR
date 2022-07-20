import React, { Component } from "react";
import { View, style, StyleSheet, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import Header from "../Ui_Component/Header";
import { Card } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Actions } from 'react-native-router-flux';
import {connect} from 'react-redux';
import API from './API';
import ShowFormData from "./ShowFormData";

const { width, height } = Dimensions.get('window');
{console.log("I am device width",width)}
{console.log("I am device height",height)}
class Home extends Component {
    goToCamera = () => {
        Actions.CameraViewScreen()
    }
    render() {  
        return (
            <View style={{flex:1}}>
                <Header title='HEADER_PROFILE' />
                <Text style={styles.NRC}>Please Take NRC Photo</Text>
                <View style={styles.scoll_view}>
                    <TouchableOpacity onPress={() => this.goToCamera()}>
                        <Card containerStyle={styles.card} >
                        <Text style={styles.cardtext}>Front NRC</Text>
                            {this.props.Flag ?                                                                 
                                <View>
                                    <Image                                        
                                          style={{
                                                width: '100%',
                                                height: '100%',
                                                paddingLeft: -15
                                            }}
                                          source={{uri:this.props.Crop_Image}}
                                        />               
                                    </View>   
                            : null}
                            <Icon color={'#dadada'} name='camera' size={25} style={{ position: 'absolute', top: height / 4, left: width / 1.5 }} />

                        </Card>
                    </TouchableOpacity>
                    
                </View>
        
             {this.props.Flag? <API/>:null}
             {this.props.FormData!=''?<ShowFormData/>:null}
            </View>
           
        )
    }
}
 const styles = StyleSheet.create({
     card: {
         backgroundColor: '#EBE7EA',
         width: width / 1.2,
         height: height / 3.05,//5
         borderWidth: 0,
         borderRadius: 10,

    },
     cardtext: {
         position: 'absolute',
         top: height / 9,
         left: width / 8,
         color: '#dadada',
         fontSize: 20
    },
    NRC: {
         marginTop: 20,
         fontSize: 18,
        paddingLeft: '25%'
    },
    scoll_view: {
         paddingLeft: '4.7%'
     },
    tinyLogo: {
        width: 50,
        height: 50,
   },
    imgcontainer: {
        flex: 1
    }})

    const bindState=(state)=>{
        return{
          Crop_Image: state.mlDataState.Crop_Image,
          Uncrop_Image: state.mlDataState.Uncrop_Image,
          Flag:state.mlDataState.Flag,
          FormData:state.mlDataState.FormData
        }
      }
   
   
export default connect(bindState)(Home);