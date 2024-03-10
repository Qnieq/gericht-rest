import { useTypedSelector } from "../useTypedSelector";

export const useUserByLogin = () => {
  const {userByLogin} = useTypedSelector(state => state);
  return {userByLogin};
};