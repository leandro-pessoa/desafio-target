// import do módulo
import React from 'react'

// import do estilo
import { SectionHeader, Img } from '../estilo/estilo'

// import da imagem
import logo from '../componentes/img/logo.png'

export default class Header extends React.Component{

    // renderização do componente
    render(): React.ReactNode {
        return (
            <SectionHeader>
                <Img src={logo}/>
            </SectionHeader>
        )
    }
}