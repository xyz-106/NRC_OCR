import React, { Component } from "react";
import { View } from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';
import mlAction from '../actions/mlAction';import RNFS from 'react-native-fs';

class API extends Component{
componentDidMount=()=>{
    RNFS.readFile(this.props.Uncrop_Image,'base64').then(result=>
        {//console.log('I am result',result);
       axios.post('http://18.138.232.254:5000',result,{headers:{"Content-type":"text/plain"}})
       .then(
         response=>{     
          // console.log("I am Response",response)
       this.setState({FormData:response.data})         
       this.props.storeFormData(this.state.FormData)
      }
       )
        .catch(err => {console.log('I am err 1 ' + err.message)});       
       }
        ).catch(err => {console.log('I am err 2' + err.message)})
    }
render(){
   // this.props.FormData!=''?console.log("I am From Render",this.props.FormData):null
    return(
      <View></View>
    )
}
}
const bindState=(state)=>{
    return{
      Crop_Image: state.mlDataState.Crop_Image,
      Uncrop_Image: state.mlDataState.Uncrop_Image,
      Flag:state.mlDataState.Flag,
      FormData:state.mlDataState.FormData
    }
  }
const bindDispatch=dispatch=>{
   return{
    storeFormData:(FormData)=>dispatch(mlAction.storeFormData(FormData))
   }
}
export default connect(bindState,bindDispatch)(API);