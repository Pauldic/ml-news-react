import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import PostTRS from 'components/PostTRS';
import { removeLikedIdState, selectors as uiSelector } from 'redux/uiSlice';
import Logo from 'images/objects/original-content-logo.svg';
import useSimilarArticle from 'hooks/useSimilarArticle';
import { getRelatedNews } from 'redux/newsSlice';

const NewsCard = ({ post, component: Component, keyword }) => {
  const dispatch = useDispatch();
  const [smile, setSmile] = useState(false);
  const [curPost, setCurPost] = useState(post);
  const [showNext, setShowNext] = useState(false);
  const [history, setHistory] = useState([]);
  const { likedid } = useSelector(uiSelector.getTheme);

  const fetchSimilarArticle = useCallback(
    async (id, ids) => {
      return await dispatch(getRelatedNews({ id, history: ids })).then(
        ({ payload }) => {
          const { status, data } = payload;
          if (status === 200) {
            return data.feeds[0];
          }
          return null;
        }
      );
    },
    [dispatch]
  );
  useEffect(() => setCurPost(post), [post]);
  const handleShowSimilar = useCallback(async () => {
    const result = await fetchSimilarArticle(curPost.id, history);
    if (result) {
      setCurPost(result);
      history.push(result.id);
    }
  }, [curPost, history, fetchSimilarArticle]);

  const setReactUpdate = useCallback(
    (reactUpdate) => {
      // if (reactUpdate) {
      //   const {
      //     data: { liked, unliked },
      //   } = reactUpdate;
      //   const updatePost = { ...curPost, liked, unliked };
      //   // setNews((news) =>
      //   //   news.map((item) => (item.id === updatePost.id ? updatePost : item))
      //   // );
      // }
    },
    [curPost]
  );

  const {
    id,
    title,
    url,
    urltoimage,
    source,
    publishedat,
    entities,
    liked,
    unliked,
    description,
  } = curPost;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const items = entities.map((item) => ({
      label: item[0],
      score: item[1] + (keyword && item[0].includes(keyword) ? 1000000 : 0),
    }));
    items.sort((a, b) => b.score - a.score);
    setCategories(items.filter((_, i) => i < 6).map((item) => item.label));
  }, [entities, keyword]);

  useEffect(() => {
    if (id === likedid) {
      setSmile(true);
      setTimeout(() => {
        dispatch(removeLikedIdState());
        setSmile(false);
      }, 500);
    }
  }, [dispatch, id, likedid]);

  return (
    <CardWrapper>
      <Component
        url={url}
        title={title}
        logo={Logo}
        source={source}
        publishedat={publishedat}
        urltoimage={urltoimage}
        description={description}
        handleShowSimilar={handleShowSimilar}
      />
      <CardFooter>
        <PostTRS
          newsTags={categories}
          id={id}
          liked={liked}
          unliked={unliked}
          currentIndex={0}
          setReactUpdate={setReactUpdate}
        />
      </CardFooter>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 10px 2px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primaryBackground};
  box-shadow: ${({ theme }) => theme.primaryShadow};
  overflow: hidden;

  .other-author {
    font-style: normal;
    font-size: 10px;
    line-height: 16px;
    color: #959cab;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  a.my-anchor-css-class {
    margin-top: 50px;
    text-align: center;
    font-size: 10px;
    color: ${({ theme }) => theme.secondaryText};
  }

  .junggl-author {
    font-style: normal;
    font-weight: bold;
    line-height: 16px;
    color: ${({ theme }) => theme.junggleAuthorColor};
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  a {
    font-style: normal;
    font-weight: 599;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.4px;
    color: ${({ theme }) => theme.primaryText};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    :hover {
      text-decoration: none;
    }
  }
`;
const CardFooter = styled.div`
  padding: 10px;
`;

export default NewsCard;
