import { useContext, useState } from "react";
import { BlocContext } from "../Context/blocContext";
import { Avatar, Button } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SendIcon from "@mui/icons-material/Send";
import "../style/formStyle.css";

function BlocForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { keyId, setKeyId, CreateNote } = useContext(BlocContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    CreateNote({
      id: keyId + 1,
      title,
      description,
    });
    setKeyId(keyId + 1);
    setTitle("");
    setDescription("");
  };

  return (
    <section>
      <div className="avatar">
        <Avatar sx={{ bgcolor: "green[500]" }} variant="rounded">
          <AssignmentIcon />
        </Avatar>
      </div>
      <h1 className="form_title animated">Bloco de Notas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form_input"
          placeholder="Escreva um titulo"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          className="form_textarea"
          placeholder="Escreva um texto"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Enviar
        </Button>
      </form>
    </section>
  );
}

export default BlocForm;
