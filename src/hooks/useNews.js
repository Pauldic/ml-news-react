import { useState, useEffect } from "react";
import useSimilar from "./useSimilar";

const useNews = (post, showSimilar = false) => {
  const [news, setNews] = useState([post]);
  const { similar } = useSimilar(post.id, showSimilar);

  useEffect(() => {
    setNews([post, ...similar]);
  }, [post, similar, showSimilar]);

  return { news };
};

export default useNews;
