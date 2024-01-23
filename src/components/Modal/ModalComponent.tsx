import React from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import theme from "../../../assets/styles/theme";
import GradientButton from "../Button/GradientButton";

const ModalComponent = ({
  onModalStateChange,
  modalVisible,
  closeButton = false,
  type,
  iconProps,
  title = "",
  msg,
  children,
}: any) => {
  const handleModalClose = () => {
    // Chama a função passada do pai para atualizar o estado do pai
    onModalStateChange(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={handleModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Pressable style={styles.buttonClose} onPress={handleModalClose}>
              <Ionicons name="close-circle" size={32} color={theme.secondary} />
            </Pressable>
            {
              (type = "alert" && (
                <>
                  {iconProps && <Ionicons {...iconProps} />}
                  {title && (
                    <Text
                      style={{
                        fontSize: 35,
                        fontWeight: "700",
                        marginBottom: 20,
                      }}
                    >
                      {title}
                    </Text>
                  )}
                  {msg && (
                    <Text style={{ fontSize: 17, fontWeight: "500" }}>
                      {msg}
                    </Text>
                  )}
                </>
              ))
            }
            {children}
            {closeButton && (
              <View>
                <GradientButton
                  text={"OK"}
                  onPress={handleModalClose}
                  buttonStyle={{
                    marginTop: 20,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    borderRadius: 20,
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
  },
  modalContainer: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // fundo semi-transparente
  },
  modalContent: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
    marginHorizontal: 30,
    marginVertical: 150,
    borderRadius: 20,
  },
  buttonClose: {
    width: "100%",
    alignItems: "flex-end",
  },
});

export default ModalComponent;
