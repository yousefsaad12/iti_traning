var express = require('express');

var cors = require('cors')
var app = express();

var mongoose = require('mongoose');

var Movies = require('./models/movie');



mongoose.connect('mongodb+srv://YousefSaad:yoyosaad1234@cluster0.vjx4ndh.mongodb.net/movies').
then(function(){
    console.log('connected to database');
}

).catch(function(){
    console.log('error to connect with database');
});


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// get all products //

app.get("/movies", function(req,res){
    let pageNumber =+ req.query.page;
    let pageSize =+ req.query.pagesize;
    let myQuery = Movies.find();

    if(pageNumber && pageSize)
    {
        myQuery.skip(pageSize*(pageNumber-1)).limit(pageSize);
    }
    
    myQuery.then(function(moviesData){

        if(moviesData.length==0)
        {
            res.send({message:"No Products Founded"})
        }
        else
        {   
            console.log(moviesData);
            res.status(200).json(moviesData);
        }

    }).catch(function(err){

        console.log("error");
    })
})

// Products By id //

app.get('/movie/:id', function(req, res){
    var movieId = req.params.id;

    Movies.findOne({id: movieId}).then(function(singleMovie){

       if(!singleMovie)
       {
            res.send({message:"No product with this id is found"});
       }
       else
       {
            res.send({Movies:singleMovie});
       }

    }).catch(function(err){

        console.log(`error ${err}`);
    })
})

// Add New Products //

app.post('/addMovie', function(req,res){
    var newMovieData = req.body;
    var newMovie = new Movies({

        adult: newMovieData.adult,
        backdrop_path: newMovieData.backdrop_path,
        genre_ids: newMovieData.genre_ids,
        id: newMovieData.id,
        original_language: newMovieData.original_language,
        original_title: newMovieData.original_title,
        overview: newMovieData.overview,
        popularity: newMovieData.popularity,
        poster_path: newMovieData.poster_path,
        release_date: newMovieData.release_date,
        title: newMovieData.title,
        video: newMovieData.video,
        vote_average: newMovieData.vote_average,
        vote_count: newMovieData.vote_count
    })

    newMovie.save().then(function(){

        console.log("product added")

    }).catch(function(err){
        
        console.log("error");
    })
})

app.listen(3000, function(){
    console.log('server start');
})