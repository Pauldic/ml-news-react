import React, { useCallback } from "react";
import Joi from "joi";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectors as uiSelector } from "redux/uiSlice";
import { joiResolver } from "@hookform/resolvers/joi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toastSuccess, toastWarn, toastError } from "utils/toast";
import { loginUser, loginGoogle, loginFacebook } from "redux/authSlice";
import Logo from "../images/LOGO/logo.svg";
import styled from "styled-components";
import AppleLogoB from "images/objects/apple-black.svg";
import GoogleLogoB from "images/objects/google-black.svg";
import AppleLogoW from "images/objects/apple-white.svg";
import GoogleLogoW from "images/objects/google-white.svg";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';


const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useSelector(uiSelector.getTheme);

  const { register, handleSubmit } = useForm({
    resolver: joiResolver(validation),
    mode: "onChange",
  });
  

  const onSubmit = async (data) => {
    dispatch(loginUser({ data }))
      .then((response) => {
        const { status } = response.payload;
        if (status && status === 200) {
          toastSuccess("successfully signin");
          history.push("/");
        } else if (status && status === 400) {
          toastWarn("Unable to log in with provided credentials.");
        } else {
          toastError("Something went wrong.");
        }
      })
      .catch(() => {
        toastError("Something went wrong.");
      });
  };

  const { REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_FACEBOOK_CLIENT_ID } = process.env;
  
  const onLogout = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user')
    window.location.reload()
  }

  const onGoogleLoginSuccess = useCallback(
    response => {
      dispatch(loginGoogle(response.accessToken))
        .then((response) => {
          console.log('Susccess =========>');
          if(response.error){
            console.log("Error: \n",response.error)
            if(response.payload){
              toastError(response.payload.data.non_field_errors[0]);
              console.log("Payload: \n",response.payload)
            }else if(response.error.message){
              toastError(response.error.message);
              console.log("Message: \n",response.error.message)
            }
          }else{
            toastSuccess(`Successfully Signed in`);
            console.log(response)
            history.push("/");
          }
          console.log('Susccess =========> End');
        })
        .catch(() => {
          console.log('Failed =========> ');
          toastError("Something went wrong.");
          console.log(response)
          console.log('Failed =========> End');
        });
    }, []);

  const responseFacebook = useCallback(
    response => {
      dispatch(loginFacebook(response.accessToken))
        .then((response) => {
          
          console.log('Facebook Returned THEN=========>');
          console.log(response);
          console.log(response.accessToken);

          if(response.error){
            toastError(response.error.message);
            console.log("Error: \n",response.error)
          }else{
            toastSuccess(`Successfully Signed in`);
            history.push("/");
          }
          console.log('Facebook THEN***************************** END');
        })
        .catch(() => {
          console.log('Facebook Returned CATCH=========>');
          toastError("Something went wrong.");
          console.log(response)
          console.log(response.accessToken)
          console.log('Facebook CATCH***************************** END');
        });
    }, []);


  return (
    <SigninPage>
      <img
        style={{
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        height='60px'
        alt='logo'
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
        Signin to Continue
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
              border: "none",
              outline: "none",
            }}
            ref={register()}
            className='form-control'
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
            Password
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
              ref={register()}
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
              <GoogleLogin
                clientId={REACT_APP_GOOGLE_CLIENT_ID}
                render={renderProps => (
                  <div
                    className='sign-in-option'
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#0B0B1E",
                      height: "50px",
                      textAlign: "center",
                    }}
                    onClick={renderProps.onClick}
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
                )}
                onSuccess={onGoogleLoginSuccess}
                onFailure={(res) => {
                    console.log("It failed*******")
                    console.log(res)
                  }
                }
                accessType='offline'
                onRequest={(res)=>{console.log("OnRequest: ", res)}}
                uxMode='popup'  //redirect | popup
                cookiePolicy={'single_host_origin'}
                // responseType="code"
              />
            </div>

            <div style={{ width: "calc(50% - 5px)" }}>
              <FacebookLogin
                appId={REACT_APP_FACEBOOK_CLIENT_ID}
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                render={renderProps => (
                  <div onClick={renderProps.onClick}></div>
                )}
                version='12.0'
                cssClass="btn-facebook"
                icon="fa-facebook"
              />
            </div>
          </div>

          <div style={{ marginTop: "30px", marginBottom: "20px" }}>
            <button
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
              Sign In
            </button>

            {/* <button type="button" className="btn btn-dark btn-md btngroup" onClick={onLogout}>Logout</button> */}
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
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </div>
    </SigninPage>
  );
};

const validation = Joi.object({
  username: Joi.string().required().label("username"),
  password: Joi.string().min(8).required().label("password"),
});

const SigninPage = styled.div`
  padding: 50px 10px 0;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: normal;

  h2 {
    color: ${({ theme }) => theme.primaryText};
  }

  h6 {
    color: ${({ theme }) => theme.secondaryText};
  }

  label {
    color: ${({ theme }) => theme.signLabel};
  }

  .sign-in-option {
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
    background-color: ${({ theme }) => theme.primaryBackground};
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

export default Signin;
