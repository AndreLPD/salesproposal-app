import React from "react";
import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import theme from "../../../assets/styles/theme";

type Props = {
  listObjItems: Array<Object>;
  selectedValue: any;
  onValueChange: any;
  label: any;
  value: any;
  style: any;
};

const PickerInput = ({
  listObjItems,
  selectedValue,
  onValueChange,
  label,
  value,
  style,
}: Props) => {
  // console.log(
  //   Object.values(listObjItems).map((item, index) => (
  //     <Picker.Item
  //       label={item[label]}
  //       value={item[value]}
  //       key={index}
  //       style={{ fontSize: 14 }}
  //     />
  //   ))
  // );
  return (
    <>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.input}
      >
        {Object.values(listObjItems).map((item, index) => (
          <Picker.Item label={item[label]} value={item[value]} key={index} />
        ))}
      </Picker>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    color: theme.input.textColor,
    backgroundColor: theme.background,
    // borderWidth: theme.input.borderWidth,
    // borderColor: theme.input.borderColor,
    borderRadius: 300,
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

export default PickerInput;
