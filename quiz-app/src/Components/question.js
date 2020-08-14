import { makeStyles } from "@material-ui/core";
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import logo from './unnamed.png'

const useStyles = makeStyles((theme)=>({
    paper: {
        maxWidth: 500,
        margin: '8px auto',
        padding: theme.spacing(2),
    },
}));

export default function Questionaire(props){
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar src={logo} className={classes.large} />
            </Grid>
            <Grid item xs>
              <Typography>{props.question.question}</Typography>
            </Grid>
          </Grid>
        </Paper>
    );
}

