// import do módulo
import React from 'react'

// import dos estilos
import { H2, P } from '../estilo/estilo'

// tipagem dos props
interface Props {
    numero: number,
    res: boolean
}

export default class Resultados extends React.Component<Props>{
    
    // renderização
    render(): React.ReactNode {
        return (
            <>
                <H2>Resultado</H2>
                <P>
                    Número selecionado: {this.props.numero}
                </P>
                <P>
                    Está na sequência: {this.props.res ? 'Sim' : 'Não'}
                </P>
            </>
        )
    }
}