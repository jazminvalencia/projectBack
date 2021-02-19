module.exports = app => {
    const prospectos = require("../controllers/prospect.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", prospectos.create);
  
    router.get("/", prospectos.findAll);
  
    router.get("/published", prospectos.findAllPublished);
  
    router.get("/:id", prospectos.findOne);
  
    router.put("/:id", prospectos.update);
  
    router.delete("/:id", prospectos.delete);
  
    router.delete("/", prospectos.deleteAll);
  
    app.use('/api/prospectos', router);
  };
  