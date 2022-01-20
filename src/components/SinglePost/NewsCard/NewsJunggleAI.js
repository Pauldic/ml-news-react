import React from 'react';
import styled from 'styled-components';
import moment from 'moment-timezone';
import ShowMoreText from 'react-show-more-text';

const NewsJunggleAI = ({ logo, source, publishedat, description }) => {
  const isJuggleAI = source.trim().toUpperCase() === 'JUNGGLE AI';
  return (
    <>
      <NewsJunggleAIWrapper>
        {isJuggleAI && <JunggleAImg src={logo} alt='Junggl AI' />}
        <span className={isJuggleAI ? 'junggl-author' : 'other-author'}>
          {source}
        </span>
        <span>●</span> {moment(publishedat).startOf('minute').fromNow()}
      </NewsJunggleAIWrapper>
      {isJuggleAI && description && (
        <ShowMoreText
          lines={3}
          more='(Show more)'
          less='(Show less)'
          className='content-css'
          anchorclassName='my-anchor-css-class'
          width={340}
        >
          {description}
        </ShowMoreText>
      )}
    </>
  );
};

const NewsJunggleAIWrapper = styled.p`
  font-style: normal;
  font-size: 10px;
  line-height: 16px;
  color: #959cab;
  margin-top: 8px;
  margin-bottom: 0px;
`;

const JunggleAImg = styled.img`
  margin-right: 5px;
  height: 20px;
`;
export default NewsJunggleAI;
