import React from 'react';
import './../App.css';

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>Your score is {this.props.score}/10 !</h1>
                    <button onClick={this.props.onClosePopup}>close me</button>
                </div>
            </div>
        );
    }
}

export default Popup;