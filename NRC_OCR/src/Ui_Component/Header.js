import configs from "../Utils/config";
import {StyleSheet,View,Text} from "react-native";
import React from "react";
const Header =({title})=>{
    return(
        <View style={configs.Style.header}>
            <Text style={styles.title}>
             OCR</Text>
        </View>

    )   
}
const styles = StyleSheet.create({
    title: {
        fontSize: configs.fontSize.extraLarge, fontWeight: 'bold',
        color: '#fff', flex: 1, textAlign: 'center'
    }})
export default Header;