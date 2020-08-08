import React, { useEffect, useState } from 'react';
import ChoiceSet from './choiceset';
import Questionaire from './question';
import { makeStyles } from '@material-ui/core';
import firebase from 'firebase';


var config = {
  apiKey: "AIzaSyB0iOuIDIEb9IWUGXoFyddkMfnQTZjQDTg",
  authDomain: "nzpmc-dd79d.firebaseapp.com",
  databaseURL: "https://nzpmc-dd79d.firebaseio.com",
  storageBucket: "nzpmc-dd79d.appspot.com",
};

firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
console.log(database.ref(`questions`).on("value", snapshot => {
  console.log("FireB ",snapshot)
  if (snapshot && snapshot.exists()) {
     //Set values in state which can be extracted in jsx in render. 
  }}));

const APIURL = "https://opentdb.com/api.php?amount=10";


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
  useEffect(()=>{
    fetch(APIURL)
      .then(res=>res.json())
      .then(data=>setQuestions(data.results))
  },[]);

    return (
      (questions.length>0)?(
      <div>
        <Questionaire question={questions[0]} />
        <ChoiceSet className={classes.choicegrid} question={questions[0]} />
      </div>
      ):(<h2>pls standby</h2>)
    );
}