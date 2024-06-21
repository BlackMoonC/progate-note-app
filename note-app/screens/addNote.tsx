import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../ components/customButton";
import CustomTextInput from "../ components/customTextInput";

type Props = {
  setCurrentPage: (page: string) => void;
  addNote: (title: string, desc: string) => void;
};

function AddNote({ setCurrentPage, addNote }: Props) {
  const [title, setTitle] = useState<String>("");
  const [desc, setDesc] = useState<String>("");

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Tambahkan Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Masukkan Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Masukkan Description"
        multiline
        numberOfLines={4}
      />
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#247881"
          color="white"
          text="Simpan"
          width="100%"
          onPress={() => {
            addNote(title, desc);
            setCurrentPage("home");
          }}
        />
      </View>
      <View style={styles.spacerTop}>
        <CustomButton
          backgroundColor="#DDDDDD"
          color="#203239"
          text="Kembali ke Home"
          width="100%"
          onPress={() => {
            setCurrentPage("home");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  pageTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#203239",
  },
  spacerTop: {
    marginTop: 30,
  },
});

export default AddNote;
