const schema = require("../database");

// save new data from add score that you add in score path views/score.ejs
module.exports.addElementScore = async function (data) {
    const score = new schema.Score({
        name: data.name,
        reach: data.reach,
        like: data.like,
        share: data.share,
        comment: data.comment,
    })

    // save data to collection
    await score.save();
};

// Lookup viral image 
module.exports.getViralImage = new async function () {
    var engage;

    // find use for query object
    const score = schema.score.find();
    score.reach = getRandomInt(1000, 10000);

    if (score.reach < score.like || score.share || score.comment) {
        return "Less reach";
    } else {

        // calculate engage score before send to controller
        engage = (score.like + score.share + score.comment) / score.reach;

        // if score of engage more than 0.1 the result is Viral Video 
        // by this case, use score.exec to send data of viral image
        if (engage > 0.1) {
            return await score.exec();
        } else {
            return "Not Viral now";
        }
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
}