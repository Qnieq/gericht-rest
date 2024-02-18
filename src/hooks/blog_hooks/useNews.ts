import { useTypedSelector } from "../useTypedSelector";

export const useNews = () => {
  const {blog} = useTypedSelector(state => state);
  return {blog};
};

export const useLastNews = () => {
  const {blogLastNews} = useTypedSelector(state => state);
  return {blogLastNews};
};

export const useTags = () => {
  const {blogTags} = useTypedSelector(state => state);
  return {blogTags};
};