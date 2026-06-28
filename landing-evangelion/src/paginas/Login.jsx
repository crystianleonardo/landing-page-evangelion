import estilos from './Login.module.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {ModalMensagem} from '../componentes/ModalMensagem'
import {ImEnter} from 'react-icons/im'
import {IoIosArrowBack} from "react-icons/io";

export function Login(){

    const [email, setEmail] = useState('')
    const [nome, setNome] = useState('')
    const [item, setItem] = useState('')
    const [modalMensagemVisivel, setModalMensagemVisivel] = useState(false)
    const [modalMensagemTitulo, setModalMensagemTitulo] = useState('')
    const [modalMensagemTexto, setModalMensagemTexto] = useState('')

    const exibirModal = (status) => {
        setModalMensagemVisivel(status)
    }

    const autenticarUsuario = (e) => {

        setModalMensagemTitulo('Autenticação')
        
        if(!email || !nome || !item){
            setModalMensagemTitulo('Hmm...algo de errado :O')
            setModalMensagemTexto(`Por favor, insira o E-mail, seu Nome e o item da sua escolha.`)
        }else{
            setModalMensagemTitulo('Preenchimento Concluído!')
            setModalMensagemTexto(`Seus dados foram enviados com sucesso! Enviaremos instruções por Email em breve!!`)
        }
        
        exibirModal(true)
        
        e.preventDefault()
    }

    return(
        <div className={estilos.conteiner}>

            <h1 className={estilos.titulo}>Formulário</h1>

            <form 
                className={estilos.formulario}
                onSubmit={autenticarUsuario}
            >
                <input 
                    className={estilos.campo}
                    placeholder='Nome'                    
                    value={nome}                    
                    onChange={(e) => setNome(e.target.value)}
                />

                <input 
                    className={estilos.campo}
                    placeholder='E-mail'
                    value={email}                    
                    onChange={(e) => setEmail(e.target.value)}
                />


                
                <div className={estilos.linhaCampos}>

                <select
                    className={estilos.campoSelect}
                    value={item}
                    onChange={(e) => setItem(e.target.value)}>
                        <option value='' disabled>Escolha um item...</option>
                        <option value='Item1'>Asuka Plush</option>
                        <option value='Item2'>Rei Plush</option>
                        <option value='Item3'>Shinji Plush</option>
                        <option value='Item4'>Asuka Funko</option>
                        <option value='Item5'>Rei Funko</option>
                        <option value='Item6'>Shinji</option>

                </select>
                

                <button 
                    className={estilos.botao}
                >
                    <ImEnter className={estilos.icone}/>
                    Enviar
                </button>    

                </div>
            </form>

            <Link
                className={estilos.link}
                to={'/'}
            >
                <IoIosArrowBack 
                    className={estilos.icone}
                    size={20} 
                />    
                Voltar
            </Link>


            <ModalMensagem 
                visivel={modalMensagemVisivel}
                exibir={() => exibirModal()}
                titulo={modalMensagemTitulo}
                texto={modalMensagemTexto}
            />

        </div>
    )
}
