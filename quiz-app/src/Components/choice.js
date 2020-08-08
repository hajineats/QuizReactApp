import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    choice: {
      margin: `10px auto`,
      padding: '5px',
    }
}));

function Choice(){
    const classes = useStyles();
    return (
      <div className={classes.choice}>
        <Button variant="contained">Hi I'm here! Also you know what I'm pretty stoked.</Button>
      </div>
    );
}
export default Choice;
