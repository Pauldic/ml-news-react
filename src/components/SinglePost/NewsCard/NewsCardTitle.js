import React from "react";
import styled from "styled-components";

const NewsCardTitle = ({ url, title }) => {
  return (
    <NewsCardTitleWrapper href={url} target="__blank">
      {title}
    </NewsCardTitleWrapper>
  );
};

export default NewsCardTitle;

const NewsCardTitleWrapper = styled.a`
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;
