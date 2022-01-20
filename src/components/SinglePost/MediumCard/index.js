import React from 'react';
import styled from 'styled-components';
import NewsCard from '../NewsCard';
import NewsCardTitle from '../NewsCard/NewsCardTitle';
import NewsJunggleAI from '../NewsCard/NewsJunggleAI';
import RelatedIcon from '../NewsCard/RelatedIcon';

const MediumCard = ({
  url,
  title,
  logo,
  source,
  publishedat,
  urltoimage,
  handleShowSimilar,
}) => {
  return (
    <CardContentWrapper>
      <MediumCardContent className='col-7'>
        <NewsCardTitle url={url} title={title} />
        <NewsJunggleAI logo={logo} source={source} publishedat={publishedat} />
      </MediumCardContent>

      <ImageWrapper className='col-4'>
        <RelatedIcon onClick={handleShowSimilar} />
        <MediumNewsImage alt={title} src={urltoimage} />
      </ImageWrapper>
    </CardContentWrapper>
  );
};

const MediumPostCard = ({ post, ...rest }) => {
  return <NewsCard post={post} component={MediumCard} {...rest} />;
};

export default MediumPostCard;

const CardContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px 0;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: 90px;
  aspect-ratio: 100 / 69;
  padding: 0 !important;
`;

const MediumNewsImage = styled.img`
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const MediumCardContent = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
