class Api {
  static getData(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=e44b0b1d5d07301379bc55c72579677e&query=${keyword}`
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.results.length > 0) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }

  static getDataById(keywordId) {
    return fetch(
      `https://api.themoviedb.org/3/movie/${keywordId}?api_key=e44b0b1d5d07301379bc55c72579677e`
    )
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        return Promise.resolve(responseJson);
      });
  }
}

export default Api;
