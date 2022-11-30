const execute = require('./connection');
const express = require('express');
const router = express.Router();


router.post("/listado", async(req,res)=>{
    
    const {sucursal} = req.body;
        
    let qry =''; 
    qry = `SELECT ID,CODUSUARIO,NOMBRE,PASS,
                TIPO,CODDOC,CORRELATIVO,LAT,LONG,FECHA 
            FROM ME_USUARIOS
            WHERE CODSUCURSAL='${sucursal}';`;     
    
      
    execute.Query(res, qry);

    
});

router.post("/update_clave", async(req,res)=>{
    
    const {sucursal, id, nuevaclave} = req.body;
        
    let qry =''; 
    qry = `UPDATE ME_USUARIOS
            SET PASS='${nuevaclave}'
            WHERE CODSUCURSAL='${sucursal}'AND ID=${id};`;     
    
      
    execute.Query(res, qry);

    
});

router.post("/update_coddoc", async(req,res)=>{
    
    const {sucursal, id, coddoc} = req.body;
        
    let qry =''; 
    qry = `UPDATE ME_USUARIOS
            SET CODDOC='${coddoc}'
            WHERE CODSUCURSAL='${sucursal}'AND ID=${id};`;     
    
      
    execute.Query(res, qry);

    
});

router.post("/update_correlativo", async(req,res)=>{
    
    const {sucursal, id, correlativo} = req.body;
        
    let qry =''; 
    qry = `UPDATE ME_USUARIOS
            SET CORRELATIVO=${correlativo}
            WHERE CODSUCURSAL='${sucursal}'AND ID=${id};`;     
    
      
    execute.Query(res, qry);

    
});


module.exports = router;