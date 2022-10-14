import React from "react";
import { Elevador } from "../../components/Elevador/Elevador";
import { Tela } from "../../components/Tela/Tela"

function Home(){

    const portaImg = {
        imageSemiAberto:'',
        imageAberto:'../../img/elevadorFechado.jpg',
        imageFechado:'../../img/elevadorFechado.jpg'
    }

    const trocaImgPorta = () =>{
        setImagem(state => state ==='imageAberto' ? 'imageFechado' : 'imageAberto');
    }

    const[imagem, setImagem] = React.useState('imageAberto');

    const andares = [
        {
            id: 0,
            andar: 'Terreo',
            sigla: 'T' 
        },
        {
            id: 1,
            andar: 'Primeiro',
            sigla: '1'
        },
        {
            id: 2,
            andar: 'Segundo',
            sigla: '2'
        },
        {
            id: 3,
            andar: 'Terceiro',
            sigla: '3'
        }
    ]

    return (
        <div>
            <Tela andar = {andares[3].sigla}></Tela>
            <img src={Elevador} alt="dfasas"/>
        </div>
    )
}

export default Home;