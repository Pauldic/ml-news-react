import Joi from "joi";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors as uiSelector } from "redux/uiSlice";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { Link } from "react-router-dom";
import { toastSuccess, toastWarn, toastError } from "utils/toast";
import { registerUser } from "redux/authSlice";
import Logo from "images/LOGO/logo.svg";
import styled from "styled-components";
import AppleLogoB from "images/objects/apple-black.svg";
import GoogleLogoB from "images/objects/google-black.svg";
import AppleLogoW from "images/objects/apple-white.svg";
import GoogleLogoW from "images/objects/google-white.svg";
import FacebookLogin from 'react-facebook-login';

const Apps = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useSelector(uiSelector.getTheme);

  const { register, handleSubmit } = useForm({
    resolver: joiResolver(validation),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("this is submit");
    const datas = { ...data, password2: data.password1 };
    dispatch(registerUser({ data: datas }))
      .then((response) => {
        const { status, data } = response.payload;
        console.log(response.payload);
        if (status && status === 201) {
          toastSuccess("successfully signup");
        } else if (status && status === 400) {
          const { email, username } = data;
          toastWarn(
            `${username === undefined ? "" : "username"} ${
              email === undefined ? "" : "email"
            } already exist`
          );
        } else {
          toastError("Something went wrong.");
        }
      })
      .catch(() => {
        toastError("Something went wrong.");
      });
  };

  const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_FACEBOOK_CLIENT_ID } = process.env;

  return (
    <SignupPage>
      <img
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        alt=''
        height='60px'
        src={Logo}
      ></img>
      <h2
        style={{
          textAlign: "center",
          marginTop: "15px",
          fontWeight: "bold",
          fontSize: "28px",
          lineHeight: "32px",
          fontStyle: "bold",
          letterSpacing: "-1px",
        }}
      >
        Welcome to the Junggl
      </h2>

      <h6
        style={{
          marginBottom: "25px",
          textAlign: "center",
          fontWeight: "100",
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        Sign up to Continue
      </h6>

      <div className='form-group'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            style={{
              fontSize: "13px",
              color: "#6e6f70",
              marginBottom: "2px",
              fontWeight: "400",
            }}
          >
            User name
          </label>
          <input
            style={{
              height: "50px",
              borderRadius: "8px",
            }}
            className='form-control'
            ref={register()}
            type='text'
            name='username'
          />
          <label
            style={{
              fontSize: "13px",
              color: "#6e6f70",
              marginTop: "15px",
              marginBottom: "2px",
              fontWeight: "400",
            }}
          >
            E-mail
          </label>
          <input
            style={{
              height: "50px",
              borderRadius: "8px",
            }}
            className='form-control'
            type='text'
            ref={register()}
            name='email'
          />
          <label
            style={{
              fontSize: "13px",
              color: "#6e6f70",
              marginTop: "15px",
              marginBottom: "2px",
              fontWeight: "400",
            }}
          >
            Create password
          </label>
          <div className='input-group'>
            <input
              style={{
                height: "50px",
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                border: "none",
                outline: "none",
              }}
              className='form-control'
              type={showPassword ? "text" : "password"}
              ref={register()}
              name='password1'
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

          <div
            style={{
              fontSize: "14px",
              lineHeight: "16px",
              fontWeight: "600",
              color: "#505060",
            }}
          >
            <label className='checkbox'>
              <span className='checkbox__input'>
                <input type='checkbox' ref={register()} name='agreetc' />
                <span className='checkbox__control'>
                  <svg
                    height='13px'
                    viewBox='-2 -3 24 20'
                    fill='none'
                    aria-hidden='true'
                    focusable='false'
                  >
                    <path
                      d='M5.03 10.91l6.37 5.37L22.79 2.59'
                      stroke='#266DD1'
                      strokeWidth='2'
                    />
                  </svg>
                </span>
              </span>
              <span
                className='radio__label'
                style={{
                  paddingLeft: "5px",
                  color: "#505060",
                  fontWeight: "500",
                }}
              >
                I agree with{" "}
                <a
                  style={{
                    color: "#266DD1",
                    fontWeight: "500",
                  }}
                  href='/'
                >
                  terms and conditions
                </a>
              </span>
            </label>
          </div>

          <div className='divider'>
            <span></span>
            <span
              style={{
                color: "#6e6f70",
                fontSize: "12px",
                fontWeight: "lighter",
                paddingTop: "2px",
              }}
            >
              Or use
            </span>
            <span></span>
          </div>
          <div
            className='d-flex justify-content-between'
            style={{ marginTop: "1rem" }}
          >
            <div style={{ width: "calc(50% - 5px)" }}>
              <div
                className='sign-up-option'
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#0B0B1E",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                <div>
                  <img
                    alt=''
                    height='20px'
                    src={theme === "light" ? GoogleLogoB : GoogleLogoW}
                    style={{ marginTop: "15px" }}
                  />
                </div>
              </div>
            </div>
            
            
            <div style={{ width: "calc(50% - 5px)" }}>
              <FacebookLogin
                appId={REACT_APP_FACEBOOK_CLIENT_ID}
                autoLoad={false}
                fields="name,email,picture"
                // callback={responseFacebook}
                // render={renderProps => (
                //   <div onClick={renderProps.onClick}></div>
                // )}
                version='12.0'
                cssClass="btn-facebook"
                icon="fa-facebook"
              />
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              type='submit'
              className='btn'
              style={{
                backgroundColor: "#266DD1",
                color: "white",
                fontSize: "14px",
                padding: "12px",
                width: "100%",
                borderRadius: "8px",
                height: "50px",
              }}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div
        style={{
          textAlign: "center",
          color: "#959CAB",
          marginTop: "10px",
          fontSize: "14px",
          lineHeight: "20px",
          paddingBottom: "60px",
        }}
      >
        Already have an account?{" "}
        <Link to='/signin' style={{ color: "#266DD1", fontWeight: "500" }}>
          Sign in
        </Link>
      </div>
    </SignupPage>
  );
};

const validation = Joi.object({
  username: Joi.string().required().label("username"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("email"),
  password1: Joi.string().min(8).required().label("password"),
  agreetc: Joi.boolean()
    .valid(true)
    .required()
    .label("agree terms and conditions"),
});

const SignupPage = styled.div`
  padding: 50px 10px 0;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 200;

  h2 {
    color: ${({ theme }) => theme.primaryText};
  }

  h6 {
    color: ${({ theme }) => theme.secondaryText};
  }

  label {
    color: ${({ theme }) => theme.signLabel};
  }

  .sign-up-option {
    color: ${({ theme }) => theme.primaryText};
    background-color: ${({ theme }) => theme.secondaryBackground};
  }

  input {
    box-shadow: ${({ theme }) => theme.inputShadow};
    background-color: ${({ theme }) => theme.primaryBackground};
    border: none;
  }

  textarea:focus,
  input:focus {
    box-shadow: none;
  }

  .input-group-text {
    background-color: white;
    border: none;
  }
  
  .btn-facebook {
    width: 100%;
    font-family: Helvetica,sans-serif;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    display: inline-block;
    font-size: 12px;
    text-decoration: none;
    transition: background-color .3s,border-color .3s;
    background-color: #fff;
    border: 0;
    border-radius: 8px !important;
    ft-radius: 8px;
    font-size: 14px;
    color: #4c69ba;
    height: 50px;
    text-align: center;
  }

  .btn-facebook:hover {
      ${'' /* color: #fff; */}
      opacity: 0.8;
  }
  .btn-facebook i.fa {
    padding: 6px 10px;
    background-color: #4c69ba;
    color: #fff;
    border-radius: 45%;
    font-size: 25px;
    margin-right: 15px;
  }
`;

export default Apps;
