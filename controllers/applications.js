const Application = require('../models/Application');

exports.getApplications = async (req, res, next) => {
  const applications = await Application.find();
  res.status(200).json({
    success: true,
    data: applications,
  });
};

exports.createApplication = async (req, res, next) => {
  const application = await Application.create(req.body);

  res.status(200).json({
    success: true,
    data: application,
  });
};

exports.deleteApplication = async (req, res, next) => {
  try {
    const application = await Application.findById(req.params.id);

    application.remove();

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
