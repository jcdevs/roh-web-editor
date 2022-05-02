import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { post } from "../data/api/config";
import { useUser } from "../data/hooks/useUser";
import { User } from "../data/interfaces/User";

interface LoginFormProps {}

export const LoginForm = (props: LoginFormProps) => {
  const { user, setUser } = useUser();
  const [formValues, setFormValues] = useState({ name: '', pw: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = useCallback(event => {
    const { name, value } = event.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const submit = useCallback(async () => {
    try {
      setErrorMessage('');
      const user = await post<User>('/login', formValues);
      setUser(user);
    } catch(e: any) {
      console.error(e);
      setErrorMessage(e.message);
    }
  }, [formValues, setUser]);

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
            {errorMessage && <Typography color="error" maxWidth={230}>{errorMessage}</Typography>}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}