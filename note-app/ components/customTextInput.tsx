import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

type Props = {
  label: string;
  placeholder: string;
  value?: string | undefined;
  multiline: boolean;
  text?: string | undefined;
  numberOfLines: number;
  onChange: (text: string) => void;
};

export default function CustomTextInput({
  label,
  placeholder,
  multiline,
  text,
  numberOfLines,
  onChange,
  value,
}: Props) {
  const styles = StyleSheet.create({
    TextInputWrapper: {
      marginTop: 20,
    },
    input: {
      borderWidth: 2,
      borderColor: "#DDD",
      padding: 10,
    },
  });

  const handleTextChange = (text: string) => {
    onChange(text);
  };

  return (
    <View style={styles.TextInputWrapper}>
      <Text>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={handleTextChange}
        defaultValue={text}
      />
    </View>
  );
}
