import React, { useCallback } from 'react';
import styled from 'styled-components';
import SearchMagnifyer from 'images/junggl-icons-homepage/search/search-icon-white.svg';

const SearchInputBox = ({ onChange, onConfirm, ...rest }) => {
  const handleInputChange = useCallback(
    (event) => {
      onChange(event.target.value);
    },
    [onChange]
  );
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter') {
        onConfirm(event.target.value);
      }
    },
    [onConfirm]
  );

  return (
    <SearchInputWrapper>
      <SearchInputIcon src={SearchMagnifyer} alt='' />
      <SearchInputText
        placeholder='Search'
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        {...rest}
      />
    </SearchInputWrapper>
  );
};

export default SearchInputBox;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const SearchInputIcon = styled.img`
  height: 30px;
  padding-right: 3px;
`;
const SearchInputText = styled.input`
  width: 200px;
  font-size: 23px;
  border: none;
  outline: none;
  background-color: transparent;
`;
