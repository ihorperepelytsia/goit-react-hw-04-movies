export const mapper = movies => {
  return movies.map(({ id, webformatURL, largeImageURL, tags }) => ({
    id,
    webformatURL,
    largeImageURL,
    tags,
  }));
};
