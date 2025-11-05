import Produto from "../model/produto.js";

class ServiceProduto {
    
    async PegarTodos() {
        return Produto.findAll()
    }

    async PegarUm(id) {
        if(!id){
            throw new Error("informe o id")
        }

        const produto = await Produto.findByPk(id)

        if(!produto){
            throw new Error(`produto de id ${id} não existe`)
        }

        return produto
    }

    async Criar(nome, disponivel, qtde) {
        await Produto.create({
            nome, disponivel, qtde
        })
    }

    async Alterar(id, nome, disponivel, qtde) {
        if (!id){
            throw new Error("informe o id")
        }

        const produto = await Produto.findByPk(id)

        if(!produto){
            throw new Error(`produto ${id} não foi encontrado`)
        }

        produto.nome = nome || produto.nome
        produto.disponivel = disponivel || produto.disponivel
        produto.qtde = qtde || produto.qtde

        await produto.save()
    }

    async Deletar(id) {
        if (!id){
            throw new Error("informe o id")
        }

        const produto = await Produto.findByPk(id)

        if(!produto){
            throw new Error(`produto ${id} não foi encontrado`)
        }

        await produto.destroy()
    }

}

export default new ServiceProduto()