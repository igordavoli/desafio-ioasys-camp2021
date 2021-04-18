const { StatusCodes } = require("http-status-codes");
const { moviesService } = require("../services");
const yup = require("yup");

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
        .json(error.message);
    }
  },

  store: async (req, res) => {
    try {
      const { movie } = req.body;

      movie.userId = req.user.id;

      const schema = yup.object().shape({
        title: yup.string().required(),
        gender: yup.string().required(),
        synopsis: yup.string().required(),
        actors: yup.array(yup.string()).required(),
        directors: yup.array(yup.string()).required(),
        userId: yup.number().required(),
      });

      await schema.validate(movie, {
        stripUnknown: true,
        abortEarly: false,
      });

      const storedMovie = await moviesService.store(movie);

      res.status(StatusCodes.CREATED).json({ storedMovie });

    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message);
    }
  },

  avaliate: async (req, res) => {
    try {
      const userId = req.user.id;
      const { movieId } = req.params;
      const { grade } = req.body;

      if (!(grade >= 0 && grade <= 4)) {
        throw {
          status: StatusCodes.UNPROCESSABLE_ENTITY,
          message: messages.invalidFields,
        };
      }

      const resp = await moviesService.avaliate(userId, movieId, grade)

      res.status(StatusCodes.OK).json({ resp });

    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message);
    }
  }
};