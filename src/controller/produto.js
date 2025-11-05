import ServiceProduto from "../service/produto.js"

class ControllerProduto {

    async PegarTodos(req, res) {
        try {
            const produtos = await ServiceProduto.PegarTodos()
            res.status(200).send({
                data: produtos
            })
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async PegarUm(req, res) {
        try {
            const id = req.params.id
            const produto = await ServiceProduto.PegarUm(id)
            res.status(200).send({produto})
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Criar(req, res) {
        try {
            // precisamos pegar os valores do body
            const { nome, disponivel, qtde } = req.body
            
            await ServiceProduto.Criar(nome, disponivel, qtde)

            res.status(201).send("produto criado com sucesso")
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Alterar(req, res) {
        try {   
            const id = req.params.id
            // const { nome, disponivel, qtde} = req.body
            const nome = req.body?.nome
            const disponivel = req.body?.nome
            const qtde =req.body?.nome
            await ServiceProduto.Alterar(id, nome, disponivel, qtde)
            res.status(200).send("usuario alterado com sucesso")
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async Deletar(req, res) {
        try {
            const id = req.params.id
            await ServiceProduto.Deletar(id)
            res.status(204).send("usuario deletado com sucesso")
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

}
export default new ControllerProduto()