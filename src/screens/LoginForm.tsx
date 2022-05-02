import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { LoginParams } from "../data/api";
import { useAppDispatch } from "../data/hooks/useAppDispatch";
import { useAppSelector } from "../data/hooks/useAppSelector";
import { loginThunk, selectAuthError, selectUser } from "../data/redux/userSlice";

interface LoginFormProps {}

export const LoginForm = (props: LoginFormProps) => {
  const user = useAppSelector(selectUser);
  const errorMsg = useAppSelector(selectAuthError);
  const dispatch = useAppDispatch();

  const [formValues, setFormValues] = useState<LoginParams>({ name: '', pw: '' });

  const handleInputChange = useCallback(event => {
    const { name, value } = event.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const submit = useCallback(() => {
    dispatch(loginThunk(formValues));
  }, [dispatch, formValues]);

  return (
    <Box>
      <Grid container>
        <Grid container item direction="column" spacing={2} alignContent="center">
          <Grid item>
            <TextField label="Name" value={formValues.name} onChange={handleInputChange} name="name" type="text"/>
          </Grid>
          <Grid item>
              <TextField label="Password" value={formValues.pw} onChange={handleInputChange} name="pw" type="password" />
          </Grid>
          <Grid item>
            <Button onClick={submit} variant="contained" fullWidth>Login</Button>
          </Grid>
          <Grid item>
            {errorMsg && <Typography color="error" maxWidth={230}>{errorMsg}</Typography>}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}