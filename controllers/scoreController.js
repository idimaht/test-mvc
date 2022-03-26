const scoreModel = require("../models/scoreModel")

// render add-score page
module.exports.renderAddScore = function (req, res) {
    res.render("add-score")
}

// Pull data from function getViralImage in models/scoreModel
module.exports.renderScore = function (req, res) {
    const score = await scoreModel.getViralImage();
    res.render("score", { score });
}

module.exports.scoreEngagement = function (req, res) {
    const body = req.body;
    await scoreModel.scoreEngagement(body);
}