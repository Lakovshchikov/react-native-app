import React, { Component } from "react";
import { View, StyleSheet, VirtualizedList, Text } from "react-native";
import data from "./data";

const styles = StyleSheet.create({
    table:{
        margin: 20,
        marginTop: 30,
        padding:2,
        paddingBottom: 0,
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 1
    },
    tableRow: {
        display: "flex",
        flexDirection: "row",
        borderBottomColor: 'black',
        borderBottomWidth: 1

    },
    tableCellHeader: {
        fontWeight: "bold"
    },
    tableCell: {

    },
    tableCell1: {
      flex: 1
    },
    tableCell5: {
        flex: 5
    },
    tableCell3: {
        flex: 3
    },
    tableCell2: {
        flex: 2
    }
})

export default class Table extends Component{
    constructor(props) {
        super(props);
        this.data = data;
    }

    renderRow(data){
        return(
            <View style={styles.tableRow}>
                <Text style={{ ...styles.tableCell, ...styles.tableCell1}}>{data.item.index}</Text>
                <Text style={{ ...styles.tableCell, ...styles.tableCell5}}>{data.item.name}</Text>
                <Text style={{ ...styles.tableCell, ...styles.tableCell3}}>{data.item.teacher}</Text>
                <Text style={{ ...styles.tableCell, ...styles.tableCell2}}>{data.item.final}</Text>
            </View>
        )
    }

    renderHeader(){
        return(
            <View style={{ ...styles.tableRow}}>
                <Text style={{ ...styles.tableCell, ...styles.tableCellHeader, ...styles.tableCell1}}>#</Text>
                <Text style={{ ...styles.tableCell, ...styles.tableCellHeader, ...styles.tableCell5}}>Дисциплина</Text>
                <Text style={{ ...styles.tableCell, ...styles.tableCellHeader, ...styles.tableCell3}}>Преподаватель</Text>
                <Text style={{ ...styles.tableCell, ...styles.tableCellHeader, ...styles.tableCell2}}>Итог</Text>
            </View>
        )
    }

    getItemCount = () => {debugger; return this.data.subjects.length}

    getItem = (data, index) => {debugger; return {...this.data.subjects[index], index: index}}

    render() {
        return(
            <VirtualizedList
                style={styles.table}
                data={data}
                initialNumToRender={1}
                renderItem={this.renderRow}
                keyExtractor={item => item.name}
                getItemCount={this.getItemCount}
                getItem={this.getItem}
                ListHeaderComponent={this.renderHeader}
            />
        )
    }
}
