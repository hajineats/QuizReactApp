import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    choice: {
      margin: `10px auto`,
      padding: '5px',
      display: 'flex',
      justifyContent: 'center',
    }
}));

function Choice(props){
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [anyButtonClicked, setAnyButtonClicked] = useState(false);
    const handleClick = ()=>{
        setOpen(true);
        setAnyButtonClicked(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    return (
        <Grid item xs={6} className={classes.choice}>
            <Button 
                onClick={handleClick}
                variant="contained"
                style={{
                    borderRadius: 5,
                    backgroundColor: (anyButtonClicked)?((props.true===1)?"blue":"crimson"):"white",
                    // (props.true===1 && anyButtonClicked)?"blue":"crimson",
                    fontSize: "8px",
                    textTransform: 'none',
                    width:"80%"
                }}
            >{props.option}</Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                message={(props.true===1)?"You are correct!":"nah"}
                action={
                    <React.Fragment>
                      <button>hello</button>
                      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                }
                />

        </Grid>
    );
}
export default Choice;
