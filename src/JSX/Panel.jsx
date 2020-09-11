import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Panel.css'
import Chart from './Chart'
import App from '../App'

class Panel extends Component{
    constructor(props){
        super(props);
        this.state = {
            val: props.val,
            Mensagem: ''
        }
        this.fnMensagem = this.fnMensagem.bind(this)
        
    }
    
    Buttons(){
        return(
            <div className="Panel">
                <h1>Mensagem: {this.state.Mensagem}</h1>
                <span className="btnH">
                <Button 
                    className="btnConfig"
                    onClick={() => this.fnMensagem(1)}
                    >Cadastrar uma nova kilometragem</Button>
                
                <Button 
                    className="btnConfig"
                    onClick={() => this.fnMensagem(2)}
                    >Exibir Gráfico</Button>
                </span>
            </div>
        )
    }

    fnMensagem(par) {
        this.setState(state => ({
            val : par === undefined? '' : par,
            Mensagem: par === undefined? '' : par
        }));
      }

    render(){
        return(
            <div>
                {this.Buttons()}
                {Menu(this.state.val)}
            </div>            
        )
    }
}



function Menu(par){
    if(par === 1){
        return(
            <div>
                <h1>Cadastro:</h1>
            </div>
        )
    }else if(par === 2){
        return(
            <div>
               <App />
            </div>
        )
    }
}
export default Panel;