import obrasService from '../services/obras.services.js'
import usuario from '../services/user.services.js'
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



// Cadastro de usuario
const cadastro_usuario = async (req, res) => {
    try{const{
        nome, tipos_de_usuarios, senha, confirmsenha
    } = req.body
    
    if (!nome || !tipos_de_usuarios || !senha || ! confirmsenha) {
        res.status(400).json({message: "Há campo(s) vazio."})

    } if (senha.length <= 7 || confirmsenha.length <= 7) {
        res.status(400).json({message: "A senha tem que ter no minimo 7 caracteris."})

    } if (senha === confirmsenha) {
        const Usuario = await usuario.create(req.body)
    
        if (!Usuario) {
            res.status(400).send({messsage: "Erro na criação do usuario."})
        }
            res.status(201).json(
                {
                    user: {
                        id: Usuario._id,
                        nome,
                        tipos_de_usuarios,
                        senha,
                        confirmsenha
                    },
                    message: "Usuario cadastrada com sucesso."
                }
            )
    } else {
        res.status(400).json({message: "Confirmação de senha não é igual."})
        }} catch (err) {
            res.status(500).send({message: err.message})
        }
    }


export {cadastro_obras}
export {cadastro_usuario}