const soma = (req, res) => {
    const nome = 'Anderson'
    const idade = 16

  res.json(`${nome}, ${idade}`)
}

const saudacao = (req, res) => {
  const {
    nome
  } = req.body

  res.json(`Seja bem-vindo, ${nome}`)
}

const cadastro = (req, res) => {
    const {
        nome, senha, confirmsenha
    } = req.body

    if (!nome || !senha || !confirmsenha) {
        res.status(400).json({message: "Há um campo vazio"})
    }else {
        if (senha != confirmsenha) {
            res.status(400).json({message: "Senha diferentes!"})
        }else {
        if (senha.length < 6) {
            res.status(400).json({message: "A senha deve ter ao menos 6 digitos"})
        } else {
            res.status(201).json(
                {
                    user: {
                        nome, senha, confirmsenha
                    },
                    message: "Usuario criado com sucesso"
                }
            )
        }
        }
    }
}


export {soma, saudacao, cadastro}
