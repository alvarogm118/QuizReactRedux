import React from 'react' ;
import Popup from './Popup' ;
import {Button} from 'react-bootstrap';
import {closePopup} from "../redux/actions";

export default class Actionbar extends React.Component {
    render() {
        return (
            <div className="Actionbar">
                <Button variant="dark" onClick={() => this.props.onChangeQuestion(this.props.currentQuestion - 1)}
                        disabled={this.props.currentQuestion < 1}>Anterior</Button>
                <Button variant="dark" onClick={() => this.props.onChangeQuestion(this.props.currentQuestion + 1)}
                        disabled={this.props.currentQuestion > 8}>Siguiente</Button>
                <Button variant="dark" onClick={this.props.onReset}>Reset</Button>
                <Button variant="dark" onClick={this.props.onSubmit}>Submit</Button>

                {this.props.showPopup === true ? <Popup score={this.props.score}
                                                        onClosePopup={() => {
                                                            this.props.dispatch(closePopup())
                                                        }}/> : null}
            </div>
        );

    }
}

