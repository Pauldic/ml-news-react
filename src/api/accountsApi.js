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
    // return SuperFetch("/accounts/social/google/login/", {
    // return SuperFetch("/users/finalise/google/auth/", {
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
