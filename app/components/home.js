import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import items from "../assets/items";

const GridCardSystem = () => {
  const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: item.backgroundColor }]}>
      <Link href={item.href}>
        <Text style={styles.cardText}>{item.title}</Text>
      </Link>
    </View>
  );

  return (
    <>
      <StatusBar hidden />
      <Text style={styles.title}>Vehical part Shop App</Text>
      <FlatList
        data={items}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 150,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default GridCardSystem;
