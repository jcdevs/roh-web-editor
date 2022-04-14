import { RemoveCircle } from "@mui/icons-material";
import { Autocomplete, Grid, IconButton, TextField } from "@mui/material";
import { AutocompleteOption } from "../data/interfaces/AutocompleteOption";

interface AutocompleteQuantityProps {
  options: AutocompleteOption[];
  onChange: (value: AutocompleteOption['value']) => void;
  onRemove: () => void;
  label: string;
  quantityLabel: string;
}

const AutocompleteQuantity = (props: AutocompleteQuantityProps) => {
  return (
    <Grid container item spacing={2}>
      <Grid item xs={8}>
        <Autocomplete
          options={props.options}
          onChange={(event, selection) => {
            props.onChange(selection?.value);
          }}
          renderInput={params => (
            <TextField
              {...params}
              label={props.label}
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
          )}
        />
      </Grid>
      <Grid item xs={2}>
        <TextField label={props.quantityLabel} onChange={() => {}} name="quantity" type="number" fullWidth />
      </Grid>
      <Grid container item xs={2} justifyContent="center" alignItems="center">
        <IconButton color="error" size="large" onClick={event => props.onRemove()}>
          <RemoveCircle />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default AutocompleteQuantity;