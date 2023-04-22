// import do módulo
import React from 'react'

// import dos estilos
import { H2, P } from '../estilo/estilo'

// tipagem dos props
interface Props {
    palavra: string
}

export default class Resultados extends React.Component<Props>{
    
    // renderização
    render(): React.ReactNode {
        return (
            <>
                <H2>Resultado</H2>
                <P>
                    Palavra invertida: {this.props.palavra}
                </P>
            </>
        )
    }
}