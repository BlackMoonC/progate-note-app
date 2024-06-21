import React from "react";
import { INote } from "../lib/definition";
import { Text, View, StyleSheet, FlatList } from "react-native";
import CustomButton from "../ components/customButton";

type Props = {
  noteList: Array<INote>;
  deleteNote?: ((id: number) => void | undefined) | undefined;
  setNoteId: (id: number) => void;
  setCurrentPage: (page: string) => void;
};

const NoteCard = ({
  item,
  setCurrentPage,
  setNoteId,
  deleteNote,
}: {
  item: INote;
  setNoteId: Props["setNoteId"];
  setCurrentPage: Props["setCurrentPage"];
  deleteNote: Props["deleteNote"];
}) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={styles.buttons}>
      <CustomButton
        backgroundColor="#FFC300"
        color="#151D3B"
        text="Ubah"
        fontSize={12}
        width={100}
        onPress={() => {
          setNoteId(item.id);
          setCurrentPage("edit");
        }}
      />
      <CustomButton
        backgroundColor="#D82148"
        color="#fff"
        text="Hapus"
        fontSize={12}
        width={100}
        onPress={() => {
          deleteNote(item.id);
        }}
      />
    </View>
  </View>
);

function Home({ setNoteId, noteList, setCurrentPage, deleteNote }: Props) {
  return (
    <View style={styles.container}>
      <CustomButton
        backgroundColor="#DDD"
        color="#203239"
        text="Tambahkan Note"
        width="100%"
        onPress={() => {
          setCurrentPage("add");
        }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={noteList}
        renderItem={({ item }) => (
          <NoteCard
            deleteNote={deleteNote}
            setNoteId={setNoteId}
            item={item}
            setCurrentPage={setCurrentPage}
          />
        )}
        keyExtractor={(item: INote) => item.id.toString()}
      />
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
  card: {
    padding: 10,
    marginVertical: 15,
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 5,
  },
  cardTitle: {
    fontWeight: "600",
    color: "#203239",
    fontSize: 16,
    marginBottom: 5,
  },
  buttons: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default Home;
