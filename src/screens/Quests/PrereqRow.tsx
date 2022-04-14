import { RemoveCircle } from "@mui/icons-material";
import { Autocomplete, Grid, IconButton, TextField } from "@mui/material";
import { Quest } from "../../data/interfaces/Quest";
import { getFormattedId } from "../../utils/MudObjects";

// interface PrereqRowProps {
//   options: AutocompleteOption[];
//   onChange: (value: AutocompleteOption['value']) => void;
//   onRemove: () => void;
// }

// const PrereqRow = (props: PrereqRowProps) => {
//   return (
//     <Grid container item spacing={1}>
//       <Grid item xs={11}>
//         <Autocomplete
//           options={props.options}
//           onChange={(event, selection) => {
//             props.onChange(selection?.value);
//           }}
//           renderInput={params => (
//             <TextField
//               {...params}
//               label='Prerequisite'
//               InputProps={{
//                 ...params.InputProps,
//                 type: 'search',
//               }}
//             />
//           )}
//           fullWidth
//           disableClearable
//           clearOnBlur
//         />
//       </Grid>
//       <Grid container item xs={1} justifyContent="center" alignItems="center">
//         <IconButton color="error" size="large" onClick={event => props.onRemove()}>
//           <RemoveCircle />
//         </IconButton>
//       </Grid>
//     </Grid>
//   );
// }

interface PrereqRowProps {
  options: Quest[];
  onChange: (value: Quest) => void;
  onRemove: () => void;
}

const PrereqRow = (props: PrereqRowProps) => {
  return (
    <Grid container item spacing={1}>
      <Grid item xs={11}>
        <Autocomplete
          options={props.options}
          getOptionLabel={opt => opt ? `(${getFormattedId(opt)}) ${opt.name}` : ''}
          onChange={(event, selection) => {
            props.onChange(selection);
          }}
          renderInput={params => (
            <TextField
              {...params}
              label='Prerequisite'
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
      <Grid container item xs={1} justifyContent="center" alignItems="center">
        <IconButton color="error" size="large" onClick={event => props.onRemove()}>
          <RemoveCircle />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default PrereqRow;