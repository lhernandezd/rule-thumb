const { Model } = require('./model');

exports.id = async (req, res, next, id) => {
  try {
    const doc = await Model.findById(id);
    if (doc) {
      req.doc = doc;
      next();
    } else {
      next({
        statusCode: 404,
        message: 'Resource not found',
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res, next) => {
  const { body = {} } = req;
  const { username = '', password = '' } = body;
  try {
    const user = await Model.findOne({ username });
    if (user && (user.password === password)) {
      res.json({
        data: user,
        success: true,
        statusCode: 200,
      });
    } else {
      next({
        statusCode: 401,
        message: 'Invalid email or password',
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.signup = async (req, res, next) => {
  const { body = {} } = req;
  try {
    const doc = await Model.create(body);
    res.status(201);
    res.json({
      data: doc,
      success: true,
      statusCode: 201
    });
  } catch (error) {
    next(error);
  }
};

exports.all = (req, res, next) => {
  Model.find().exec((err, docs) => {
    if (err) {
      next(err);
    } else {
      res.json({
        data: docs,
        success: true,
        statusCode: 200,
      });
    }
  });
};

exports.read = (req, res, next) => {
  const { doc = {} } = req;
  res.json({
    data: doc,
    success: true,
    statusCode: 200,
  });
};

exports.update = async (req, res, next) => {
  const { body = {}, doc = {} } = req;

  try {
    Object.assign(doc, body);
    const updated = await doc.save();

    res.json({
      data: updated,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
};

exports.delete = async (req, res, next) => {
  const { doc = {} } = req;

  try {
    const deleted = await doc.remove();

    res.json({
      data: deleted,
      success: true,
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
};
