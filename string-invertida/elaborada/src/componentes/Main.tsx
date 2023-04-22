// import dos módulos
import React, { ChangeEvent } from 'react'

// import dos compoenentes estilizados
import { SectionMain, H2, Input, Button } from '../estilo/estilo'

// import do componente externo
import Resultados from './Resultados'

// tipagem dos props
interface Props {

}

export default class Main extends React.Component<Props>{
    // tipagem do state
    state: {
        palavra: string,
        palavraInvertida: string,
        res: boolean,
        compResultados: boolean
    }

    //declaração do constructor e dos states
    constructor(props: Props){
        super(props)
        this.state = {
            palavra: '',
            palavraInvertida: '',
            res: false,
            compResultados: false
        }
    }

    // função de setagem dos states
    setValores(e: ChangeEvent<HTMLInputElement>): void{
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    inversao(): void{
        let palavraInvertida: string = ''
        for(let i = this.state.palavra.length - 1; i >= 0; i--){
            palavraInvertida += this.state.palavra[i]
        }
        this.setState({palavraInvertida: palavraInvertida})
    }

    // renderização
    render(): React.ReactNode {
        return (
            <SectionMain>
                <H2>String invertida</H2>
                <Input
                    placeholder='Informe a palavra'
                    type='text'
                    name='palavra'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>this.setValores(e)}
                />
                <Button onClick={()=>this.inversao()}>
                    Inverter
                </Button>
                <Resultados
                    palavra={this.state.palavraInvertida}
                />
            </SectionMain>
        )
    }
}