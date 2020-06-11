var axios = require("axios").default;

async function read(req, res, next) {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`
    );
    return res.json(data);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  read: read,
};
