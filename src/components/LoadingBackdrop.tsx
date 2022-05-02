import { Backdrop, CircularProgress } from "@mui/material";
import { useAppSelector } from "../data/hooks/useAppSelector";
import { selectIsLoading } from "../data/redux/selectors";

export const LoadingBackdrop = () => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  );
}