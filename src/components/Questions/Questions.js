import React from "react";
import { connect } from "react-redux";
import { Button, Container, Divider } from 'semantic-ui-react'
import Question from "./Question";
import { 
  addNewQuestion, 
  deleteQuestion,
  setQuestionPrompt, 
  setQuestionType, 
  toggleQuestionRequired, 
  setQuestionOptions, 
} from "../../redux/actions/adminFormActions";
import {Title} from "./QuestionsStyled";

const Questions = (props) => {
  // destructure props create a constant with questionsData
  const { questionsData } = props;

  const addNewQuestion = e => {
    e.preventDefault();
    props.addNewQuestion();
  };

  const handleQuestionPromptChange = (index, name) => {
    props.setQuestionPrompt(index, name);
  };

  const handleQuestionTypeChange = (index, type) => {
    props.setQuestionType(index, type);
  };

  const handleQuestionOptionsChange = (index, optionsString) => {
    let optionsArray = [];
    // input comes in as a string, we convert it 
    // into an array for storing in redux for easier future use
    if (optionsString) {
      optionsArray = optionsString
        .split(",")
        // remove whitespace around the option (if any)
        .map(option => option.trim());
    }
    props.setQuestionOptions(index, optionsArray);
  };

  const handleIsRequiredChange = index => {
    props.toggleQuestionRequired(index);
  };

  const handleDelete = index => {
    props.deleteQuestion(index);
  };
  
  return(
    <Container>
      <Divider hidden />
      <Title>Application Questions</Title>
      {questionsData.map((question, i) => {
        return (
          <Question
            key={`question_${question.timestampForKey}`}
            index={i}
            question={question}
            onPromptChange={handleQuestionPromptChange}
            onTypeChange={handleQuestionTypeChange}
            onOptionsChange={handleQuestionOptionsChange}
            onIsRequiredChange={handleIsRequiredChange}
            onDelete={handleDelete}
          />
        );
      })}
      <Divider hidden />
      <Container textAlign='center'>
        <Button basic color='green' size='big' onClick={addNewQuestion}>Add new question</Button>
      </Container>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    questionsData: state.cohortInfo.questionsData
  };
};

const mapDispatchToProps = dispatch => ({
  addNewQuestion: () => dispatch(addNewQuestion()),
  setQuestionPrompt: (questionIndex, promptText) => {
    dispatch(setQuestionPrompt(questionIndex, promptText));
  },
  setQuestionType: (questionIndex, options) => {
    dispatch(setQuestionType(questionIndex, options));
  },
  toggleQuestionRequired: (questionIndex) => {
    dispatch(toggleQuestionRequired(questionIndex));
  },
  setQuestionOptions: (questionIndex, optionsString) => {
    dispatch(setQuestionOptions(questionIndex, optionsString));
  },
  deleteQuestion: questionIndex => dispatch(deleteQuestion(questionIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
