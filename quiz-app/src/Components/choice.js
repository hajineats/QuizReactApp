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
    const handleClick = ()=>{
        setOpen(true);
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
                // style={{
                //     borderRadius: 5,
                //     backgroundColor: (props.true===1)?"blue":"crimson",
                //     fontSize: "8px"
                // }}
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
