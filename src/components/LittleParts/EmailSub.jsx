import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Typography } from '@material-ui/core';
import { lightGreen } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    justifyContent:"center",
    alignItems: 'center',
    maxWidth: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: lightGreen[900]
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  icons: {
      color: lightGreen[900], fontSize: 40
  }
}));
const EmailSub = props =>{
    const classes = useStyles();
    return <div >
        <Typography gutterBottom variant="h5" component="h2"  className={classes.icons}>
                Email Abonemiz Olun
        </Typography>
        <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <MailOutlineIcon style={{color: lightGreen[900]}} />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="örnekmail@camalti.com"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
    </div>
}

export default EmailSub