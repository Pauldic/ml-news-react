import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { usersApi } from "api";

export const postProfile = createAsyncThunk(
  "user/postFetchingProfile",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await usersApi.postProfile({ data });
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getProfile = createAsyncThunk(
  "user/getFetchingProfile",
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

export const updateProfile = createAsyncThunk(
  "user/updateFetchingProfile",
  async ({ data }, { rejectWithValue }) => {
    try {
      const response = await usersApi.updateProfile({ data });
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const updateUserInterests = createAsyncThunk(
  "user/updateFetchingUserInterests",
  async ({ data, name, actiontype }, { rejectWithValue }) => {
    try {
      const response = await usersApi.updateUserInterests({ data });
      return { data: response.data, status: response.status, name, actiontype };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const updateArticleReadInterest = createAsyncThunk(
  "user/updateFetchingArticleReadInterest",
  async ({ profileId, articleId, data }, { rejectWithValue }) => {
    try {
      const response = await usersApi.updateArticleReadInterest({
        profileId,
        articleId,
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

export const likedNews = createAsyncThunk(
  "user/likedNews",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await usersApi.likedNews({
        id,
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

export const unlikedNews = createAsyncThunk(
  "user/unlikedNews",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await usersApi.unlikedNews({
        id,
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

export const moreTopics = createAsyncThunk(
  "user/fetchingMoreTopics",
  async (Moretopics, { rejectWithValue }) => {
    try {
      const response = await usersApi.moreTopics();
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getInterests = createAsyncThunk(
  "user/fetchinggetInterests",
  async (Interests, { rejectWithValue }) => {
    try {
      const response = await usersApi.getInterests();
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const user = createSlice({
  name: "user",
  initialState: {
    loading: "idle",
    user: {},
    interests: {
      loading: "idle",
      following: [],
      suggest: [],
      error: null,
    },
    error: null,
  },
  reducers: {
    addInterestsState: (state, action) => {
      state.interests.following = action.payload;
    },
    removeInterestsState: (state, action) => {
      state.interests.suggest = action.payload;
    },
  },
  extraReducers: {
    [postProfile.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [postProfile.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.user = action.payload.data;
      }
    },
    [postProfile.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
    [getProfile.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [getProfile.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.user = action.payload.data;
      }
    },
    [getProfile.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
    [updateProfile.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [updateProfile.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.user = action.payload.data;
      }
    },
    [updateProfile.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
    [updateUserInterests.pending]: (state, action) => {
      if (state.interests.loading === "idle") {
        state.interests.loading = "pending";
        state.interests.error = null;
      }
    },
    [updateUserInterests.fulfilled]: (state, action) => {
      if (state.interests.loading === "pending") {
        const { actiontype, name } = action.payload;
        state.interests.loading = "idle";
        if (actiontype === "add") {
          state.interests.following.push(name);
          state.interests.suggest = state.interests.suggest.filter(
            (interest) => interest !== name
          );
        } else if (actiontype === "remove") {
          state.interests.following = state.interests.following.filter(
            (interest) => interest !== name
          );
        }
      }
    },
    [updateUserInterests.rejected]: (state, action) => {
      if (state.interests.loading === "pending") {
        state.interests.loading = "idle";
        state.interests.error = action.payload;
      }
    },
    [updateArticleReadInterest.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [updateArticleReadInterest.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
      }
    },
    [updateArticleReadInterest.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
    [likedNews.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [likedNews.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
      }
    },
    [likedNews.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
    [unlikedNews.pending]: (state, action) => {
      if (state.loading === "idle") {
        state.loading = "pending";
        state.error = null;
      }
    },
    [unlikedNews.fulfilled]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
      }
    },
    [unlikedNews.rejected]: (state, action) => {
      if (state.loading === "pending") {
        state.loading = "idle";
        state.error = action.payload;
      }
    },
    [moreTopics.pending]: (state, action) => {
      if (state.interests.loading === "idle") {
        state.interests.loading = "pending";
        state.interests.error = null;
      }
    },
    [moreTopics.fulfilled]: (state, action) => {
      state.interests.loading = "idle";
      state.interests.suggest = action.payload.data.more_topics;
    },
    [moreTopics.rejected]: (state, action) => {
      if (state.interests.loading === "pending") {
        state.interests.loading = "idle";
        state.interests.error = action.payload;
      }
    },

    [getInterests.pending]: (state, action) => {
      if (state.interests.loading === "idle") {
        state.interests.loading = "pending";
        state.interests.error = null;
      }
    },
    [getInterests.fulfilled]: (state, action) => {
      state.interests.loading = "idle";
      state.interests.following = action.payload.data.interests;
    },
    [getInterests.rejected]: (state, action) => {
      if (state.interests.loading === "pending") {
        state.interests.loading = "idle";
        state.interests.error = action.payload;
      }
    },
  },
});

export const { addInterestsState, removeInterestsState } = user.actions;

export const selectors = {
  getUser: createSelector(
    (state) => state.user,
    (user) => user
  ),

  getInterests: createSelector(
    (state) => state.user,
    (user) => user.interests
  ),
};

// export const {} = auth.actions;

export default user.reducer;
