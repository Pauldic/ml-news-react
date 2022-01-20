import { useState } from 'react';
import Slider from 'react-slick';
import moment from 'moment-timezone';
import styled from 'styled-components';
import SimilarNews from 'components/SimilarNews';
import PostTRS from 'components/PostTRS';
// import SimilarNewsButton from "images/junggl-icons-homepage/related-articles-button/similar-articles.svg";
// import SimilarNewsCancelButton from "images/junggl-icons-homepage/related-articles-button/similar-articles-cancel-button.svg";

const SliderCard = ({ post }) => {
  // const [showSimilar, setShowSimilar] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { id, entities, liked, unliked } = post[currentSlide];

  const newsTags = entities.filter((tag, index) => index <= 2);

  // const handleShowSimilar = () => {
  //   setShowSimilar(!showSimilar);
  // };

  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    afterChange: (current) => setCurrentSlide(current),
  };

  return (
    <SliderWrapper>
      <div
        style={{
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <Slider {...settings}>
          {post.map((news, index) => (
            <div key={index}>
              <div style={{ overflow: 'hidden', position: 'relative' }}>
                {/* <div
                  onClick={() => handleShowSimilar()}
                  style={{
                    position: "absolute",
                    top: "8px",
                    right: "10px",
                    display: "flex",
                  }}
                >
                  <img
                    src={
                      showSimilar ? SimilarNewsCancelButton : SimilarNewsButton
                    }
                    alt="similar news"
                  />
                </div> */}
                <img
                  alt={news.title}
                  width='100%'
                  height='210px'
                  src={news.urltoimage}
                />
                <CardTitle>
                  <div>
                    <a href={news.url} target='__blank'>
                      {news.title}
                    </a>
                    <p>
                      {news.source} <span>●</span>{' '}
                      {moment(news.publishedat).format('MM.DD.YYYY')}
                    </p>
                  </div>
                </CardTitle>
              </div>
            </div>
          ))}
        </Slider>

        <CardFooter>
          {/* <SimilarNews id={id} showSimilar={showSimilar} /> */}
          <PostTRS
            newsTags={newsTags}
            id={id}
            liked={liked}
            unliked={unliked}
          />
        </CardFooter>
      </div>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  margin: 10px auto;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primaryBackground};
`;

const CardFooter = styled.div`
  padding: 10px;
`;

const CardTitle = styled.div`
  position: absolute;
  bottom: 8px;
  left: 16px;
  width: 279px;
  a {
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    color: white;
  }

  p {
    font-size: 12px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

export default SliderCard;
