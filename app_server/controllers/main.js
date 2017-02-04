module.exports.index = function(req, res){
    //console.log(req.method, req.url);
    res.render('index.jade', { title: 'Faculty MEAN App ', 
                                name: 'awesome user'});
};

module.exports.testing = function(req, res){
    //console.log(req.method, req.url);
    res.render('testing.jade', { title: 'Testing Page' });
};

