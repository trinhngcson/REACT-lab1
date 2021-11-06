import React, {Component} from "react";
import {View,Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'
import { render } from "react-dom";

class Inputs extends Component{
    state = {
        email: '',
        passsword: ''
    }
    handleEmail = (text) =>{
        this.setState({ email:text})
    }
    handlePassword = (text) =>{
        this.setState({ passsword:text})
    }
    login = (email,pass) => {
        alert('email: '+ email +' password: ' +pass)
    }
    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handleEmail}
                />
                 <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                    onChangeText = {this.handlePassword}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.login(this.state.email, this.state.passsword)
                    }>
                    
                    <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})

export default Inputs