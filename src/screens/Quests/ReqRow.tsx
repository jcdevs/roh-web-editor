import { RemoveCircle } from "@mui/icons-material";
import { Autocomplete, Grid, IconButton, TextField } from "@mui/material";
import { useCallback, useState } from "react";

// any until we have these structures
export type Room = any;
export type Creature = any;
export type Item = any;

interface ReqRowProps {
  options: (Room | Creature | Item)[];
  onChange: (value: Room | Creature | Item, amount: number) => void;
  onRemove: () => void;
  label: string;
  quantityLabel: string;
}

const ReqRow = ({options, onChange, onRemove, label, quantityLabel}: ReqRowProps) => {
  const [selection, setSelection] = useState();
  const [amount, setAmount] = useState(0);

  const handleSelect = useCallback((event, value) => {
    setSelection(value);
    onChange(value, amount);
  }, [amount, onChange]);

  const handleAmount = useCallback(event => {
    const { value } = event.target;
    setAmount(value);
    onChange(selection ? selection : {}, parseInt(value));
  }, [selection, onChange]);

  return (
    <Grid container item spacing={2}>
      <Grid item xs={8}>
        <Autocomplete
          options={options}
          getOptionLabel={opt => opt ? `(${opt.area}.${opt.id}) Some Name` : ''}
          onChange={handleSelect}
          renderInput={params => (
            <TextField
              {...params}
              label={label}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
          fullWidth
          disableClearable
          clearOnBlur
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          label={quantityLabel}
          onChange={handleAmount}
          name="reqNum"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid container item xs={1} justifyContent="center" alignItems="center">
        <IconButton color="error" size="large" onClick={event => onRemove()}>
          <RemoveCircle />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ReqRow;