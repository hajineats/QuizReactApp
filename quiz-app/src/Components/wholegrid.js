import React, { useEffect, useState } from 'react';
import ChoiceSet from './choiceset';
import Questionaire from './question';
import { makeStyles } from '@material-ui/core';
import * as firebase from 'firebase';
import LandingPage from './home'

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
  const [count, setCount] = useState(0);
  const [homepage, setHomepage] = useState(true);

  useEffect(()=>{
    var query = rootRef.ref('/sample');
    query.once('value').then(function(snapshot){
      snapshot.forEach(function(childsnapshot){
        setQuestions(childsnapshot.val().results)
      })
    })
  },[])

  return (    
    (homepage)?(<div><LandingPage a={setHomepage} /></div>):(
      (questions.length>0)?(
        <div>
          <Questionaire question={questions[count]} />
          <ChoiceSet length={questions.length} className={classes.choicegrid} question={questions[count]} />
          <button onClick={()=>setCount((count<questions.length-1)?(count+1):(count))}>
            See next question
          </button>
        </div>
      ):(
        <div>
          <h2>Now Loading...</h2>
        </div>
        )
    ))
}