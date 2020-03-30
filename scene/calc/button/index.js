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

export default function CalcButton({text, onPress}) {
    return(
        <View style={styles.container}>
            <Button
                title={text}
                onPress={onPress}
            />
        </View>
    )
}
