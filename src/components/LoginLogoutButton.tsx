import { Login, Logout } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../data/hooks/useAppDispatch";
import { useAppSelector } from "../data/hooks/useAppSelector";
import { logout, selectUser } from "../data/redux/userSlice";

interface LoginLogoutButtonProps {}

const LoginLogoutButton = (props: LoginLogoutButtonProps) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  return (
    user ? 
    <IconButton onClick={() => dispatch(logout())}>
      <Logout />
    </IconButton>
    : 
    <IconButton onClick={() => nav('/login')}>
      <Login />
    </IconButton>
  );
}

export default LoginLogoutButton;