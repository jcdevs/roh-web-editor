import { Login, Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../data/hooks/useUser";

interface LoginLogoutButtonProps {}

const LoginLogoutButton = (props: LoginLogoutButtonProps) => {
  const nav = useNavigate();
  const { user, setUser } = useUser();

  return (
    user ? 
    <IconButton onClick={() => setUser(null)}>
      <Logout />
    </IconButton>
    : 
    <IconButton onClick={() => nav('/login')}>
      <Login />
    </IconButton>
  );
}

export default LoginLogoutButton;