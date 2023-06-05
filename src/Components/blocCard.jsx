import { useContext } from "react";
import { BlocContext } from "../Context/blocContext";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../style/cardStyle.css";

function BlocCard({ note }) {
  const { DeleteNote } = useContext(BlocContext);
  return (
    <section className="note">
      <div className="div_note">
        <p className="note_id">Id: {note.id}</p>
        <h1 className="note_title">{note.title}</h1>
        <p className="note_description">{note.description}</p>
      </div>
      <div className="div_button">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          className="delete_button"
          onClick={() => DeleteNote(note.id)}
        >
          Deletar Nota
        </Button>
      </div>
    </section>
  );
}

export default BlocCard;
