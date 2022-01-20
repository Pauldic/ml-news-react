import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import { newsApi, usersApi } from 'api';

const getProtocal = (url) => {
  const idx = url.indexOf('://');
  return idx < 0 ? '' : url.substr(0, idx);
};

const getConvertProtocal = (url) => {
  if (!url) return url;
  const header = getProtocal(process.env.REACT_APP_BACKEND_BASEURL);
  const idx = url.indexOf('://');
  return idx < 0 ? url : header + url.substring(idx);
};

export const getFeedNews = createAsyncThunk(
  'news/getFetchingNews',
  async (nextUrl, { rejectWithValue }) => {
    try {
      const response = await newsApi.getFeedNews(nextUrl);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getAllNews = createAsyncThunk(
  'news/getFetchingAllNews',
  async ({ page, count }, { rejectWithValue }) => {
    try {
      const response = await newsApi.getFeedNews({ page, count });
      return {
        data: response.data,
        status: response.status,
        page,
      };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getTrendingNews = createAsyncThunk(
  'news/getFetchingTrendingNews',
  async (nextUrl, { rejectWithValue }) => {
    try {
      const response = await newsApi.getTrendingNews(nextUrl);
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getNewsByTag = createAsyncThunk(
  'news/getFetchingNewsByTag',
  async ({ tag, nextUrl }, { rejectWithValue }) => {
    try {
      const response = await newsApi.getNewsByTag(tag, nextUrl);
      return {
        data: response.data,
        tag: tag,
        status: response.status,
      };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getPopularTopics = createAsyncThunk(
  'news/getFetchingPopularTopics',
  async (topics, { rejectWithValue }) => {
    try {
      const response = await newsApi.getPopularTopics();
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getRecommendedArticles = createAsyncThunk(
  'news/getFetchingRecommendedArticles',
  async (Articles, { rejectWithValue }) => {
    try {
      const response = await newsApi.getRecommendedArticles();
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getRelatedNews = createAsyncThunk(
  'news/getFetchingRelatedNews',
  async ({ id, history }, { rejectWithValue }) => {
    try {
      const response = await newsApi.getRelatedNews({
        id,
        history,
      });
      return { id, data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const getCategories = createAsyncThunk(
  'news/getFetchingCategories',
  async (Categories, { rejectWithValue }) => {
    try {
      const response = await newsApi.getCategories();
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);
export const getUserPosts = createAsyncThunk(
  'user/userPostNews',
  async ({ next }, { rejectWithValue }) => {
    try {
      const response = await newsApi.getUserPosts(next);
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
  'user/likedNews',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await usersApi.likedNews({
        id,
      });
      return { data: response.data, status: response.status, id };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const unlikedNews = createAsyncThunk(
  'user/unlikedNews',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await usersApi.unlikedNews({
        id,
      });
      return { data: response.data, status: response.status, id };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

export const uploadPost = createAsyncThunk(
  'news/upload',
  async (data, { rejectWithValue }) => {
    try {
      const response = await newsApi.postNew(data);
      return { data: response.data, status: response.status };
    } catch (error) {
      return rejectWithValue({
        data: error.response.data,
        status: error.response.status,
      });
    }
  }
);

const news = createSlice({
  name: 'news',
  initialState: {
    loading: 'idle',
    news: {
      loading: 'idle',
      total: 0,
      items: [],
      error: null,
    },

    populartopics: {
      loading: 'idle',
      items: [],
      error: null,
    },

    allNews: {
      loading: 'idle',
      total: 0,
      items: [],
      error: null,
    },
    recommendedarticles: {
      loading: 'idle',
      items: [],
      error: null,
    },
    relatednews: {
      loading: 'idle',
      items: [],
      error: null,
    },
    trending: {
      loading: 'idle',
      items: [],
      next: '',
      count: 0,
      error: null,
    },
    newsbytag: {
      loading: 'idle',
      items: [],
      next: '',
      count: 0,
      tag: '',
      error: null,
    },
    userPosts: {
      loading: 'idle',
      items: [],
      next: '',
      count: 0,
      tag: '',
      error: null,
    },
    categories: {
      loading: 'idle',
      items: [],
      error: null,
    },
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getFeedNews.pending]: (state, action) => {
      if (state.news.loading === 'idle') {
        state.news.loading = 'pending';
        state.news.error = null;
      }
    },
    [getFeedNews.fulfilled]: (state, action) => {
      if (state.news.loading === 'pending') {
        state.news.loading = 'idle';
        state.news.items = [
          ...state.news.items,
          ...action.payload.data.results,
        ];
        state.news.next = getConvertProtocal(action.payload.data.next);
        state.news.count = action.payload.data.count;
      }
    },
    [getFeedNews.rejected]: (state, action) => {
      if (state.news.loading === 'pending') {
        state.news.loading = 'idle';
        state.news.error = action.payload;
      }
    },
    [getAllNews.pending]: (state, action) => {
      if (state.allNews.loading === 'idle') {
        state.allNews.loading = 'pending';
        state.allNews.error = null;
      }
    },
    [getAllNews.fulfilled]: (state, action) => {
      if (state.allNews.loading === 'pending') {
        state.allNews.loading = 'idle';
        state.allNews.total = action.payload.data.total_news;
        const { page } = action.payload;
        if (page === 1) state.allNews.items = action.payload.data.feeds;
        else
          state.allNews.items = [
            ...state.allNews.items,
            ...action.payload.data.feeds,
          ];
      }
    },
    [getAllNews.rejected]: (state, action) => {
      if (state.allNews.loading === 'pending') {
        state.allNews.loading = 'idle';
        state.allNews.error = action.payload;
      }
    },
    [getRecommendedArticles.pending]: (state, action) => {
      if (state.recommendedarticles.loading === 'idle') {
        state.recommendedarticles.loading = 'pending';
        state.recommendedarticles.error = null;
      }
    },
    [getRecommendedArticles.fulfilled]: (state, action) => {
      if (state.recommendedarticles.loading === 'pending') {
        state.recommendedarticles.loading = 'idle';
        state.recommendedarticles.items = action.payload.data.feeds;
      }
    },
    [getRecommendedArticles.rejected]: (state, action) => {
      if (state.recommendedarticles.loading === 'pending') {
        state.recommendedarticles.loading = 'idle';
        state.recommendedarticles.error = action.payload;
      }
    },
    [getPopularTopics.pending]: (state, action) => {
      if (state.populartopics.loading === 'idle') {
        state.populartopics.loading = 'pending';
        state.populartopics.error = null;
      }
    },
    [getPopularTopics.fulfilled]: (state, action) => {
      if (state.populartopics.loading === 'pending') {
        state.populartopics.loading = 'idle';
        state.populartopics.items = action.payload.data.popular_topics;
      }
    },
    [getPopularTopics.rejected]: (state, action) => {
      if (state.populartopics.loading === 'pending') {
        state.populartopics.loading = 'idle';
        state.populartopics.error = 'This is rejected';
      }
    },
    [getRelatedNews.pending]: (state, action) => {
      if (state.relatednews.loading === 'idle') {
        state.relatednews.loading = 'pending';
        state.relatednews.error = null;
      }
    },
    [getRelatedNews.fulfilled]: (state, action) => {
      if (state.relatednews.loading === 'pending') {
        state.relatednews.loading = 'idle';
        state.relatednews.items.push({
          id: action.payload.id,
          datas: action.payload.data.feeds,
        });
      }
    },
    [getRelatedNews.rejected]: (state, action) => {
      if (state.relatednews.loading === 'pending') {
        state.relatednews.loading = 'idle';
        state.relatednews.error = action.payload;
      }
    },
    [getUserPosts.pending]: (state, action) => {
      if (state.userPosts.loading === 'idle') {
        state.userPosts.loading = 'pending';
        state.userPosts.error = null;
      }
    },
    [getUserPosts.fulfilled]: (state, action) => {
      if (state.userPosts.loading === 'pending') {
        state.userPosts.loading = 'idle';

        const { next, results, count } = action.payload.data;
        if (state.userPosts.items.length < count) {
          state.userPosts.items = [...state.userPosts.items, ...results];
        }
        state.userPosts.next = getConvertProtocal(next);
        state.userPosts.count = action.payload.data.count;
      }
    },
    [getUserPosts.rejected]: (state, action) => {
      if (state.userPosts.loading === 'pending') {
        state.userPosts.loading = 'idle';
        state.userPosts.error = action.payload;
      }
    },
    [getCategories.pending]: (state, action) => {
      if (state.categories.loading === 'idle') {
        state.categories.loading = 'pending';
        state.categories.error = null;
      }
    },
    [getCategories.fulfilled]: (state, action) => {
      if (state.categories.loading === 'pending') {
        state.categories.loading = 'idle';
        state.categories.items = action.payload.data;
      }
    },
    [getCategories.rejected]: (state, action) => {
      if (state.categories.loading === 'pending') {
        state.categories.loading = 'idle';
        state.categories.error = action.payload;
      }
    },
    [getTrendingNews.pending]: (state, action) => {
      if (state.trending.loading === 'idle') {
        state.trending.loading = 'pending';
        state.trending.error = null;
      }
    },
    [getTrendingNews.fulfilled]: (state, action) => {
      if (state.trending.loading === 'pending') {
        state.trending.loading = 'idle';
        state.trending.items = [
          ...state.trending.items,
          ...action.payload.data.results,
        ];

        state.trending.next = getConvertProtocal(action.payload.data.next);
        state.trending.count = action.payload.data.count;
      }
    },
    [getTrendingNews.rejected]: (state, action) => {
      if (state.trending.loading === 'pending') {
        state.trending.loading = 'idle';
        state.trending.error = action.payload;
      }
    },
    [getNewsByTag.pending]: (state, action) => {
      if (state.newsbytag.loading === 'idle') {
        state.newsbytag.loading = 'pending';
        state.newsbytag.error = null;
      }
    },
    [getNewsByTag.fulfilled]: (state, action) => {
      if (state.newsbytag.loading === 'pending') {
        state.newsbytag.loading = 'idle';
        const {
          tag,
          data: { results, count, next },
        } = action.payload;
        if (tag === state.newsbytag.tag) {
          state.newsbytag.items = [...state.newsbytag.items, ...results];
        } else {
          state.newsbytag.items = [...results];
        }

        state.newsbytag.next = getConvertProtocal(next);
        state.newsbytag.count = count;
      }
    },
    [getNewsByTag.rejected]: (state, action) => {
      if (state.newsbytag.loading === 'pending') {
        state.newsbytag.loading = 'idle';
        state.newsbytag.error = action.payload;
      }
    },

    [likedNews.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.error = null;
      }
    },
    [likedNews.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';

        if (action.payload.status === 201) {
          const likedNewsUpdate = state.news.items.find(
            (item) => item.id === action.payload.id
          );
          const likedNewsUpdateIndex = state.news.items.findIndex(
            (item) => item.id === action.payload.id
          );

          state.news.items[likedNewsUpdateIndex] = {
            ...likedNewsUpdate,
            liked: action.payload.data.liked,
            unliked: action.payload.data.unliked,
          };
        }
      }
    },
    [likedNews.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.payload;
      }
    },
    [unlikedNews.pending]: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.error = null;
      }
    },
    [unlikedNews.fulfilled]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';

        if (action.payload.status === 201) {
          const unLikedNewsUpdate = state.news.items.find(
            (item) => item.id === action.payload.id
          );
          const unLikedNewsUpdateIndex = state.news.items.findIndex(
            (item) => item.id === action.payload.id
          );

          state.news.items[unLikedNewsUpdateIndex] = {
            ...unLikedNewsUpdate,
            liked: action.payload.data.liked,
            unliked: action.payload.data.unliked,
          };
        }
        // state.news.items = state.news.items.filter(
        //   (item) => item.id !== action.payload.id
        // );
        // state.trending.items = state.trending.items.filter(
        //   (item) => item.id !== action.payload.id
        // );
      }
    },
    [unlikedNews.rejected]: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.error = action.payload;
      }
    },
  },
});

export const selectors = {
  getNews: createSelector(
    (state) => state.news,
    (data) => data
  ),

  getAllNews: (likedArr) => {
    return createSelector(
      (state) => state.news.allNews,
      (data) => {
        const likedArticles = data.items.filter((item) => {
          for (let i = 0; i < likedArr.length; i++) {
            if (likedArr[i] === item.id) {
              return true;
            }
          }
          return false;
        });
        return { items: likedArticles, total: data.total };
      }
    );
  },

  getNewsGrid: createSelector(
    (state) => state.news,
    (data) => {
      const { items } = data.news;

      let resultArr = [];
      let sliderArr = [];

      const bigCardArr = ({ item, arrMod, index }) => {
        resultArr.push({ type: 'bigcard', news: [item] });
      };

      const mediumCardArr = ({ item, arrMod, index }) => {
        resultArr.push({ type: 'mediumcard', news: [item] });
      };

      const sliderCardArr = ({ item, arrMod, index }) => {
        sliderArr.push(item);
        const sliderLength = sliderArr.length;
        if (sliderLength === 5 || items.length === index + 1) {
          resultArr.push({ type: 'slidercard', news: sliderArr });
          sliderArr = [];
        }
      };

      items.forEach((item, index) => {
        const arrMod = index % 10;
        if (arrMod === 0 || arrMod === 2) {
          bigCardArr({ item, arrMod, index });
        } else if (arrMod === 1 || arrMod === 3 || arrMod === 4) {
          mediumCardArr({ item, arrMod, index });
        } else if (arrMod > 5) {
          sliderCardArr({ item, arrMod, index });
        }
      });

      return resultArr;
    }
  ),

  getPopularTopics: createSelector(
    (state) => state.news.populartopics,
    (data) => data
  ),

  authSimilar: (id) =>
    createSelector(
      (state) => state.news,
      (data) => {
        const {
          relatednews: { items },
        } = data;
        const findResult = items.find((news) => news.id === id);
        return findResult ? findResult.datas : [];
      }
    ),
  authSimilarAll: () =>
    createSelector(
      (state) => state.news,
      (data) => data
    ),
  guestSimilar: (id) =>
    createSelector(
      (state) => state.news,
      (data) => {
        const {
          news: { items },
        } = data;
        const findResult = items.find((news) => news.id === id);
        return findResult ? findResult.similar_news : [];
      }
    ),
  getPosts: createSelector(
    (state) => state.news,
    (data) => data
  ),
  uploadUserPost: createSelector(
    (state) => state.news,
    (data) => data
  ),
};

export default news.reducer;
