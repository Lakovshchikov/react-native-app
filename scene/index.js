import React from 'react';
import Calculator from "./calc"
import {View, Button, Text, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerVer: {
        display: "flex",
        flexDirection: "column"
    },
})

export default function App() {
    return (
        <View style={styles.containerVer}>
            <Calculator/>
        </View>
    );
}
