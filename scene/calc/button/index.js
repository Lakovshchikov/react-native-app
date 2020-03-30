import React from "react";
import {Button, View, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        minWidth: 50,
        padding: 5
    },
});

export default function CalcButton({text, onPress, active}) {
    return(
        <View style={styles.container}>
            <Button color={active ? "#f05a3c" : "#2196f3"}
                title={text}
                onPress={onPress}
            />
        </View>
    )
}
