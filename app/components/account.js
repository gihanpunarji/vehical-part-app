import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from "react-native";

const ProfileScreen = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [password, setPassword] = useState("********");
  const [email, setEmail] = useState("johndoe@example.com");
  const [userId, setUserId] = useState("123456");
  const [profileImage, setProfileImage] = useState(
    "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
  ); // Replace with your actual image URL

  const handleSave = () => {
    // Implement your save profile logic here
    // You can send updated user data to a server or save it locally
  };

  const handleProfilePictureChange = () => {
    // Implement logic to change profile picture here
    // You can open an image picker or camera to select a new profile picture
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <Pressable
          style={styles.changeProfileButton}
          onPress={handleProfilePictureChange}
        >
          <Text style={styles.buttonText}>Change Profile Picture</Text>
        </Pressable>
      </View>
      <View style={styles.profileInfoContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>User ID</Text>
        <TextInput
          style={styles.input}
          value={userId}
          onChangeText={(text) => setUserId(text)}
        />
      </View>
      <Pressable style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  changeProfileButton: {
    marginTop: 10,
  },
  profileInfoContainer: {},
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ProfileScreen;
