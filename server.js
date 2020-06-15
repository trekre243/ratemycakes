const express = require('express');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ratemycakes', {useNewUrlParser: true});

app.use(express.static(__dirname + '/public/dist/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const RatingSchema = new mongoose.Schema({
    rating: {type: Number, required: true},
    comment: {type: String, required: true, minlength: 3}
}, {timestamps: true});

const CakeSchema = new mongoose.Schema({
    baker: {type: String, required: true, minlength: 3},
    image_url: {type: String, required: true, minlength: 6},
    ratings: [RatingSchema]
}, {timestamps: true});

const Cake = new mongoose.model('Cake', CakeSchema);

//get all cakes
app.get('/api/cakes', (req, res) => {
    Cake.find()
        .then(cakes => {
            res.json({message: 'success', data: cakes});
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });
});

//create a new cake
app.post('/api/cakes', (req, res) => {
    // Cake.create(req.body)
    Cake.create({
        baker: req.body.baker,
        image_url: req.body.image_url
    })
        .then(data => {
            res.json({message: 'success', data: data});
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });
});

//add rating / comment
app.post('/api/cakes/:id/ratings', (req, res) => {
    Cake.updateOne({_id: req.params.id}, {$push: {ratings: req.body}})
        .then(data => {
            res.json({message: 'success', data: data});
        })
        .catch(err => {
            res.json({message: 'error', data: err});
        });
});

app.listen(8000, () => console.log('Server started on port 8000'));