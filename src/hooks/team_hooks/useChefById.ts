import { useTypedSelector } from "../useTypedSelector";

export const useChefById = () => {
  const {chefById} = useTypedSelector(state => state);
  return {chefById};
};