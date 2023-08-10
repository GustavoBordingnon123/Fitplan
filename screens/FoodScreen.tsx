import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import NavBar from "../src/components/navbar";
import Card from "../src/components/card";
import SelectRows from "../src/components/selectRows";
import DefaultButton from "../src/components/defaultButton";

export default function FoodScreen() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#202E24",
            alignItems: 'center',
            paddingBottom: 120,
        },
        buttonContainer:{
            marginTop:20,
        }
    });

    const items = ['banana', 'ovo', 'café'];

    const renderItem = ({ item }: any) => (
        <Card
            titleColor='#CFDF20'
            backgroundColor='#0D5913'
            title={`Refeição ${item}`}
            titlePosition='center'
            rows={[
                <SelectRows
                    placeholderText={`Escolha um ${item}`}
                    itens={items}
                    width={320}
                    bgColor="#13861D"
                />
            ]}
            width={350}
        />
    );

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={["café da manhã", "pós treino", "Almoço", "Lanche da tarde", "Janta", "Ceia", "livre"]}
                    renderItem={renderItem}
                    keyExtractor={(item) => item}
                />

                <View style={styles.buttonContainer}>
                    <DefaultButton type="add" borderColor='#CFDF20'  placeholder='adicionar alimento a base' width={250} padding={20} textColor='#CFDF20' />
                </View>
            </View>
            <NavBar />
        </>
    );
}
