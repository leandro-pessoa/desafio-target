// import dos módulos
import React, { ChangeEvent } from 'react'

// imports dos estilos
import './App.css'

// imports dos componentes
import Header from './componentes/Header'
import Main from './componentes/Main'

// tipagem dos props
interface Props {

}

export default class App extends React.Component<Props>{
  // tipagem dos states

  // declaração do construcor o dos states
  constructor(props: Props){
    super(props)
    this.state = {

    }
  }

  render(): React.ReactNode {
    return (
      <>
        <Header/>
        <Main/>
      </>
    )
  }
  
}
