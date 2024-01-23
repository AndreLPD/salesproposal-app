import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

type Props = {
  color: string;
  load: Boolean;
  children: any;
};

const Loading = ({ color = "#ffffff", load, children }: Props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(load);
  }, [load]);
  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color={color} />
      ) : (
        <View>{children}</View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default Loading;
