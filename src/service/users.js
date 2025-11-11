import User from "../model/users.js"
import jwt from "jsonwebtoken"
const JWT_SEGREDO = "blackdiamond"

class ServiceUser {

    FindAll(){
        return User.findAll()
    }

    async FindOne(id){
        if(!id){
            throw new Error("favor informar o ID")
        }

        const user = await User.findByPk(id)

        if(!user){
            throw new Error(`usuario ${id} não enontrado`)
        }

        return user
    }
    
    async Create(nome, email, senha, ativo){
        if (!nome || !email || !senha ) {
            throw new Error("Favor preencher todos os campos")
        }

        await User.create({
            nome, email, senha, ativo
        })
    }

    async Update(id, nome, email, senha, ativos){
        if(!id | !nome | !email | !senha){
            throw new Error("Favor preencher todos campos")
        }

        const user = await User.findByPk(id)
        
        if(!user){
            throw new Error(`usuário ${id} não foi encontrado`)
        }

        user.nome = nome
        user.email = email
        user.senha = senha
        user.ativo = ativos
        
        await user.save()
    }

    async Delete(id){
        if(!id){
            throw new Error("Informar ID valido")
        }

        const user = await User.findByPk(id)
        
        if(!user){
            throw new Error(`usuário ${id} não foi encontrado`)
        }

        await user.destroy()
    }

    async Login(email,senha){
        if(!email || !senha){
            throw new Error("email ou senha invalidos")
        }

        const user = await User.findOne({ where: { email }} )
        
        if(!user || await user.senha !== senha){
            throw new Error("email ou senha invalidos")
        }

        return jwt.sign(
            { id: user.id,nome: user.nome }, 
            JWT_SEGREDO, {expiresIn: 60*60})
    }

}

export default new ServiceUser()