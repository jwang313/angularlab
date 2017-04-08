module.exports.index = function(req, res){
    //console.log(req.method, req.url);
    res.render('index', { title: 'Faculty MEAN App ', 
                                name: 'awesome user'});
};

module.exports.testing = function(req, res){
    //console.log(req.method, req.url);
    res.render('testing', { title: 'Testing Page' });
};

