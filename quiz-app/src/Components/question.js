import { makeStyles } from "@material-ui/core";
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
    paper: {
        maxWidth: 400,
        margin: `8px auto`,
        padding: theme.spacing(2),
    },
}));


export default function Questionaire(props){
    const classes = useStyles();
    return (
      <div className>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar>{props.question.avatar}</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>{props.question.question}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
}

