import React from 'react' ;
import Question from './Question' ;
import Answer from './Answer' ;
import {questionAnswer} from "../redux/actions";
import {Dropdown, DropdownButton} from 'react-bootstrap';

export default class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <div className="row1">
                <div className="rightcol">
                    <DropdownButton variant="dark" title="Choose Question">
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(0)}>Question 1</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(1)}>Question 2</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(2)}>Question 3</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(3)}>Question 4</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(4)}>Question 5</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(5)}>Question 6</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(6)}>Question 7</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(7)}>Question 8</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(8)}>Question 9</Dropdown.Item>
                        <Dropdown.Item onClick={() => this.props.onChangeQuestion(9)}>Question 10</Dropdown.Item>
                    </DropdownButton>
                    <h1 className="Nquestion">Question {this.props.currentQuestion + 1}:</h1>
                    <Question pregunta={this.props.question.question}/>
                    <Answer
                        onQuestionAnswer={(answer) => {this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}}
                        userAnswer={this.props.question.userAnswer}/>
                    <div>
                        <h5>Tips</h5>
							{this.props.question.tips.map((tip, i) => <p key={i}>{tip}</p>)}
                    </div>
                </div>
                <div className="leftcol">
                    {this.props.question.attachment === null ? '' : <img src={this.props.question.attachment.url}/>}
                </div>
                </div>
                    <div className="row2">
                        <img className="autor" src={this.props.question.author.photo.url}/>
                        Created by: {this.props.question.author.username}
                    </div>
            </div>
        );
    }
}