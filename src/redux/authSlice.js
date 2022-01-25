import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { accountsApi, usersApi } from "api";

export const loginUser = createAsyncThunk(
  "auth/postLoginUser",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await accountsApi.loginUser({ data });
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const loginGoogle = createAsyncThunk(
  "auth/postLoginGoogle",
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await accountsApi.loginGoogle({ access_token: accessToken });
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const loginFacebook = createAsyncThunk(
  "auth/postLoginFacebook",
  async (accessToken, { rejectWithValue }) => {
    try {
      const response = await accountsApi.loginFacebook({ access_token: accessToken });
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);


export const registerUser = createAsyncThunk(
  "auth/postRegisterUser",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await accountsApi.postRegistration({
        data,
      });
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (Auth, { rejectWithValue }) => {
    try {
      const response = await accountsApi.getUser();
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getCurrentProfile = createAsyncThunk(
  "user/getFetchingCurrentUserProfile",
  async (Profile, { rejectWithValue }) => {
    try {
      const response = await usersApi.getProfile();
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getLogout = createAsyncThunk(
  "auth/getLogout",
  async (Auth, { rejectWithValue }) => {
    try {
      const response = await accountsApi.getLogout();
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const auth = createSlice({
  name: "auth",
  initialState: {
    loading: "idle",
    token: localStorage.getItem("token"),
    auth: false,
    userinfo: {},
    profileinfo: {},
    error: null,
  },
  reducers: {
    updateProfileState: (state, action) => {
      state.profileinfo = action.payload;
    },

    updateLikedArray: (state, action) => {
      const likedArr = state.profileinfo.liked.find(
        (id) => id === action.payload
      );
      if (!likedArr) {
        state.profileinfo.liked.push(action.payload);
        state.profileinfo.unliked = state.profileinfo.unliked.filter(
          (id) => id !== action.payload
        );
      }
    },

    updateUnlikedArray: (state, action) => {
      const unlikedArr = state.profileinfo.unliked.find(
        (id) => id === action.payload
      );
      if (!unlikedArr) {
        state.profileinfo.unliked.push(action.payload);
        state.profileinfo.liked = state.profileinfo.liked.filter(
          (id) => id !== action.payload
        );
      }
    },
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [loginUser.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        localStorage.setItem("token", action.payload.data.key);
        state.loading = "idle";
        state.token = action.payload.data.key;
      }
    },
    [loginUser.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.token = null;
        state.error = action.payload;
      }
    },
    [registerUser.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [registerUser.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        localStorage.setItem("token", action.payload.data.key);
        state.loading = "idle";
        state.token = action.payload.data.key;
      }
    },
    [registerUser.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.token = null;
        state.error = action.payload;
      }
    },
    [getCurrentUser.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
        state.userinfo = {};
      }
    },
    [getCurrentUser.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.auth = true;
        state.userinfo = action.payload.data;
      }
    },
    [getCurrentUser.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
    [getCurrentProfile.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
        state.profileinfo = {};
      }
    },
    [getCurrentProfile.fulfilled]: (state, action) => {
      state.loading = "idle";
      state.profileinfo = action.payload.data;
      // console.log(action.payload.data);
    },
    [getCurrentProfile.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
    [getLogout.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [getLogout.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        localStorage.removeItem("token");
        state.loading = "idle";
        state.auth = false;
        state.token = null;
        state.userinfo = {};
        state.profileinfo = {};
      }
    },
    [getLogout.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
  },
});

export const {
  updateProfileState,
  updateLikedArray,
  updateUnlikedArray,
} = auth.actions;

export const selectors = {
  getAuth: createSelector(
    (state) => state.auth,
    (auth) => auth
  ),

  getProfile: createSelector(
    (state) => state.auth,
    (auth) => {
      const { profileinfo } = auth;
      const { first_name, last_name } = profileinfo;
      const complate = Boolean(first_name && last_name);
      return { complate, profileinfo };
    }
  ),

  getLikedUnliked: (id) =>
    createSelector(
      (state) => state.auth,
      (auth) => {
        const { profileinfo } = auth;
        const { liked = [], unliked = [] } = profileinfo;

        const isLiked = liked.find((like) => like === id);
        const isUnliked = unliked.find((unlike) => unlike === id);
        return { liked: Boolean(isLiked), unliked: Boolean(isUnliked) };
      }
    ),

  getUserInfo: createSelector(
    (state) => state.auth,
    (data) => {
      const { userinfo, profileinfo } = data;
      return { userinfo, profileinfo };
    }
  ),
};

// export const {} = auth.actions;

export default auth.reducer;
