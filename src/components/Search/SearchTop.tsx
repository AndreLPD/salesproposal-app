import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import PickerInput from "../PickerInput/PickerInput";
import InputText from "../Input/InputText";

const SearchTop = ({ setSearch }: any) => {
  const [selectedValue, setSelectedValue] = useState();
  const itemsPicker = [
    { label: "Por Nome(A-Z)", value: 0 },
    { label: "Por Nome(Z-A)", value: 1 },
  ];
  return (
    <View style={styles.search}>
      {/* <View style={{ marginTop: 30, marginHorizontal: 10 }}>
        <PickerInput
          listObjItems={itemsPicker}
          label={"label"}
          value={"value"}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          onValueChange={setSelectedValue}
        />
      </View> */}
      <View
        style={{
          backgroundColor: "#c9c9c9",
          paddingTop: 15,
          marginHorizontal: 10,
          paddingHorizontal: 10,
        }}
      >
        <InputText
          placeholder="Search"
          onChangeText={(value) => setSearch(value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    justifyContent: "space-around",
  },
});

export default SearchTop;
