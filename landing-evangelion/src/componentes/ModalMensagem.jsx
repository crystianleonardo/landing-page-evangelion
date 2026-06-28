import estilos from './ModalMensagem.module.css'

export function ModalMensagem({visivel, exibir, titulo, texto}) {

    if (!visivel) return null

    return(
        <div className={estilos.conteiner}>

            <p className={estilos.titulo}>{titulo}</p>

            <div className={estilos.conteinerMensagem}>
                <p className={estilos.mensagem}>{texto}</p>
            </div>
            
            <button 
                className={estilos.botao}
                onClick={() => exibir(false)}
            >Fechar</button>

        </div>
    )    
}
