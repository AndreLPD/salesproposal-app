import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import InputText from "../../components/Input/InputText";
import theme from "../../../assets/styles/theme";
import axios from "axios";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ProposalRegistValidation from "../../utils/validations/ProposalRegistValidation";
import useFirestore from "../../hooks/useFirestore";
import ModalComponent from "../../components/Modal/ModalComponent";
import GradientButton from "../../components/Button/GradientButton";
import Error from "../../components/Error/Error";
import { useRoute } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";
import { STATUS } from "../../constants/StatusConstants";
import RouteConstants from "../../constants/RouteConstants";

const ProposalRegist = () => {
  const [responseData, setResponseData] = useState();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [msg, setMsg] = useState("");
  const { getCustomers } = useFirestore("customers");
  const route = useRoute();

  const { customer, navigation } = route.params || {
    customer: {},
  };

  const { create, update } = useFirestore("customers");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(ProposalRegistValidation),
  });

  const saveData = async (data) => {
    try {
      Object.keys(customer)?.length === 0
        ? await create(data)
        : await update(customer.id, data);
      getCustomers();

      setMsg("Cliente Salvo com Sucesso!");
      setModalVisible(true);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    saveData(data);
  };

  const handleChildModalStateChange = (childModalVisible) => {
    setModalVisible(childModalVisible);
  };

  const updateForm = () => {
    Object.keys(customer)?.map((key) => setValue(key, customer[key]));
  };

  useEffect(() => {
    console.log(customer);
    if (Object.keys(customer)?.length !== 0) {
      updateForm();
    }
  }, []);

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <ModalComponent
        type="alert"
        modalVisible={modalVisible}
        onModalStateChange={handleChildModalStateChange}
        closeButton={true}
        iconProps={{
          name: "checkmark-circle-outline",
          size: 100,
          color: theme.tertiary,
        }}
        title="Confirmado"
        msg={msg}
      />
      <View style={styles.rowInput}>
        <View>
          <Text style={styles.label}>Nome</Text>

          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.name && (
            <Error>
              <Text
                style={{ fontSize: 18, color: "#fff", fontWeight: "800" }}
              >{`${errors.name.message}`}</Text>
            </Error>
          )}
        </View>
      </View>
      <View style={styles.rowInput}>
        <View>
          <Text style={styles.label}>Cpf</Text>

          <Controller
            name="cpf"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.cpf && (
            <Error>
              <Text
                style={{ fontSize: 18, color: "#fff", fontWeight: "800" }}
              >{`${errors.cpf.message}`}</Text>
            </Error>
          )}
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ width: "50%" }}>
          <Text style={styles.label}>Telefone</Text>

          <Controller
            name="telefone"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </View>
        <View style={{ width: "50%" }}>
          <Text style={styles.label}>Celular</Text>

          <Controller
            name="celular"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.rowInput}>
        <Text style={styles.label}>Email</Text>

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextInput
              style={styles.input}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        {errors.email && (
          <Error>
            <Text
              style={{ fontSize: 18, color: "#fff", fontWeight: "800" }}
            >{`${errors.email.message}`}</Text>
          </Error>
        )}
      </View>
      <View style={styles.rowInput}>
        <View>
          <Text style={styles.label}>Cep</Text>

          <Controller
            name="cep"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ width: "70%" }}>
          <Text style={styles.label}>Cidade</Text>

          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </View>
        <View style={{ width: "30%" }}>
          <Text style={styles.label}>UF</Text>

          <Controller
            name="state"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <View style={{ width: "80%" }}>
          <Text style={styles.label}>Endereço</Text>

          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </View>
        <View style={{ width: "20%" }}>
          <Text style={styles.label}>N</Text>
          <Controller
            name="number"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextInput
                style={styles.input}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
          />
        </View>
      </View>
      <View style={styles.rowInput}>
        <Text style={styles.label}>Bairro</Text>

        <Controller
          name="district"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextInput
              style={styles.input}
              onChangeText={field.onChange}
              value={field.value}
            />
          )}
        />
        <Controller
          name="status"
          control={control}
          defaultValue={STATUS.CONFIRMED}
          render={({ field }) => (
            <Picker
              selectedValue={field.value}
              onValueChange={(itemValue) => setValue("status", itemValue)}
              style={styles.input}
            >
              <Picker.Item
                style={{ fontSize: 14 }}
                label="Cancelado"
                value={STATUS.CANCELED}
              />
              <Picker.Item
                style={{ fontSize: 14 }}
                label="Esperando"
                value={STATUS.WAITING}
              />
              <Picker.Item
                style={{ fontSize: 14 }}
                label="Confirmado"
                value={STATUS.CONFIRMED}
              />
            </Picker>
          )}
        />
      </View>
      <GradientButton
        text={Object.keys(customer)?.length === 0 ? "Salvar" : "Alterar"}
        icon="pluscircleo"
        gradient={[theme.primary, theme.primary]}
        iconProps={styles.iconProps}
        textStyle={styles.buttonTextStyle}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowInput: {},
  label: {
    fontWeight: "600",
    fontSize: 17,
    marginBottom: 10,
  },
  input: {
    marginBottom: 15,
    padding: 4,
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
  iconProps: { size: 30, color: "#fff", marginRight: 10 },
  buttonTextStyle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  },
});

export default ProposalRegist;
