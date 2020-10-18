const Poll = require('./poll');

exports.createPollGetController = (req, res, next) => {
    res.render('create');
}

exports.createPollPostController = async (req, res, next) => {

    let { title, description, options, totalVote } = req.body;
    options = options.map(opt => {
        return {
            name: opt,
            vote: 0
        }
    })

    // console.log(options);
    // console.log(req.body);

    const poll = new Poll({
        title,
        description,
        options,
        totalVote
    });

    try {
        await poll.save();
        res.redirect('/polls');
    } catch(e) {
        console.log(e);
    }

    // res.render('create');
}
