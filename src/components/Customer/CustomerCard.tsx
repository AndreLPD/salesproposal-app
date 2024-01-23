import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { STATUS } from "../../constants/StatusConstants";
import useFirestore from "../../hooks/useFirestore";
import RouteConstants from "../../constants/RouteConstants";
import theme from "../../../assets/styles/theme";

const CustomerCard = ({ navigation, customer }: any) => {
  const { deleteByDoc } = useFirestore("customers");

  const onPressDelete = async (item) => {
    await deleteByDoc(item.id);
  };

  const onPressUpdate = (item) => {
    navigation.navigate(RouteConstants.PROPOSALREGIST, {
      customer: item,
      navigation: navigation,
    });
  };

  const validationStatus = () => {
    switch (customer.status) {
      case STATUS.CANCELED:
        return { name: "closecircleo", color: "red" };
        break;
      case STATUS.WAITING:
        return { name: "clockcircleo", color: "orange" };
        break;
      case STATUS.CONFIRMED:
        return { name: "checkcircleo", color: "green" };
        break;
      default:
        break;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign {...validationStatus()} size={50} />
          <View style={styles.data}>
            <View>
              <Text style={styles.title}>{customer.name}</Text>
              <Text style={styles.text}>{`Cpf - ${customer.cpf}`}</Text>
              <Text style={styles.text}>{customer.city}</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={styles.modify}
            onPress={() => onPressUpdate(customer)}
          >
            <Ionicons name="create" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modify}
            onPress={() => onPressDelete(customer)}
          >
            <Ionicons name="close" size={32} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  data: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "800",
  },
  text: {
    fontSize: 18,
    fontWeight: "400",
  },
  modify: {
    alignItems: "center",
    backgroundColor: theme.secondary,
    padding: 15,
    borderRadius: 20,
  },
});

export default CustomerCard;
