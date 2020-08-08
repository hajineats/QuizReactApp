import React from 'react';
import ChoiceSet from './choiceset';
import Questionaire from './question';


const m = {
    question: `lol why though awejfioajwefo awefioawefjioaewjfioajwei ajwefiojawieofjiaoejfioajwefiojaweifojaiwoefjio awejfioajfioawjefiojaowefjoiawjefiojaeiojawi eofjaiwoefjawioefji;oawe fjioawjfioawejfioawjefioajwefiojaeifojaiwo fjioawejfioajefioawjefiajwefioio jfwejfwjawefo`,
    avatar: `Bs`,
}

export default function WholeGrid(){
    return (
      <div>
        <Questionaire question={m} />
        <ChoiceSet />
      </div>
    );
}