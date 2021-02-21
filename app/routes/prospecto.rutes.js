module.exports = app => {
    const prospectos = require("../controllers/prospect.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", prospectos.create);
  
    router.get("/", prospectos.findAll);
  
    router.get("/:id", prospectos.findOne);
  
    router.put("/:id", prospectos.update);
  
    router.post("/upload", prospectos.upload);
  
    app.use('/api/prospectos', router);
  };
  