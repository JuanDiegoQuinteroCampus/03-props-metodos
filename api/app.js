import express from 'express'
import cors from 'cors'

const app= express()
app.use(cors())

app.get("/get",(req, res) => {
    
   /*  const guardar = () => {
        const usuarioInput = document.getElementById('usuario');
        const contraInput = document.getElementById('contra');
        const usuario = usuarioInput.value;
        const contra = contraInput.value;
        // Haz algo con los valores usuario y contra
    } */
    res.status(200).json({message: 'Hola'});
    
});

app.post("/post",  async(req, res) => {
    if (!req.rateLimit) return; 

    console.log(req.rateLimit);
    
    let {id} = req.query ;
    let db =await con();
    let bodegas = db.collection("bodegas");     
    try {
        const date={
            ...req.body,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at),
            deleted_at: req.body.deleted_at ? new Date(req.body.deleted_at) : null
        }
        
        let result = await bodegas.insertOne(date); 
        res.send({ message: "bodegas ingresado correctamente", result });
    
    } catch (error) {
        console.log(error);
        res.send({ message: "No fue posible ingresar las bodegas" });
        console.log(error.errInfo.details.schemaRulesNotSatisfied.specifiedAs);
    }
    
});

app.listen(5010,()=>{
    console.log(`http://localhost:5010`);
})