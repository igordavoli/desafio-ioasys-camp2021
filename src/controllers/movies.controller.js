const { StatusCodes } = require("http-status-codes");
const { moviesService } = require("../services");

module.exports = {
  list: async (req, res) => {
    try {
      const { title } = req.query;
      const response = await moviesService.list({ title });

      if (!response || response.data.length === 0) {
        return res.status(StatusCodes.NO_CONTENT).end();
      }

      return res.status(StatusCodes.OK).json(response);

    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  },
  store: async (req, res) => {
    try {
      const { movie } = req.body;
      const { id } = req.user

      movie.userId = id;

      const storedMovie = await moviesService.store(movie);

      res.status(StatusCodes.CREATED).json({ storedMovie })

    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.messages);
    }
  }
};