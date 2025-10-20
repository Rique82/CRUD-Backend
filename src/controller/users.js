import ServiceUser from "../service/users.js"

class ControllerUser{

FindAll (req,res){
    try {

        const resultado = ServiceUser.FindAll()
        res.send(resultado)

    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
}

FindOne (req,res){
    try {

        const resultado = ServiceUser.FindOne()
        res.send(resultado)

    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
}
Create (req,res){
    try {

        const resultado = ServiceUser.Create()
        res.send(resultado)

    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
}
Update (req,res){
    try {

        const resultado = ServiceUser.Update()
        res.send(resultado)

    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
}
Delete (req,res){
    try {

        const resultado = ServiceUser.Delete()
        res.send(resultado)

    } catch (error) {
        res.status(500).send({error: error.message})
    }
    
}

}

export default new ControllerUser