import React from 'react';
import styled from 'styled-components';

const CloseButton = ({ onClick }) => {
  return (
    <CloseButtonWrapper onClick={onClick}>
      <span>Close</span>
    </CloseButtonWrapper>
  );
};

export default CloseButton;

const CloseButtonWrapper = styled.div`
  margin: 0;
  float: right;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgb(38, 109, 209);
  cursor: pointer;

  .cross-button {
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: normal;
    width: 24px;
    height: 25px;
    margin-right: 8px;
    padding-left: 7px;
    padding-bottom: 3px;
    padding-right: 8px;
    text-align: center;
    color: ${({ theme }) => theme.tertiaryText};
    background: ${({ theme }) => theme.cancelBackground};
    border-radius: 40px;
    text-align: center;
  }

  .verticle-line {
    width: 0px;
    padding-right: 8px;
    height: 25px;
    color: ${({ theme }) => theme.verticalLine};
    font-weight: lighter;
  }
`;
