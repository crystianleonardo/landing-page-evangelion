import estilos from './Secao-2.module.css'
import plush1 from '../assets/plush asuka.webp'
import plush2 from '../assets/plush rei.jpg'
import plush3 from '../assets/plush shinji.png'


export function Secao2() {

    return(
        <div className={estilos.conteinerPrincipal}>


            <div className={estilos.subconteiner}>
                <div>
                    <img className={estilos.img} src={plush1} alt='Asuka Plush'/> 
                </div>
                <div className={estilos.conteinerContent}>
                    <h1 className={estilos.titulo}>Asuka Langley</h1>
                    <p className={estilos.texto}>Não se engane com essa cara fofa! Ela vai falar até seu cérebro derreter!!</p>
                </div>
            </div>    
            <div className={estilos.subconteiner}>
                <div>
                    <img className={estilos.img} src={plush2} alt='Rei Plush'/> 
                </div>
                <div className={estilos.conteinerContent}>
                    <h1 className={estilos.titulo}>Rei Ayanami</h1>
                    <p className={estilos.texto}>Não se engane com essa cara fofa! Quietinha com as palavras, mas barulhenta com as ações!!</p>
                </div>
            </div>    
            <div className={estilos.subconteiner}>
                <div>
                    <img className={estilos.img} src={plush3} alt='Shinji Plush'/> 
                </div>
                <div className={estilos.conteinerContent}>
                    <h1 className={estilos.titulo}>Shinji Ikari</h1>
                    <p className={estilos.texto}>Não se engane com essa cara fofa! A falta de atitude dele vai te incomodar!!</p>
                </div>
            </div>    
        
        </div>
    )
}
