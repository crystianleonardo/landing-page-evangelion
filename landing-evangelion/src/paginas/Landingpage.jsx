import estilos from './Landingpage.module.css'
import bgfundo from '../assets/bg_evadef.png'
import {Link} from 'react-router-dom'
import {Secao1} from '../componentes/Secao-1'
import {Secao2} from '../componentes/Secao-2'
import {Secao3} from '../componentes/Secao-3'
import {HiOutlineShoppingCart} from "react-icons/hi";

export function LandingPage() {

    return (
        <div className={estilos.conteiner}>
            
            <div className={estilos.conteiner}>
                <img className={estilos.background} src={bgfundo} /> 
            </div>
            
            <div className={estilos.titulo}>
                <h1>Sobre a Loja</h1>
            </div>
            <Secao1/>

            <div className={estilos.titulo}>
                <h1>Plush's</h1>
            </div>
            <Secao2 />
            <button className={estilos.botao}>
                <HiOutlineShoppingCart 
                className={estilos.icon}  size={40}
                /> 
                <Link className={estilos.link} to={'login'}>
                    Adquira seu Plush!
                </Link>
            </button>

            <div className={estilos.titulo}>
                <h1>Funko's</h1>
            </div>
            <Secao3 />
            <button className={estilos.botao}>
                <HiOutlineShoppingCart 
                className={estilos.icon}  size={40}
                /> 
                <Link className={estilos.link} to={'login'}>
                    Adquira seu Funko!
                </Link>
            </button>

            <div className={estilos.footer}>  

                <div className={estilos.footerE}>
                    <p>Neon Genesis Evangelion 2026 &copy; Todos os direitos reservados.</p>
                </div>

                <div className={estilos.footerD}>
                    <p>Por Crystian Leonardo</p>
                    <p>Contato: contato.crys@gmail.com</p>
                    <p>Desenvolvido com a tecnologia React Vite+</p>
                </div>

            </div>
        </div>
    )
}