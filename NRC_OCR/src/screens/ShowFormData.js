import React, { Component } from "react";
import {View,Text,ScrollView,StyleSheet} from 'react-native';
import { connect } from "react-redux";
import mlAction from "../actions/mlAction";
import t from 'tcomb-form-native';


var Form = t.form.Form;

var stylesheet = Object.freeze({
    fieldset: {},
    formGroup: {
        normal: {
            marginBottom: 10
        },
        error: {
            marginBottom: 10
        }
    },
    textbox: {
        normal: {
            color: 'gray',
            fontSize: 10,
            height: 36,
            weight: 100,
            // paddingVertical: Platform.OS === "ios" ? 7 : 0,
            paddingHorizontal: 7,
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 1,
            marginBottom: 5
        }
    }
});

Form.stylesheet = stylesheet;
class ShowFormData extends Component{
  constructor(props){
    super(props)
    this.state={
      OcrData:[]
    }
  }
  render(){ 
    let ocrString = {};
    let ocrValue = {};  
    let keysArr = Object.keys(this.props.FormData);   
    keysArr.map((k, i) => {
      ocrString[k] = t.Str;
      ocrValue[k] = this.props.FormData[k];
  })
        return(
          <View style={styles.container}>
          <ScrollView style={styles.scrollView} scrollEnabled={true}>
              <Form
                  ref="form"
                  type={t.struct(ocrString)}
                  value={ocrValue}
                  style={styles.item}
              />              
          </ScrollView>
         
          
      </View>
        )
        
    }

}

const bindState=(state)=>{
  return{
    Crop_Image: state.mlDataState.Crop_Image,
    Uncrop_Image: state.mlDataState.Uncrop_Image,
    Flag:state.mlDataState.Flag,
    FormData:state.mlDataState.FormData,
    UpdatedFormData:state.mlDataState.UpdatedFormData
  }
}
const bindDispatch=dispatch=>{
 return{
  storeFormData:(FormData)=>dispatch(mlAction.storeFormData(FormData)),
  storeUpdatedFormData:(UpdatedFormData)=>dispatch(mlAction.storeUpdatedFormData(UpdatedFormData))
 }
}
var styles = StyleSheet.create({
  container: {   
      paddingLeft: '10%',
      paddingRight:'10%',
      marginTop: '10%',
      backgroundColor: '#ffffff',
      flex:1
  },
  item: {
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
  },
  title: {
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 30
  },
  buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
  },
});
export default connect(bindState,bindDispatch)(ShowFormData);