import { Link } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";

function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.signup}>SignUp</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry={true}
        style={styles.input}
      />

      <View style={styles.buttonView}>
        <Link href="/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </Pressable>
        </Link>
        <Link href="/" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Back to sign in</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  signup: {
    color: "#111",
    marginTop: 100,
    marginBottom: 50,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    marginHorizontal: 20,
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 15,
  },

  buttonView: {
    marginTop: 50,
  },
  button: {
    backgroundColor: "#eee",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginHorizontal: 20,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 16,
  },
});

export default SignUp;
