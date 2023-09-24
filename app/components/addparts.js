import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddProductScreen() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImages([...selectedImages, result.uri]);
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Product submitted:', { productName, description, price, selectedImages });
  };

  return (
    <ScrollView style={styles.container}>
            <View style={styles.formContainer}>
        <Text style={styles.header}>Add New Product</Text>

        <Text style={styles.label}>Product Name</Text>
        <TextInput
          onChangeText={text => setProductName(text)}
          value={productName}
          placeholder="Enter product name"
          style={styles.input}
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          onChangeText={text => setDescription(text)}
          value={description}
          placeholder="Enter product description"
          style={styles.multilineInput}
          multiline
        />

        <Text style={styles.label}>Price</Text>
        <TextInput
          onChangeText={text => setPrice(text)}
          value={price}
          placeholder="Enter product price"
          keyboardType="numeric"
          style={styles.input}
        />

        <Text style={styles.label}>Product Images</Text>
        <TouchableOpacity style={styles.addImageButton} onPress={pickImage}>
          <Text style={styles.addImageText}>Add Image</Text>
        </TouchableOpacity>
        <FlatList
          data={selectedImages}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={styles.selectedImage} />
          )}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 20,
    borderRadius: 10,
    elevation: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
  },
  multilineInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    height: 120,
    textAlignVertical: 'top',
  },
  addImageButton: {
    width: 100,
    height: 100,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addImageText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  selectedImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 20,
  },
  submitButton: {
    backgroundColor: '#ff6f61',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
