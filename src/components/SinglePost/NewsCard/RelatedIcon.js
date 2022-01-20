import React from 'react';
import styled from 'styled-components';
import RelatedNewsButton from 'images/updated-icons/new-related-articles-button.svg';

const RelatedIcon = ({ onClick, ...rest }) => {
  return (
    <RelatedIconWrapper {...rest}>
      <img
        height='24px'
        src={RelatedNewsButton}
        onClick={onClick}
        alt='image'
      />
    </RelatedIconWrapper>
  );
};
const RelatedIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${(props) => (props.right ? props.right + 'px' : '5px')};
  display: flex;
  cursor: pointer;
`;

export default RelatedIcon;
