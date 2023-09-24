import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Pressable } from "react-native";
import { useGlobalSearchParams } from "expo-router";

const singleProductScreen = () => {
  const { name, image, id, qty, price, description, qtyAmount } =
    useGlobalSearchParams();
  const handleUpdate = () => {
    // Implement your update functionality here
  };

  const handleDelete = () => {
    // Implement your delete functionality here
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.id}>ID: {id}</Text>
          <Text style={styles.name}>Name: {name}</Text>
          <Text style={styles.qty}>Qty: {qty}</Text>
          <Text style={styles.qtyAmount}>Qty Amount: {qtyAmount}</Text>
          <Text style={styles.price}>Price: {price}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.buttonRow}>
            <Pressable style={styles.updateButton} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Update</Text>
            </Pressable>
          </View>
          <View style={styles.buttonRow}>
            <Pressable style={styles.deleteButton} onPress={handleDelete}>
              <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  detailsContainer: {
    marginTop: 20,
  },
  id: {
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  qty: {
    fontSize: 16,
    marginTop: 5,
    color: "green",
  },
  qtyAmount: {
    fontSize: 16,
    marginTop: 5,
    color: "cyan",
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: "red",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
  buttonRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  updateButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#FF3B30",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});

export default singleProductScreen;
