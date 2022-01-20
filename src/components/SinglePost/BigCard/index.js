import styled from 'styled-components';
import NewsCard from 'components/SinglePost/NewsCard';
import NewsCardTitle from 'components/SinglePost/NewsCard/NewsCardTitle';
import NewsJunggleAI from 'components/SinglePost/NewsCard/NewsJunggleAI';
import RelatedIcon from 'components/SinglePost/NewsCard/RelatedIcon';

const BigCard = ({
  url,
  title,
  logo,
  source,
  publishedat,
  urltoimage,
  description,
  handleShowSimilar,
}) => {
  return (
    <BigCardWrapper>
      <BigCardHeader>
        <RelatedIcon onClick={handleShowSimilar} right='15' />
        <BigNewsImage alt={title} src={urltoimage} />
      </BigCardHeader>
      <BigCardContent>
        <NewsCardTitle url={url} title={title} />
        <NewsJunggleAI
          logo={logo}
          source={source}
          publishedat={publishedat}
          description={description}
        />
      </BigCardContent>
    </BigCardWrapper>
  );
};

const BigCardPost = ({ post, ...rest }) => {
  return <NewsCard post={post} component={BigCard} {...rest} />;
};

export default BigCardPost;

const BigCardWrapper = styled.div``;
const BigCardHeader = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 250px;
`;
const BigNewsImage = styled.img`
  object-fit: cover;
  width: 100%;
  max-height: 250px;
  background-position: center;
`;
const BigCardContent = styled.div`
  padding: 10px;
`;
