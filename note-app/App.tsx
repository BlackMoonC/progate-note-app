import React, { useState } from "react";
import Home from "./screens/home";
import { INote } from "./lib/definition";
import AddNote from "./screens/addNote";
import EditNote from "./screens/editNote";

type PropsCPW = {
  noteForEdit: INote;
  currentPage: string;
  setNoteId: (id: number) => void;
  setCurrentPage: (page: string) => void;
  noteList: Array<INote>;
  addNote: (title: string, desc: string) => void;
  editNote: (id: number, title: string, desc: string) => void;
  deleteNote: (id: number) => void;
};

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  deleteNote,
  setNoteId,
  noteForEdit,
}: PropsCPW) => {
  switch (currentPage) {
    case "home":
      return (
        <Home
          setNoteId={setNoteId}
          deleteNote={deleteNote}
          noteList={noteList}
          setCurrentPage={setCurrentPage}
        />
      );
    case "add":
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case "edit":
      return (
        <EditNote
          note={noteForEdit}
          setCurrentPage={setCurrentPage}
          editNote={editNote}
        />
      );
    default:
      return (
        <Home
          setNoteId={setNoteId}
          noteList={noteList}
          setCurrentPage={setCurrentPage}
        />
      );
  }
};

export default function App() {
  const [noteId, setNoteId] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<string>("home");
  const [noteList, setNoteList] = useState<Array<INote>>([
    {
      id: 1,
      title: "Note pertama",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    },
  ]);
  const addNote = (title: string, desc: string) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const noteForEdit = (): INote => {
    const result = noteList.filter((note) => note.id === noteId);
    return result[0];
  };

  const editNote = (id: number, title: string, desc: string) => {
    const newNoteList = noteList.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title: title,
          desc: desc,
        };
      }
      return note;
    });

    setNoteList(newNoteList);
  };

  // Todo: Make a delete function
  const deleteNote = (id: number) => {
    const newNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(newNoteList);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
      noteList={noteList}
      addNote={addNote}
      editNote={editNote}
      deleteNote={deleteNote}
      noteForEdit={noteForEdit()}
      setNoteId={setNoteId}
    />
  );
}
