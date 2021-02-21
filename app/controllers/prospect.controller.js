const db = require("../models");
const Prospecto = db.prospectos;
const Estatus = db.estatus;
const Op = db.Sequelize.Op;
const path = require('path');
const Documento = db.documentos;

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
    statusId: "1",
    evaluationsId: null,
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

exports.upload = (req, res) => {
  let sampleFile;
  let uploadPath;
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  for(let name of Object.keys(req.files)) {
    sampleFile = req.files[name];
    var d = new Date();
    var mili = d.getTime();
    var filename = path.parse(sampleFile.name);
    var fullname = filename.name + mili + filename.ext; 
    uploadPath = global.appRoot + '/public/docs/' + fullname;
    sampleFile.mv(uploadPath, function(err) {
      if (err) {
        return res.status(400).json({
          status: 'error',
          error: 'req body cannot be empty',
        });
      }
    });

    console.log(uploadPath,"uploadPath");
    var documento = {
      prospectId: req.body.prospectId,
      documento: fullname,
      nombredoc: name
    }
    Documento.create(documento)
    .then(data => {
  
    })
    .catch(err => {
    });
  }  
  res.send('File uploaded!');
}

exports.findAll = (req, res) => {
  const nombre = req.query.nombre;

  Prospecto.findAll({
    include: [{
        model: Estatus,
        attributes: ['id', 'tipoEstatus']
     },
    {
      model: Documento,
      attributes: ['id','nombredoc', 'documento']
    }
  ]
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
    statusId: req.body.statusId,
    evaluationsId: req.body.evaluationsId,
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

