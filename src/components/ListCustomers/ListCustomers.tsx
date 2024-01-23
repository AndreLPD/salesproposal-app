import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import CustomerCard from "../Customer/CustomerCard";

const ListCustomers = ({ ListObjCustomers, search, navigation }: any) => {
  const [result, setResult] = useState();
  const renderCustomer = ({ item }: any) => (
    <View>
      <CustomerCard customer={item} navigation={navigation} />
    </View>
  );

  useEffect(() => {
    const result = Object.values(ListObjCustomers).filter((customer) => {
      // Aqui, você pode personalizar a lógica de pesquisa conforme necessário
      return Object.values(customer).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      );
    });
    setResult(result);
  }, [search]);

  return (
    <View>
      <FlatList data={result} renderItem={renderCustomer} />
    </View>
  );
};

export default ListCustomers;
