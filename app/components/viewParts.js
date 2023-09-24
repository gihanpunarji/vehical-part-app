import { Link } from "expo-router";
import React, { useState } from "react";
import parts from "../assets/parts";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const ViewParts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [partsData, setPartsData] = useState(parts);
  const [sortBy, setSortBy] = useState("name"); // Default sorting by name

  const handleSearch = () => {
    // Implement search logic here
    // Filter the partsData based on the searchQuery
    const filteredData = initialPartsData.filter((part) =>
      part.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPartsData(filteredData);
  };

  const handleSort = (key) => {
    // Implement sorting logic here
    // Sort the partsData based on the selected key (name, price, qty)
    const sortedData = [...partsData].sort((a, b) => {
      if (key === "name") {
        return a.name.localeCompare(b.name);
      } else if (key === "price") {
        return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      } else if (key === "qty") {
        return a.qty.localeCompare(b.qty);
      }
    });
    setPartsData(sortedData);
    setSortBy(key);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.partItem}>
      <Link
        href={{
          pathname: "components/singleProductScreen",
          params: {
            id: item.id,
            name: item.name,
            image: item.image,
            description: item.description,
            price: item.price,
            qty: item.qty,
            qtyAmount: item.qtyAmount,
          },
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.profileImage}
          />
        </View>
      </Link>
      <Text style={styles.partName}>{item.name}</Text>
      <Text style={styles.partPrice}>{item.price}</Text>
      <Text style={styles.partQty}>{item.qty}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Parts"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
      <View style={styles.sortContainer}>
        <Text style={styles.sortLabel}>Sort By:</Text>
        <TouchableOpacity
          style={[
            styles.sortOption,
            sortBy === "name" && styles.selectedSortOption,
          ]}
          onPress={() => handleSort("name")}
        >
          <Text>Name</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortOption,
            sortBy === "price" && styles.selectedSortOption,
          ]}
          onPress={() => handleSort("price")}
        >
          <Text>Price</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sortOption,
            sortBy === "qty" && styles.selectedSortOption,
          ]}
          onPress={() => handleSort("qty")}
        >
          <Text>Qty</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          data={partsData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.partList}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchContainer: {
    padding: 16,
    backgroundColor: "white",
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  sortContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    backgroundColor: "white",
  },
  imageContainer: {
    width: 120,
    height: 120,
  },
  profileImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  sortLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  sortOption: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  selectedSortOption: {
    backgroundColor: "#eee", // Change this to your selected color
    borderColor: "#111",
  },
  partList: {
    justifyContent: "space-between",
    padding: 16,
  },
  partItem: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 16,
    marginBottom: 16,
    flex: 1,
    marginRight: 16,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  partName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  partPrice: {
    fontSize: 14,
    color: "green", // Change this to your desired color
  },
  partQty: {
    fontSize: 14,
  },
});

export default ViewParts;
