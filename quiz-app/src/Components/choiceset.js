import React from 'react';
import { Grid } from '@material-ui/core';
import Choice from './choice';

export default function ChoiceSet(props){
  const correct = (<Choice option={props.question.correct_answer} true={1} />);
  const incor1 = (<Choice option={props.question.incorrect_answers[0]} true={0} />);
  const incor2 = (<Choice option={props.question.incorrect_answers[1]} true={0} />);
  const incor3 = (<Choice option={props.question.incorrect_answers[2]} true={0} />);

  var arr = [correct, incor1, incor2,incor3];
  console.log();

  var mixed = shuffle(arr);
  return (
    <Grid container justify="center" spacing={2}>
      <Grid item>
        <Grid container justify="center">
          {arr.map(choice=>choice)}
        </Grid>
      </Grid>
    </Grid>
  );
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
