import React from "react";
import {Button, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default function CalcButton({text, onPress}) {
    return(
        <Button
            style={styles.container}
            title={text}
            onPress={onPress}
        />
    )
}
