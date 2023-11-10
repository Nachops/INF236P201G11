const router = require('express').Router();
let Cita = require('../Models/cita.model');

router.route('/').get((req, res) => {
    Cita.find().then(citas => res.json(citas)).catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {
    const rut = req.body.rut;
    const nombre_doctor = req.body.nombre_doctor;
    const fecha = Date.parse(req.body.fecha);
    const maquina = req.body.maquina;

    const nuevaCita = new Cita({rut,nombre_doctor,fecha,maquina});

    nuevaCita.save()
        .then(() => res.json('Cita anadida!'))
        .catch(err => res.status(400).json('Error: ' + err))

});

router.route('/:id').get((req, res) => {
    Cita.findById(req.params.id)
    .then(cita => res.json(cita))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/rut/:rut').get((req, res) => {
    Cita.find({rut: req.params.rut})
    .then(cita => res.json(cita))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;