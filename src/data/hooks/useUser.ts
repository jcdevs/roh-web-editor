import { User } from "../interfaces/User";
import { useLocalStorage } from "./useLocalStorage";

export const useUser = () => {
  const { value, setValue } = useLocalStorage<User | null>('user', null);

  return { user: value, setUser: setValue };
}