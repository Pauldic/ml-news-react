import SuperFetch from 'api/SuperFetch';

const news = {
  getFeedNews: (url) => {
    return SuperFetch(url ? url : `/news/`);
  },

  getTrendingNews: (url) => {
    return SuperFetch(url ? url : `/news/trending`);
  },

  getNewsByTag: (tag, url) => {
    return SuperFetch(url ? url : `/news/tag/${tag}`);
  },

  getPopularTopics: () => {
    return SuperFetch(`/news/popular/topics`);
  },

  getRecommendedArticles: () => {
    return SuperFetch(`/news/recommended`);
  },

  getRelatedNews: ({ id, history }) => {
    return SuperFetch(`/news/related/${id}`, {
      data: {
        history: history.join(','),
      },
      method: 'POST',
    });
  },

  getCategories: () => {
    return SuperFetch(`/categories/`);
  },

  getUserPosts: () => {
    return SuperFetch(`/news/userpost`);
  },
  postNew: (data) => {
    return SuperFetch(`/news/post`, {
      method: 'POST',
      data: data,
    });
  },
};

export default news;
