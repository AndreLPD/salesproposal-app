import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";
import useFirestore from "../../hooks/useFirestore";

const SalesReport = () => {
  // const [qtdCitys, setQtdCitys] = useState([]);
  const widthAndHeight = 250;
  // const [series, setSeries] = useState([]);
  // const { data } = useFirestore("customers");

  // const getQtdByCitys = () => {
  //   const countedCitys = data.map((item) => {
  //     let city = item.city;
  //     let qtCity = data.filter((obj) => obj.city === city).length;
  //     return {
  //       city,
  //       qtCity,
  //     };
  //   });

  //   const qtCities = countedCitys.map((objeto) => objeto.qtCity);
  //   setSeries(qtCities);
  // };

  // useEffect(() => {
  //   getQtdByCitys();
  // }, []);

  // console.log(countedCitys);
  // console.log(qtCities);

  const series = [10, 20, 30];
  const sliceColor = ["#fbd203", "#ffb300", "#ff9100"];

  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Propostas por cidade</Text>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
        />
        <View style={{ marginTop: 30 }}>
          <Text style={styles.txt}>Goiás</Text>
          <Text style={styles.txt}>Tocantins</Text>
          <Text style={styles.txt}>Brasilia</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  txt: {
    fontSize: 20,
    fontWeight: "700",
  },
});

export default SalesReport;
