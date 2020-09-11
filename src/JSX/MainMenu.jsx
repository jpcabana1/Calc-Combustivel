import React, {Component} from 'react'
import '../CSS/MainMenu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faChartArea } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function MainMenu(){
    return(
        <div className="MainDiv">
            <Title />
            
                
        </div>
    )
}

function Title(){
    return(
        <div className="MainMenu">
            <MainLabel />
           <span className="btnH">
                <Button className="btnDef" >
                        <FontAwesomeIcon icon={faCarSide} 
                        size="5x" />
                        Combustível
                </Button> 
                <Button className="btnDef">
                        <FontAwesomeIcon icon={faChartArea} 
                        size="5x" />
                        Finanças
                </Button> 
            </span>

        </div>
    )
}

function MainLabel(){
   return(
    <div>
        <h1>Olá, Bem vindo ao CombusCalc</h1>
    </div>
   )
}


export default MainMenu;