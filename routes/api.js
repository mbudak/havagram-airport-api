
module.exports = function (app) {
    

    app.get('/api/hello', function (req, res){
        res.status(200).json({
            hello: "mello world"
        });
    });

}
