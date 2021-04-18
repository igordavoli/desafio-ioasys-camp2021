const { StatusCodes } = require("http-status-codes");
const { usersService } = require("../services");
const { messages } = require("../helpers");
const yup = require("yup");

module.exports = {
  list: async (req, res) => {
    try {
      const { name } = req.query;
      const response = await usersService.list({ name });

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
  account: async (req, res) => {
    try {
      const paramsUserId = Number(req.params.id);
      const tokenUserId = req.user.id;
      const isEqual = paramsUserId === tokenUserId;

      if (!isEqual) {
        throw {
          status: StatusCodes.UNAUTHORIZED,
          message: messages.invalidPassword,
        };
      }

      res.status(StatusCodes.OK).json({ user: req.user })

    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message);
    }
  },
  update: async (req, res) => {
    try {
      const { user } = req.body;
      user.id = Number(req.params.id)

      const schema = yup.object().shape({
        id: yup.number().required(),
        email: yup.string().required().email(),
        name: yup.string().required(),
        password: yup.string().required(),
        isDeleted: yup.boolean().required(),
        newPassword: yup.string(),
      });

      await schema.validate(user, {
        abortEarly: false,
        stripUnknown: true,
      });

      const updatedUser = await usersService.update(user);

      res.status(StatusCodes.CREATED).json({ updatedUser })

    } catch (error) {
      console.log(error);
      return res
        .status(error.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json(error.message);
    }
  }
};
