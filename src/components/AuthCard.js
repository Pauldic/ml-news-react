import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAuthCardState } from "redux/uiSlice";
import { useHistory } from "react-router-dom";

const AuthCard = ({ cardWidth }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSignup = () => {
    history.push("/signup");
  };

  const handleModalClose = () => {
    dispatch(setAuthCardState(false));
  };

  return (
    <CardWrapper
      style={{ width: cardWidth ? cardWidth : null }}
      onClick={handleModalClose}
    >
      <AuthCardWrapper>
        <p>Get the latest News from Junggl</p>
        <button onClick={handleSignup}>Signup</button>
      </AuthCardWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  margin: 10px auto;
  border-radius: 8px;
  background-color: #f7f7f7;
  box-shadow: 0px 20px 41px rgba(116, 144, 181, 0.17);
  overflow: hidden;
`;

const AuthCardWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
  text-align: center;

  p {
    color: #193761;
    font-size: 14px;
  }

  button {
    border: none;
    outline: none;
    border-radius: 40px;
    background-color: white;
    color: #266dd1;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    box-shadow: -4px -4px 4px rgb(255 255 255 / 40%),
      0px 4px 23px rgb(5 94 221 / 15%);
    padding: 8px 20px;
  }
`;

export default AuthCard;
