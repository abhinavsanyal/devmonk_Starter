module.exports = {
    setRouting : function(router){
        router.get('/',this.getHomePage);
            
    },

    getHomePage : function(req,res){
       
        res.render('page/home');
    },
}

  