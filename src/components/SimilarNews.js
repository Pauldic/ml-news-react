import { Fragment, useEffect } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { SlideDown } from "react-slidedown";
import styled from "styled-components";
import { getRelatedNews, selectors as newsSelector } from "redux/newsSlice";
import { selectors as authSelector } from "redux/authSlice";
import "react-slidedown/lib/slidedown.css";

const settings = {
  dots: false,
  infinite: false,
  speed: 600,
  slidesToShow: 2.5,
  slidesToScroll: 1,
  swipeToSlide: true,
  arrows: false,
};

const SimilarNewsSlider = ({ datas }) => {
  return (
    <Fragment>
      {datas.length === 0 ? (
        <NoSimilarNews>There has no similar news</NoSimilarNews>
      ) : (
        <Slider {...settings}>
          {datas.map((data, index) => (
            <div key={index}>
              <ContentWrapper>
                <img
                  alt={data.title}
                  width="130px"
                  height="80px"
                  src={data.urltoimage}
                ></img>
                <a href={data.url} target="__blank">
                  {data.title}
                </a>
              </ContentWrapper>
            </div>
          ))}
        </Slider>
      )}
    </Fragment>
  );
};

const SimilarNews = ({ id, showSimilar }) => {
  const dispatch = useDispatch();

  const { auth } = useSelector(authSelector.getAuth);
  const similarNewsState = useSelector(newsSelector.authSimilar(id));
  const unauthSimilarNewsState = useSelector(newsSelector.guestSimilar(id));
  useEffect(() => {
    if (auth && !similarNewsState && showSimilar)
      dispatch(getRelatedNews({ id }));
  }, [auth, dispatch, id, showSimilar, similarNewsState]);

  return (
    <SlideDown className={"my-dropdown-slidedown"}>
      <SliderWrapper className={showSimilar ? "fadeIn" : "fadeOut"}>
        <hr></hr>
        <h6>Similar Articles</h6>
        <div>
          <div>
            {auth && similarNewsState && (
              <SimilarNewsSlider datas={similarNewsState} />
            )}
            {!auth && unauthSimilarNewsState && (
              <SimilarNewsSlider datas={unauthSimilarNewsState} />
            )}
          </div>
        </div>
        <hr></hr>
      </SliderWrapper>
    </SlideDown>
  );
};

const SliderWrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;

  h6 {
    font-weight: bold;
    margin-bottom: 12px;
  }
`;

const ContentWrapper = styled.div`
  margin-right: 10px;

  img {
    border-radius: 10px;
    margin-right: 10px;
  }
  a {
    padding-left: 2px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${({ theme }) => theme.primaryText};
    overflow: hidden;

    :hover {
      text-decoration: none;
    }
  }

  /* .similar-news-headline {
    overflow: hidden;
    white-space: pre;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  } */
`;

const NoSimilarNews = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.primaryText};
  overflow: hidden;
`;

export default SimilarNews;
