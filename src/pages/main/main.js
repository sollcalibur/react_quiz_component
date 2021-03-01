import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionData: [
                {
                    question: 'Sample question',
                    choices: ['a', 'b', 'c', 'd'],
                    answer: 0,
                },
                {
                    question: 'Sample question',
                    choices: ['a', 'b', 'c', 'd'],
                    answer: 3,
                },
                {
                    question: 'Sample question',
                    choices: ['a', 'b', 'c', 'd'],
                    answer: 1,
                },
            ],
            questionSetup: {
                questionActual: '',
                answersActual: [],
                answerKey: 0,
            },
            score: 0,
            questionNumber: 0,
        }
        // this.eventHandlerMethod = this.eventHandlerMethod.bind(this);
    }
    componentWillMount() {
        let questionNumber = this.state.questionNumber;
        this.pushQuizData(questionNumber);
    }
    pushQuizData(questionNumber) {
        this.setState({
            questionSetup: {
                questionActual: this.state.questionData[questionNumber].question,
                answersActual: this.state.questionData[questionNumber].choices,
                answerKey: this.state.questionData[questionNumber].answer,
            },
            questionNumber: this.state.questionNumber + 1,
        });
    }
    submitAndProceed() {
        //handle submit
        //pushQuizData
        //reset quiz form state
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Form style={{border: '1px solid grey', borderRadius: '10px', padding: '20px'}}>
                        <Form.Group as={Row}>
                            <Col>
                                <Form.Label>Question {this.state.questionNumber + 1}</Form.Label>
                                <Form.Control plaintext defaultValue={this.state.questionSetup.questionActual} readOnly></Form.Control>
                            </Col>
                        </Form.Group>
                        <fieldset>
                            <Form.Group as={Row}>
                                <Col xs={6} lg={3}>
                                    <Form.Check
                                        type="radio"
                                        label={this.state.questionSetup.answersActual[0]}
                                        name="quizAnswerChoices"
                                        value={0}
                                        id=""
                                    />
                                </Col>
                                <Col xs={6} lg={3}>
                                    <Form.Check
                                        type="radio"
                                        label={this.state.questionSetup.answersActual[1]}
                                        name="quizAnswerChoices"
                                        value={1}
                                        id=""
                                    />
                                </Col>
                                <Col xs={6} lg={3}>
                                    <Form.Check
                                        type="radio"
                                        label={this.state.questionSetup.answersActual[2]}
                                        name="quizAnswerChoices"
                                        value={2}
                                        id=""
                                    />
                                </Col>
                                <Col xs={6} lg={3}>
                                    <Form.Check
                                        type="radio"
                                        label={this.state.questionSetup.answersActual[3]}
                                        name="quizAnswerChoices"
                                        value={3}
                                        id=""
                                    />
                                </Col>
                            </Form.Group>
                        </fieldset>
                        <Row>
                            <Col>
                                <Button type="submit">Proceed</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </React.Fragment>
        );
    }
}
export default Main;