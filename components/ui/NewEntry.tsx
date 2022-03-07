import { AddCircleOutlineOutlined } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { ChangeEvent, FC, useContext, useState } from "react";
import { EntriesContext } from "../../context/entries";
import { UIContext } from "../../context/ui";
interface Props {}

export const NewEntry: FC<Props> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log(inputValue);
    addNewEntry(inputValue);
    setInputValue("");
    setIsAddingEntry(false);
    setTouched(false);
  };
  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {!isAddingEntry && (
        <Button
          startIcon={<AddCircleOutlineOutlined />}
          fullWidth
          variant="outlined"
          onClick={() => setIsAddingEntry(true)}
        >
          Agregar Tarea
        </Button>
      )}

      {isAddingEntry && (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder={"Nueva Entrada"}
            autoFocus
            multiline
            label={"Nueva Entrada"}
            helperText={
              inputValue.length <= 0 && !touched
                ? "Ingrese un valor"
                : "Valor invalido"
            }
            value={inputValue}
            onChange={onChangeInput}
            error={inputValue.length <= 0 && touched}
            onBlur={() => setTouched(true)}
          ></TextField>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button onClick={() => setIsAddingEntry(false)}>Cancelar</Button>
            <Button onClick={onSave}>Guardar </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
