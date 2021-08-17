const router = require('express').Router();
let Rec = require('../models/recModel');

router.route('/').get((req, res) => {
    Rec.find()
        .then(rectangles => res.json(rectangles))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const width = req.body.width;
    const height = req.body.height;
    const color = req.body.color;
    const name = req.body.name;

    const newRec = new Rec( {
        width,
        height,
        color,
        name,
    });

    newRec.save()
        .then(() => res.json('Rectangle added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

// get a rectangle by its id
router.route('/:id').get((req, res) => {
    Rec.findById(req.params.id)
        .then(rec => res.json(rec))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Rec.findById(req.params.id)
        .then(updated => {
            updated.width = req.body.width;
            updated.height = req.body.height;
            updated.color = req.body.color;
            updated.name = req.body.name;

            updated.save()
                .then(() => res.json('Rectangle updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Rec.findByIdAndDelete(req.params.id)
        .then(() => res.json('Rectangle deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;