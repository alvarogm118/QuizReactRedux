import React from 'react' ;
import Actionbar from './Actionbar' ;
import Content from './Content' ;
import {changeQuestion, submit} from "../redux/actions";

export default class Game extends React.Component {
    render() {
        return (
            <div className="Game">
                {this.props.questions.length > 0 ? <Content question={this.props.questions[this.props.currentQuestion]}
                    currentQuestion={this.props.currentQuestion}
                    onChangeQuestion={(newId) => {
                        this.props.dispatch(changeQuestion(newId))
                    }}
                    dispatch={this.props.dispatch}/> : 'Loading'}

                {this.props.questions.length > 0 ?
                    <Actionbar currentQuestion={this.props.currentQuestion}
                               onChangeQuestion={(newId) => {
                                   this.props.dispatch(changeQuestion(newId))
                               }}
                               onSubmit={() => {
                                   this.props.dispatch(submit(this.props.questions))
                               }}
                               onReset={() => this.Reset()}
                               finished={this.props.finished}
                               score={this.props.score}
                               dispatch={this.props.dispatch}
                               showPopup={this.props.showPopup}/> : ''}
            </div>
        );
    }

    async componentDidMount() {
        let newQuestions = await fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=21f4f873938d1a74d281');
        let questions = await newQuestions.json();
        this.props.onInitQuestions(questions);
    }

    Reset() {
        fetch('https://quiz.dit.upm.es/api/quizzes/random10wa?token=21f4f873938d1a74d281')
            .then(res => res.json())
            .then(res => this.props.onReset(res));
    }
}