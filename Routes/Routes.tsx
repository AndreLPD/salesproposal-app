import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../src/screens/Home/Home";
import ProposalRegist from "../src/screens/ProposalRegist/ProposalRegist";
import SalesReport from "../src/screens/SalesReport/SalesReport";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Home}>
        <Stack.Screen name="Proposta de Venda" component={Home} />
        <Stack.Screen name="ProposalRegist" component={ProposalRegist} />
        <Stack.Screen name="SalesReport" component={SalesReport} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
