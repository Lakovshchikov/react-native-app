import React, { Component } from "react";
import { View, StyleSheet, VirtualizedList, Text, Image } from "react-native";
import data from "./data";

const styles = StyleSheet.create({
    table:{
        margin: 20,
        marginTop: 70,
        padding:2,
        paddingBottom: 0
    },
    tableRow: {
        display: "flex",
        flexDirection: "row",
        padding: 5

    },
    tableCell:{

    },
    tableCell4: {
        flex: 4
    },
    tableCell6: {
        flex: 6,
        display: "flex",
        flexDirection: "column",
        paddingLeft: 60
    },
    image: {
        width: 170,
        height: 170
    }
})

export default class Table extends Component{
    constructor(props) {
        super(props);
        this.data = data;
    }

    renderRow(data){
        const { item } = data;
        return(
            <View style={styles.tableRow} key={data.index}>
                <View style={styles.tableCell4}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: item.url
                        }}
                        progressiveRenderingEnabled={true}
                    />
                </View>
                <View style={styles.tableCell6}>
                    <Text style={{paddingBottom: 5, fontSize: 16, fontWeight:"bold"}}>{item.title}</Text>
                    <Text style={{fontSize:12, color:"rgb(33,150,243)"}}>{item.url}</Text>
                    <Text style={{paddingTop: 5, color:"rgb(128,194,87)"}}>progress={item.progress}</Text>
                </View>
            </View>
        )
    }

    getItemCount = () => {return this.data.images.length};

    getItem = (data, index) => {
        this.data;
        return {...this.data.images[index], index: index}
    };

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
            />
        )
    }
}

