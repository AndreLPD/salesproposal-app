import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GradientButton from "../../components/Button/GradientButton";
import ListCustomers from "../../components/ListCustomers/ListCustomers";
import theme from "../../../assets/styles/theme";
import SearchTop from "../../components/Search/SearchTop";
import RouteConstants from "../../constants/RouteConstants";
import useFirestore from "../../hooks/useFirestore";
import Loading from "../../components/Loading/Loading";

const Home = ({ navigation }: any) => {
  const [search, setSearch] = useState("");

  const navigateToProposalRegist = () => {
    navigation.navigate(RouteConstants.PROPOSALREGIST);
  };

  const navigateToSalesReport = () => {
    navigation.navigate(RouteConstants.SALESREPORT);
  };

  const { data, isLoading } = useFirestore("customers");

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <View style={styles.container}>
      <View>
        <SearchTop setSearch={setSearch} />
      </View>
      <Loading load={isLoading} color={theme.primary}>
        {Object.keys(data)?.length !== 0 ? (
          <View>
            <ListCustomers
              ListObjCustomers={data}
              search={search}
              navigation={navigation}
            />
          </View>
        ) : (
          <View
            style={{
              alignItems: "center",
              marginTop: -200,
              paddingHorizontal: 15,
            }}
          >
            <Text style={styles.text}>
              Não foram encontrados clientes cadastrados!
            </Text>
          </View>
        )}
      </Loading>
      <View style={{ marginHorizontal: 12, justifyContent: "space-between" }}>
        <GradientButton
          text="Nova Proposta"
          icon="pluscircleo"
          gradient={[theme.primary, theme.primary]}
          iconProps={styles.iconProps}
          textStyle={styles.buttonTextStyle}
          onPress={navigateToProposalRegist}
        />
        <GradientButton
          text="Relatório"
          icon="printer"
          style={{ marginTop: 9 }}
          gradient={[theme.tertiary, theme.tertiary]}
          iconProps={styles.iconProps}
          textStyle={styles.buttonTextStyle}
          onPress={navigateToSalesReport}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  iconProps: { size: 30, color: "#fff", marginRight: 10 },
  buttonTextStyle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
});

export default Home;
