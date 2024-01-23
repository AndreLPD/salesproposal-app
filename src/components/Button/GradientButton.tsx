import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import theme from "../../../assets/styles/theme";

const GradientButton = ({
  onPress,
  buttonStyle = styles.style,
  gradient = [theme.secondary, theme.primary],
  backgroundColor,
  textStyle = styles.text,
  text,
  icon,
  iconProps = styles.icon,
  style,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      backgroundColor={[theme.primary, theme.secondary]}
      disabled={disabled}
      onPress={onPress}
      style={style}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0.7, y: 1 }}
        colors={disabled ? ["#CCCCCC", "#CCCCCC"] : gradient}
        backgroundColor={backgroundColor}
        style={[buttonStyle, style]}
        disabled={disabled}
      >
        {icon && <AntDesign name={icon} {...iconProps} />}
        <Text style={textStyle}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  style: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: theme.borderRadius,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "500",
    color: theme.background,
  },
  icon: {
    size: 20,
    marginLeft: 10,
    padding: 20,
    color: theme.background,
  },
  button: {},
});
