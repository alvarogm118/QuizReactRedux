import React from 'react' ;

export default class Question extends React.Component {
    render() {
        return (<h4> {this.props.pregunta} </h4>);
    }
}