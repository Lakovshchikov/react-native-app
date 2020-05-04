import React, { Component } from "react";
import { View, StyleSheet, VirtualizedList, Text, TextInput, Button, TouchableOpacity } from "react-native";
import {AsyncStorage} from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 20,
        paddingTop: 40,
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 7,
        marginLeft: 10
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 5
    },
    text: {
        flex: 2
    },
    controls:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    controlBtn:{
        padding: 50,
    },
    table:{
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
        alignItems: "center",
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5
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

const DATABASE_KEY = "DATA";

// TO DO не работает изменение, надо хранить ключ в state

export default class PetsPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            pet: "",
            pet_name: "",
            data: []
        }
    }

    componentDidMount() {
        const {data} = this.state;
        this._storeData(data)
    }

    _storeData = async (value) => {
        try {
            await AsyncStorage.setItem(DATABASE_KEY, JSON.stringify(value));
        } catch (error) {
        }
    };

    _retrieveData = async () => {
        try {
            return await AsyncStorage.getItem(DATABASE_KEY).then(data => JSON.parse(data))
        } catch (error) {
        }
    };

    renderRow = (data) => {
        return(
            <TouchableOpacity onPress={(e)=>{this.handleRowClick(data.item)}}>
                <View style={styles.tableRow} key={data.item.key}>
                    <Text style={{ ...styles.tableCell, ...styles.tableCell1}}>{data.item.index}</Text>
                    <Text style={{ ...styles.tableCell, ...styles.tableCell3}}>{data.item.pet}</Text>
                    <Text style={{ ...styles.tableCell, ...styles.tableCell3}}>{data.item.pet_name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderHeader(){
        return(
            <View style={{ ...styles.tableRow}}>
                <Text style={{ ...styles.tableCell, ...styles.tableCellHeader, ...styles.tableCell1}}>#</Text>
                <Text style={{ ...styles.tableCell, ...styles.tableCellHeader, ...styles.tableCell3}}>Животное</Text>
                <Text style={{ ...styles.tableCell, ...styles.tableCellHeader, ...styles.tableCell3}}>Кличка</Text>
            </View>
        )
    }

    handlerTextChange = (text, inputID) => {
        this.setState({[inputID]: text})
    }

    handleRowClick = (data) => {
        this.setState({pet: data.pet, pet_name: data.pet_name})
    }

    getItemCount = () => { return this.state.data.length}

    getItem = (data, index) => { return {...this.state.data[index], index: index}}

    handlerAddItem = () => {
        const { pet, pet_name } = this.state;
        if (pet !== "" && pet_name !=="") {
            this._retrieveData().then(data=>{
                data.push({
                    pet: pet,
                    pet_name: pet_name,
                    key: pet+pet_name
                });
                this._storeData(data);
                this.setState({data: data, pet: "", pet_name: ""})
            })
        }
    }

    handlerRemoveItem = () => {
        const { pet, pet_name, data } = this.state;
        const key = pet+pet_name;
        const newData = data.filter((item=>item.key !== key));
        this._storeData(newData);
        this.setState({data: newData, pet: "", pet_name: ""})
    }

    handlerChangeItem = () => {
        const { data, pet, pet_name } = this.state;
        const key = pet+pet_name;
        const newData = data.map(item => {
            if (item.key === key) {
                item.pet = pet;
                item.pet_name = pet_name;
            }
            return item
        });
        this._storeData(newData);
        this.setState({data: newData, pet: "", pet_name: ""})
    }

    render() {
        const {pet, pet_name, data} = this.state;
        return(
            <View style={styles.root}>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Животное:</Text>
                        <TextInput
                            onChangeText={text => this.handlerTextChange(text, "pet")}
                            value={pet}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Кличка:</Text>
                        <TextInput
                            onChangeText={text => this.handlerTextChange(text, "pet_name")}
                            value={pet_name}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={styles.controls}>
                    <Button
                        title="Добавить"
                        color="#2196f3"
                        onPress={this.handlerAddItem}
                    />
                    <Button
                        title="Изменить"
                        color="#8bc34a"
                        onPress={this.handlerChangeItem}
                    />
                    <Button
                        title="Удалить"
                        color="#f44336"
                        onPress={this.handlerRemoveItem}
                    />
                </View>
                <VirtualizedList
                    style={styles.table}
                    data={data}
                    initialNumToRender={1}
                    renderItem={this.renderRow}
                    keyExtractor={item => item.index}
                    getItemCount={this.getItemCount}
                    getItem={this.getItem}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        )
    }
}
