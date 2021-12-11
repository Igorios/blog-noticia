
const app = require('./server');

// Mockup
const noticiasMockup = require('./mockup.js');

// Porta
const port = process.env.PORT || 3000;

// Primeira rota Rota Home(raiz)
app.get('/',(req,res) =>{
    //mostras as 3 primeiras notícias
    // var result = await db.query('SELECT * FROM noticias ORDER BY id_noticia DESC LIMIT 3')
    res.render('home/index',{ noticia: noticiasMockup.slice(0,3), title:'Home' })
});

// Rota noticias
app.get('/noticias', (req,res) =>{
    //mostra todas as notícias
    // var result = await db.query('SELECT * FROM noticias ORDER BY id_noticia DESC')
    res.render('noticias/noticias', { noticias: noticiasMockup, title: "Notícias" })
});

// Rota noticia
app.get("/noticia", (req, res) => {
    // Recuperar o id da noticia
    var id = req.query.id 
    res.render("noticias/noticia", { noticia: noticiasMockup[id], title: "Notícia" })
});

// Rota admin
app.get('/admin',(req,res) =>{
    if(req.session.autorizado){
        res.render('admin/form_add_noticia',{ title:"Admin", autorizado: req.session.autorizado })
    }else{
        res.render('admin/login',{ title:"Login" })
    }
    
})

// iniciando um servidor
app.listen(port, () => {
    console.log("Escutando uma porta 3000 no express");
});