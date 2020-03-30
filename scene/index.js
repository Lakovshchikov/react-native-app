import React from 'react';
import Calculator from "./calc"
import Table from "./table"
import {View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containerVer: {
        display: "flex",
        flexDirection: "column"
    },
})

export default function App() {
    return (
        <View style={styles.containerVer}>
            <Table/>
        </View>
    );
}
