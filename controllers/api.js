exports.getHello = (req, res, next) => {
    // res.render('hello to you');
    res.status(200).json({ 
        hello: "Mello"
    });
}