import estilos from './Secao-3.module.css'
import funko1 from '../assets/funko_asuka.webp'
import funko2 from '../assets/funko_rei.webp'
import funko3 from '../assets/funko_shinji.webp'


export function Secao3() {

    return(
        <div className={estilos.conteinerPrincipal}>


            <div className={estilos.subconteiner}>
                <div>
                    <img className={estilos.img} src={funko1} alt='Asuka Funko'/> 
                </div>
                <div className={estilos.conteinerContent}>
                    <h1 className={estilos.titulo}>Asuka Langley</h1>
                    <p className={estilos.texto}>(10% OFF!!)</p>
                </div>
            </div>    
            <div className={estilos.subconteiner}>
                <div>
                    <img className={estilos.img} src={funko2} alt='Rei Funko'/> 
                </div>
                <div className={estilos.conteinerContent}>
                    <h1 className={estilos.titulo}>Rei Ayanami</h1>
                    <p className={estilos.texto}>(10%OFF!!)</p>
                </div>
            </div>    
            <div className={estilos.subconteiner}>
                <div>
                    <img className={estilos.img} src={funko3} alt='Shinji Funko'/> 
                </div>
                <div className={estilos.conteinerContent}>
                    <h1 className={estilos.titulo}>Shinji Ikari</h1>
                    <p className={estilos.texto}>(10% OFF!!)</p>
                </div>
            </div>    
        
        </div>
    )
}
