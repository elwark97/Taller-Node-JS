const dbConnection= require('../../config/dbConnection');
const conn= dbConnection();
const controller= {};


controller.list= (req,res)=>{
conn.query('SELECT * FROM productos', (err, result)=>{
    if(err){
        res.json(err);
    }
res.render ('productos', {
    news:result

});
});
}

controller.add = (req,res)=>{
    const {nombre_producto,cantidad} =req.body;
    
        conn.query('INSERT INTO productos SET ?',
    {
        nombre_producto,
        cantidad
    }, (err,result)=>{
        res.redirect('/productos');
    });
    };
    

    controller.eliminar = (req,res)=>{
        

        const id=req.params.id_producto;
            conn.query('DELETE from productos where id_producto = ?',
       
            id
        
        , (err,result)=>{
            res.redirect('/productos');
        });
    };


    controller.updateProductos= (req,res)=>{
   
        const id=req.params.id_producto
    
        res.render ('Aproductos', {
            actualizado:id
        
        });
        
    }
    
    controller.Actualizarproducto = (req,res)=>{
        const {nombre_producto,cantidad,id_producto} =req.body;
        
        
            conn.query('UPDATE productos SET nombre_producto = ?, cantidad = ? where id_producto = ?',
            [nombre_producto, cantidad,id_producto]
            
            ,(err,result)=>{
    
            if(err){
    
            res.json(err);
        }
    
            res.redirect('/productos');
           
        });
        
    }
    
   
 
module.exports= controller;
