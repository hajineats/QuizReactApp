import React from 'react';
import { Grid } from '@material-ui/core';
import Choice from './choice';

export default function ChoiceSet(){
    return (
      <Grid container justify="center" spacing={2}>
        <Grid item>
          <Grid container justify="center">
            {[0,1,2,3].map((value)=>
              <Grid key={value} item xs={6}>
                <Choice />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    );
}