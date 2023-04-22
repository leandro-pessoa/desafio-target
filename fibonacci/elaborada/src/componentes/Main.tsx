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
        numero: number,
        res: boolean,
        compResultados: boolean
    }

    //declaração do constructor e dos states
    constructor(props: Props){
        super(props)
        this.state = {
            numero: 0,
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

    // realiza a sequência fibonacci e verifica se o número selecionado está nela
    calcular(): void{
        let count: number = 0
        let limite: number = 1000
        let anterior1: number = 0
        let anterior2: number = 1
        let ultimo: number = 1
        for(let i: number = 0; i < limite; i++){
            ultimo = anterior1 + anterior2
            anterior1 = anterior2
            anterior2 = ultimo
            if(this.state.numero == anterior1){
                count++
            }
        }
        if(count > 0){
            count = 0
            this.setState({res: true})
        }
        else{
            this.setState({res: false})
        }
    }

    // renderização
    render(): React.ReactNode {
        return (
            <SectionMain>
                <H2>Sequência Fibonacci</H2>
                <Input
                    placeholder='Informe um número'
                    type='number'
                    name='numero'
                    onChange={(e)=>this.setValores(e)}
                />
                <Button onClick={()=>this.calcular()}>
                    Calcular
                </Button>
                <Resultados
                    numero={this.state.numero}
                    res={this.state.res}
                />
            </SectionMain>
        )
    }
}