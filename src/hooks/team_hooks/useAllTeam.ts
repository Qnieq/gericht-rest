import { useTypedSelector } from "../useTypedSelector";

export const useAllTeam = () => {
  const {team} = useTypedSelector(state => state);
  return {team};
};