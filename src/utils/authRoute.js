import { Route, Redirect } from "react-router-dom";
import { selectors as AuthSelector } from "redux/authSlice";
import { useSelector } from "react-redux";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { auth } = useSelector(AuthSelector.getAuth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default AuthRoute;
