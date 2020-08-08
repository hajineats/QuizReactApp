import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import WholeGrid from './Components/wholegrid';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <WholeGrid />
    </div>
  );
}

export default App;
