import React, { Component } from 'react';
import {StyleSheet, View, TextInput, Text} from "react-native";
import CalcButton from "./button";

const styles = StyleSheet.create({
    container: {
        padding: 50,
        paddingTop: 70,
        alignSelf: 'stretch'
    },
    containerVer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        display: "flex",
        flexDirection: "row",
        padding: 10
    },
    label: {
        fontSize: 30
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: "50%",
        marginLeft: 10
    }
});

export default class Calculator extends Component{
    constructor(props) {
        super(props);
        this.state={
            input1: 0,
            input2: 0,
            result: 0
        }
    }

    calc(action){
        const {input1, input2} = this.state;
        let result = 0;
        switch (action) {
            case "+":
                result = input1 + input2;
                break;
            case "-":
                result = input1 - input2;
                break;
            case "*":
                result = input1 * input2;
                break;
            case "/":
                result = input1 / input2;
                break;
        }
        this.setState({result: result.toFixed(3)})
    }

    render() {
        const {input1, input2, result} = this.state;

        return(
            <View style={{...styles.container, ...styles.containerVer}}>
                <View style={styles.containerVer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Операнд 1:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => {this.setState({input1: parseFloat(text)})}}
                            keyboardType={"numeric"}
                            value={input1}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Операнд 2:</Text>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={text => {this.setState({input2: parseFloat(text)})}}
                            keyboardType={"numeric"}
                            value={input2}
                        />
                    </View>
                </View>
                <View style={styles.containerVer}>
                    <View style={styles.row}>
                        <CalcButton
                            text={"+"}
                            onPress={()=>{this.calc("+")}}
                        />
                        <CalcButton
                            text={"-"}
                            onPress={()=>{this.calc("-")}}
                        />
                        <CalcButton
                            text={"*"}
                            onPress={()=>{this.calc("*")}}
                        />
                        <CalcButton
                            text={"/"}
                            onPress={()=>{this.calc("/")}}
                        />
                    </View>
                </View>
                <View style={styles.containerVer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Результат:</Text>
                        <Text style={{...styles.label, marginLeft: 5 }}>{result.toString()}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
