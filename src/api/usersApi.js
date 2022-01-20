import superFetch from 'api/SuperFetch';

const users = {
  postProfile: ({ data }) => {
    return superFetch(`/users/profiles/create`, {
      method: 'POST',
      data,
    });
  },

  getProfile: () => {
    return superFetch(`/users/profiles/`);
  },

  updateProfile: ({ data }) => {
    return superFetch(`/users/profiles/update`, {
      method: 'PUT',
      data,
    });
  },

  updateUserInterests: ({ data }) => {
    return superFetch(`/users/profiles/updateinterest`, {
      method: 'PUT',
      data,
    });
  },

  updateArticleReadInterest: ({ id, articleId, data }) => {
    return superFetch(`/users/profiles/${id}/updatereadinterest/${articleId}`, {
      method: 'PUT',
      data,
    });
  },

  likedNews: ({ id }) => {
    return superFetch(`/users/like/${id}`, {
      method: 'PUT',
    });
  },

  unlikedNews: ({ id }) => {
    return superFetch(`/users/unlike/${id}`, {
      method: 'PUT',
    });
  },

  moreTopics: () => {
    return superFetch(`/users/moretopics`);
  },

  getInterests: () => {
    return superFetch(`/users/profiles/interests`);
  },
};

export default users;
