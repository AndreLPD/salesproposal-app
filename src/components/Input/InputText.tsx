import React from "react";
import { TextInput as Input, StyleSheet } from "react-native";
import theme from "../../../assets/styles/theme";

const InputText = ({
  keyboardType,
  placeholder,
  value,
  onChangeText,
  fontSize,
  labelStyle,
  required = false,
  secureTextEntry = false,
  style,
  maxLength,
}: any) => {
  return (
    <>
      <Input
        style={[styles.input, style]}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        fontSize={fontSize}
        labelStyle={labelStyle}
        required={required}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 20,
    padding: 12,
    color: theme.input.textColor,
    backgroundColor: theme.background,
    borderRadius: theme.borderRadius,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
    zIndex: 1,
  },
});

export default InputText;
