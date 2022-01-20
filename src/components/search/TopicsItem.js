import React from 'react';
import styled from 'styled-components';

const TopicsItem = ({ topic, onClick }) => {
  return (
    <TopicsItemWrapper className='popular-topics' onClick={onClick}>
      {topic}
    </TopicsItemWrapper>
  );
};

export default TopicsItem;

const TopicsItemWrapper = styled.div`
  height: 36px;
  border-radius: 40px;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 17px;
  cursor: pointer;
`;
