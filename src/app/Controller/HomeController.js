class HomeController{
    home (req, res){
            res.render('viewsHome/Home',{
                    layout:'main',
            })
    }
}
module.exports = new HomeController;