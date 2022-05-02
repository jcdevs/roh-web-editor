import { RootState } from "./store";

// check individual loading states to aggregate
export const selectIsLoading = (state: RootState) => state.auth.isLoading;