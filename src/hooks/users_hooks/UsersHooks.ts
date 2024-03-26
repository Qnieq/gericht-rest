import { useTypedSelector } from "../useTypedSelector";

export const useUserByLogin = () => {
  const {userByLogin} = useTypedSelector(state => state);
  return {userByLogin};
};

export const useUserReg = () => {
  const {userRegistration} = useTypedSelector(state => state);
  return {userRegistration};
};

export const useUserLogin = () => {
  const {userByLogin} = useTypedSelector(state => state);
  return {userByLogin};
};