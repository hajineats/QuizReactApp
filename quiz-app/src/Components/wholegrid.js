import React, { useEffect, useState } from 'react';
import ChoiceSet from './choiceset';
import Questionaire from './question';
import { makeStyles } from '@material-ui/core';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyB0iOuIDIEb9IWUGXoFyddkMfnQTZjQDTg",
  authDomain: "nzpmc-dd79d.firebaseapp.com",
  databaseURL: "https://nzpmc-dd79d.firebaseio.com",
  storageBucket: "nzpmc-dd79d.appspot.com",
};

firebase.initializeApp(config);
// const APIURL = "https://opentdb.com/api.php?amount=10";

const useStyles = makeStyles((theme)=>({
  choicegrid: {
    margin: 'auto',
    // display: 'flex',
    // justifyContent: 'center',
  },
}));

export default function WholeGrid(){
  const classes = useStyles();
  const [questions, setQuestions] = useState([]);
  const rootRef = firebase.database()
  
  function nextPage(){

  }


  useEffect(()=>{
    var array=[]
    var query = rootRef.ref('/sample');
    query.once('value').then(function(snapshot){
      snapshot.forEach(function(childsnapshot){
        console.log((childsnapshot.val().results))
        array = childsnapshot.val().results
        setQuestions(childsnapshot.val().results)
      })
    })
  },[])

  return (
    (questions.length>0)?(
    <div>
      <Questionaire question={questions[0]} />
      <ChoiceSet className={classes.choicegrid} question={questions[0]} />
    </div>
    ):(
    <div>
      <h2>pls standby</h2>
      <button onClick={() => nextPage()}>
        Click me
      </button>
    </div>
      )
  );
}