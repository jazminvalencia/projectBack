const db = require("../models");
const Prospecto = db.prospectos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const prospecto = {
    nombre: req.body.nombre,
    primerApellido: req.body.primerApellido,
    segundoApellido: req.body.segundoApellido,
    calle: req.body.calle,
    numero: req.body.numero,
    colonia: req.body.colonia,
    cp: req.body.cp,
    telefono: req.body.telefono,
    rfc: req.body.rfc,
    estatusId: "1",
    evaluacionId: null,
    descripcionRechazo: null,
  };


  Prospecto.create(prospecto)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the prospecto."
      });
    });
};


exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Prospecto.findAll({ 
    where: condition,
    // include: [{
    //     model: 'estatus',
    //     attributes: ['id', 'nombre']
    // }]
  }).then(data => {
      res.send(data);
   }).catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving prospecto."
      });
   });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  
  Prospecto.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Prospecto with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  
  Prospecto.update(req.body, {
    estatusId: req.body.estatusId,
    evaluacionId: req.body.idEvaluacion,
    descripcionRechazo: req.body.descripcionRechazo,
    where: { id: id }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "Tutorial was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating Tutorial with id=" + id
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Tutorial.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Prospecto.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

exports.findAllPublished = (req, res) => {
    Prospecto.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};
