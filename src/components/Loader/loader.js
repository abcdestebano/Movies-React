import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = ({ classes }) => <CircularProgress color="primary" className={classes.progress} />;

const styles = theme => ({
   progress: {
      display: 'block',
      margin: '10px auto'
   },
});

export default withStyles(styles)(Loader) 