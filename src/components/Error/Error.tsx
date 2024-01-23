import React from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Error = ({ children, style }) => {
  return (
    <View style={[styles.error, style]}>
      <Ionicons name="alert-circle" size={32} color="#fff" />
      {children}
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  error: {
    padding: 3,
    marginTop: -8,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFC107",
    opacity: 0.9,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
