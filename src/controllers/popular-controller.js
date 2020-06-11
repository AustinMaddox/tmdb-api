var axios = require("axios").default;

async function list(req, res, next) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    );
    return res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  list: list,
};
