import {
  StyleSheet,
  TouchableOpacity,
  Text,
  DimensionValue,
} from "react-native";
import React from "react";

type Props = {
  backgroundColor: string;
  width?: DimensionValue;
  fontSize?: number;
  color: string;
  text: string;
  onPress: () => void;
};

export default function CustomTextInput({
  backgroundColor,
  width = 120,
  fontSize = 16,
  color,
  text,
  onPress,
}: Props) {
  const styles = StyleSheet.create({
    button: {
      alignItems: "center",
      backgroundColor,
      width,
      padding: 10,
    },
    buttonText: {
      fontSize,
      fontWeight: "700",
      color,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}
