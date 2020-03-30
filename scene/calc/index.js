import React from "react";
import {StyleSheet, View, TextInput, Text} from "react-native";
import CalcButton from "./button";

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        padding: "10px"
    },
    inputsContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "10px"
    },
    buttonsContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "10px"
    },
    resultContainer:{
        display: "flex",
        flexDirection: "column",
        padding: "10px"
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    label: {

    }
});

class Calculator extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <View style={styles.container}>
                <View style={styles.inputsContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Операнд 1:</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => {}}
                            value={""}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Операнд 2:</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                            onChangeText={text => {}}
                            value={""}
                        />
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.row}>
                        <CalcButton
                            text={"+"}
                            onPress={()=>{}}
                        />
                        <CalcButton
                            text={"-"}
                            onPress={()=>{}}
                        />
                        <CalcButton
                            text={"*"}
                            onPress={()=>{}}
                        />
                        <CalcButton
                            text={"/"}
                            onPress={()=>{}}
                        />
                    </View>
                </View>
                <View style={styles.resultContainer}>
                    <View style={styles.row}>
                        <Text style={styles.label}>Результат:</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Calculator;
