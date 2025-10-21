import ModelUser from "../model/users.js"

class ServiceUser {

    FindAll(){
        return ModelUser.FindAll()
    }

    FindOne(index){
        //verifica se o index é valido
        return ModelUser.FindOne(index)
    }
    
    Create(nome){
        //verifica se o nome é valido
        return ModelUser.Create(nome)
    }

    Update(index, nome){
        //verificar se o index e o nome sao validos
        return ModelUser.Update(index, nome)
    }

    Delete(index){
        //verificar se o index é valido
        return ModelUser.Delete(index)
    }

}

export default new ServiceUser()