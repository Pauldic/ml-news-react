import { useState } from "react";
import styled from "styled-components";
import SettingHeader from "components/SettingHeader";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <SettingPageStyle>
      <div style={{ position: "relative", height: "calc(100vh - 10px)" }}>
        <SettingHeader title='Change Password' />
        <div style={{ marginTop: "15px" }}>
          <form>
            <label
              style={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              Current password
            </label>
            <div className='input-group'>
              <input
                style={{
                  height: "45px",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  border: "none",
                  outline: "none",
                }}
                className='form-control'
                // ref={register()}
                type={showPassword ? "text" : "password"}
                name='password'
              />
              <div className='input-group-append'>
                <span
                  className='input-group-text'
                  style={{
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    color: "#959CAB",
                  }}
                >
                  <i
                    onClick={() => setShowPassword(!showPassword)}
                    className={showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                    aria-hidden='true'
                  ></i>
                </span>
              </div>
            </div>
            <ForgotLink
              href='#forgot'
              style={{
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "16px",
                color: "#266DD1",
              }}
            >
              Forgot Password?
            </ForgotLink>
            <br />
            <label
              style={{
                marginTop: "20px",
                fontFamily: "DM Sans",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "12px",
                lineHeight: "16px",
              }}
            >
              New password
            </label>
            <div className='input-group'>
              <input
                style={{
                  height: "45px",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  border: "none",
                  outline: "none",
                }}
                className='form-control'
                // ref={register()}
                type={showPassword2 ? "text" : "password"}
                name='password'
              />
              <div className='input-group-append'>
                <span
                  className='input-group-text'
                  style={{
                    borderTopRightRadius: "8px",
                    borderBottomRightRadius: "8px",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    color: "#959CAB",
                  }}
                >
                  <i
                    onClick={() => setShowPassword2(!showPassword2)}
                    className={showPassword2 ? "fa fa-eye-slash" : "fa fa-eye"}
                    aria-hidden='true'
                  ></i>
                </span>
              </div>
            </div>
          </form>
        </div>
        <FooterButton>Save</FooterButton>
      </div>
    </SettingPageStyle>
  );
};

const SettingPageStyle = styled.div`
  padding: 10px;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.backgroundImage};

  label {
    color: ${({ theme }) => theme.primaryText};
  }

  input {
    background-color: ${({ theme }) => theme.primaryBackground};
    box-shadow: ${({ theme }) => theme.interestBoxshadow};
  }

  textarea:focus,
  input:focus {
    box-shadow: none;
  }

  .input-group-text {
    background-color: ${({ theme }) => theme.primaryBackground};
    border: none;
  }
`;

const FooterButton = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #ffffff;
  position: absolute;
  bottom: 10px;
  color: white;
  background: #266dd1;
  text-align: center;
  width: 100%;
  cursor: pointer;
  user-select: none;
  border-radius: 8px;
  padding: 12px 0;
  box-shadow: 0px 20px 41px rgba(116, 144, 181, 0.1);
`;

const ForgotLink = styled.a`
  font-size: 14px;
  color: ${({ theme }) => theme.tertiaryText};
  :hover {
    text-decoration: none;
  }
`;

export default ChangePassword;
