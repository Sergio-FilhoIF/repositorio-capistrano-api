import obrasService from '../services/obras.services.js'

const cadastro_obras = async (req, res) => {
    const {
        titulo, descricao, resumo, autores
    } = req.body

    if (!titulo || !autores || !descricao || !resumo) {
        res.status(400).json({message: "Há um campo vazio"})
    } else {
        const Obras = await obrasService.create(req.body)

        if (!Obras) {
            res.status(400).send({message: "Erro na criação das obras"})
        }

            res.status(201).json(
                {
                    user: {
                        id: Obras._id,
                        titulo,
                        descricao,
                        resumo, 
                        autores
                    },
                    message: "Obra cadastrada com sucesso"
                }
            )
        }
    }



export {cadastro_obras}
