exports.create = (req, res, next) => {
  res.json({
    message: 'Candidate created',
  });
};

exports.all = (req, res, next) => {
  res.json({
    message: 'List of candidates',
  });
};

exports.read = (req, res, next) => {
  res.json({
    message: 'Read one candidate',
  });
};

exports.update = (req, res, next) => {
  res.json({
    message: 'Update one candidate',
  });
};

exports.delete = (req, res, next) => {
  res.json({
    message: 'Delete one candidate',
  });
};
