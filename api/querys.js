
const pool = require('./dbconection')

const peticiones = {

    get: async (err,data)=>{
     const mysql = "SELECT * FROM productos";
     await pool(mysql,(err,data)=>{
        if(err) console.log(err);
        return json(data);
     })
    },
    post: async (err,data) =>{
      const mysql = "INSERT INTO productos (nombre_evento,precio,descripcion,category,capacidad) VALUES ($1,$2,$3,$4,$5)";
      const nombre_evento = req.body.nombre;
      const precio = req.body.precio;
      const descripcion = req.body.descripcion;
      const category = req.body.categoria;
      const capacidad = req.body.capacidad;

      await pool(mysql,[nombre_evento,precio,descripcion,category,capacidad],(err,data)=>{
        if(err) console.log(err);
        return json(data);
      })
    }
    
}

module.exports = peticiones;