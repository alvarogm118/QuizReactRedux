import React from 'react';
import './../App.css';
import {connect} from 'react-redux' ;
import Game from "./Game";
import Navbar from "./Navbar";
import {initQuestions, reset} from './../redux/actions'

function App(props) {
    return (
        <div className="App">
            <Navbar/>
            <Game
                questions={props.questions}
                currentQuestion={props.currentQuestion}
                onInitQuestions={(newQ) => {
                    props.dispatch(initQuestions(newQ))
                }}
                onReset={(newQ) => {
                    props.dispatch(reset(newQ))
                }}
                finished={props.finished}
                dispatch={props.dispatch}
                score={props.score}
                showPopup={props.showPopup}/>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        ...state
    };
}
export default connect(mapStateToProps)(App);
