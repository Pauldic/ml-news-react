import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <LoadingWrap>
      <Loading />
    </LoadingWrap>
  );
};

const LoadingWrap = styled.div`
  text-align: center;
  margin: 10px auto;
`;

const spin = keyframes`
to { transform: rotate(360deg); }
`;

const Loading = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: ${spin} 1s ease-in-out infinite;
`;

export default Loader;
