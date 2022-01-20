import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import styled, { keyframes } from "styled-components";
import SimilarNews from "components/SimilarNews";
import PostTRS from "components/PostTRS";
import { removeLikedIdState, selectors as uiSelector } from "redux/uiSlice";
import SimilarNewsButton from "images/junggl-icons-homepage/related-articles-button/similar-articles.svg";
import SimilarNewsCancelButton from "images/junggl-icons-homepage/related-articles-button/similar-articles-cancel-button.svg";
import SmileAnimation from "images/junggl-icons-homepage/like-dislike-share/like-large-for-popout-animation/heart-fill.svg";
import UpVoteAnimation from "images/updated-icons/basic/like-animation-button.svg";
import { getRelatedNews, selectors as newsSelector } from "redux/newsSlice";
import { selectors as authSelector } from "redux/authSlice";

const BigCardPost = ({ post }) => {
  const dispatch = useDispatch();
  const [showSimilar, setShowSimilar] = useState(false);
  const [smile, setSmile] = useState(false);
  const { likedid } = useSelector(uiSelector.getTheme);
  const [newsDataStore, setNewsDataStore] = useState([post]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { id: newsID } = post;
  const [count, setCount] = useState(1);

  const handleShowSimilar = () => {
    setShowSimilar(!showSimilar);
    setCount((count) => count + 1);
    const ararMod = count % newsDataStore.length;
    setCurrentIndex(ararMod);
  };

  const currentPost = newsDataStore[currentIndex];
  const {
    id,
    title,
    url,
    urltoimage,
    source,
    publishedat,
    tags,
    liked,
    unliked,
  } = currentPost;

  const { auth } = useSelector(authSelector.getAuth);
  const similarNewsState = useSelector(newsSelector.getRelatedNews(newsID));
  const unauthSimilarNewsState = useSelector(
    newsSelector.getUnAuthRelatedNews(newsID)
  );

  useEffect(() => {
    if (auth && !similarNewsState && count > 1)
      dispatch(getRelatedNews({ id: newsID }));
  }, [dispatch, newsID, similarNewsState, auth, count]);

  useEffect(() => {
    if (auth && similarNewsState) {
      setNewsDataStore([post, ...similarNewsState.datas]);
    } else {
      setNewsDataStore([post, ...unauthSimilarNewsState]);
    }
  }, [auth, post, similarNewsState, unauthSimilarNewsState]);

  const newsTags = tags.filter((tag, index) => index <= 2);

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
      <div style={{ overflow: "hidden", position: "relative" }}>
        <img
          alt={title}
          width="100%"
          height="100%"
          src={urltoimage}
          style={{ objectFit: "cover" }}
        ></img>
      </div>

      <CardFooter>
        <a href={url} target="__blank">
          {title}
        </a>
        <p>
          {source} <span>●</span> {moment(publishedat).format("MM.DD.YYYY")}
        </p>

        {/* <SimilarNews id={id} showSimilar={showSimilar} /> */}
        <PostTRS newsTags={newsTags} id={id} liked={liked} unliked={unliked} />
      </CardFooter>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 10px auto;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.primaryShadow};
  overflow: hidden;
  background-color: ${({ theme }) => theme.primaryBackground};

  .related-news-button:after {
    background: #90ee90;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -50px !important;
    margin-top: -100%;
    margin-right: -60%;
    opacity: 0;
    transition: all 1s;
  }
`;

const CardFooter = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.primaryBackground};

  a {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: ${({ theme }) => theme.primaryText};

    :hover {
      text-decoration: none;
    }
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 16px;
    color: #959cab;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.25);
    opacity: 1;
  }
`;

const LikeToSmileImg = styled.img`
  height: 70px;
  position: absolute;
  inset: 35% 50% 0% 40%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 100px;
  animation: ${({ fade }) => (fade ? fadeIn : fadeOut)} 0.2s linear;
`;

export default BigCardPost;
