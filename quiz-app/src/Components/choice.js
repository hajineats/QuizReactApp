import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    choice: {
      maxWidth: 200,
      margin: `10px auto`,
      padding: theme.spacing(2),
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
