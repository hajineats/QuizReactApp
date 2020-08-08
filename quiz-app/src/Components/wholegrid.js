import React, { useEffect, useState } from 'react';
import ChoiceSet from './choiceset';
import Questionaire from './question';

const m = {
    question: `lol why though awejfioajwefo awefioawefjioaewjfioajwei ajwefiojawieofjiaoejfioajwefiojaweifojaiwoefjio awejfioajfioawjefiojaowefjoiawjefiojaeiojawi eofjaiwoefjawioefji;oawe fjioawjfioawejfioawjefioajwefiojaeifojaiwo fjioawejfioajefioawjefiajwefioio jfwejfwjawefo`,
    avatar: `Bs`,
}

const APIURL = "https://opentdb.com/api.php?amount=10";


export default function WholeGrid(){

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
        <ChoiceSet />
      </div>
      ):(<h2> we loading boi</h2>)
    );
}