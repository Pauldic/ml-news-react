import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment-timezone";
import styled, { keyframes } from "styled-components";
import SimilarNews from "components/SimilarNews";
import { removeLikedIdState, selectors as uiSelector } from "redux/uiSlice";
import PostTRS from "components/PostTRS";
import SimilarNewsButton from "images/junggl-icons-homepage/related-articles-button/similar-articles.svg";
import SimilarNewsCancelButton from "images/junggl-icons-homepage/related-articles-button/similar-articles-cancel-button.svg";
import RelatedNewsButton from "images/updated-icons/new-related-articles-button.svg";
import UpVoteAnimation from "images/updated-icons/basic/like-animation-button.svg";
import { getRelatedNews, selectors as newsSelector } from "redux/newsSlice";
import { selectors as authSelector } from "redux/authSlice";

const MediumPostCard = ({ post }) => {
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
      <div
        className='d-flex'
        style={{ marginTop: "12px", marginLeft: "1px", marginRight: "1px" }}
      >
        <div
          className='col-lg-7 col-md-7 col-sm-7'
          style={{ paddingTop: "15px", paddingLeft: "10px" }}
        >
          <CardTitle href={url} target='__blank'>
            {title}
          </CardTitle>
          <p
            style={{
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "10px",
              lineHeight: "16px",
              color: " #959CAB",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            {source} <span>●</span> {moment(publishedat).format("MM.DD.YYYY")}
          </p>
        </div>
        <div
          className='col-lg-5 col-md-5 col-sm-5'
          style={{
            display: "flex",
            alignItems: "flex-end",
            paddingRight: "10px",
          }}
        >
          <img
            alt={title}
            style={{ borderRadius: "10px", objectFit: "cover" }}
            width='100%'
            height='90%'
            src={urltoimage}
          ></img>
        </div>
        {smile && (
          <LikeToSmileImg fade={smile} src={UpVoteAnimation} alt='Smile' />
        )}
      </div>

      <CardFooter>
        {/* <SimilarNews id={id} showSimilar={showSimilar} /> */}
        <PostTRS newsTags={newsTags} id={id} liked={liked} unliked={unliked} />
      </CardFooter>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 10px auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primaryBackground};
  box-shadow: ${({ theme }) => theme.primaryShadow};
  overflow: hidden;
`;

const CardTitle = styled.a`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.primaryText};

  :hover {
    text-decoration: none;
  }
`;

const CardFooter = styled.div`
  padding: 10px;
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
  height: 50px;
  position: absolute;
  inset: 60% 80% 80% 48%;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  border-radius: 100px;
  animation: ${({ fade }) => (fade ? fadeIn : fadeOut)} 0.2s linear;
`;

export default MediumPostCard;
