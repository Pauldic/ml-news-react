import { useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Pages } from "pages/routes";
import { selectors as authSelector } from "redux/authSlice";
import AuthCardModal from "components/AuthCardModal";
import AuthRoute from "utils/authRoute";
import React from "react";
import BaseLayout from "./base";
import ScrollToTop from "../components/ScrollToTop";

const UserLayout = () => {
  const history = useHistory();
  const myRef = useRef();
  const { complate } = useSelector(authSelector.getProfile);
  const { auth } = useSelector(authSelector.getAuth);

  useEffect(() => {
    if (auth && !complate) {
      history.push("/create-profile");
    }
  }, [auth, complate, history]);

  return (
    <div className='Apps' ref={myRef}>
      <BaseLayout>
        <ScrollToTop />
        <Switch>
          {Pages.map((page, index) =>
            page.auth ? (
              <AuthRoute
                key={index}
                exact={page.exact}
                path={page.path}
                component={page.component}
                layout={page.layout}
              />
            ) : (
              <Route
                key={index}
                exact={page.exact}
                path={page.path}
                component={page.component}
                layout={page.layout}
              />
            )
          )}
        </Switch>
      </BaseLayout>
      <AuthCardModal />
    </div>
  );
};

export default UserLayout;
