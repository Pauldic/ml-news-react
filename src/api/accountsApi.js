import SuperFetch from "api/SuperFetch";

const accounts = {
  loginUser: ({ data }) => {
    return SuperFetch("/accounts/login/", {
      method: "post",
      data,
    });
  },

  loginGoogle: (data) => {
    return SuperFetch("/users/social/google/login/", {
      method: "post",
      data,
    });
  },

  loginFacebook: (data) => {
    return SuperFetch("/users/social/facebook/login/", {
      method: "post",
      data,
    });
  },

  postRegistration: ({ data }) => {
    return SuperFetch(`/accounts/registration/`, {
      method: "post",
      data,
    });
  },

  getUser: () => {
    return SuperFetch(`/accounts/info`);
  },

  getLogout: () => {
    return SuperFetch(`/accounts/logout/`);
  },
};

export default accounts;
