import React from 'react';
import { Paper, FormControlLabel, Switch, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles({
  item: {
    maxWidth: 700,
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 500,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  desc: {
    fontSize: '.8rem',
  },
});

const Item = () => {
  const classes = useStyles();
  const [status, setStatus] = React.useState(false);

  return (
    <Paper className={classes.item}>
      <Container>
        <div className={classes.flex}>
          <div className={classes.title}>Title</div>
          <div style={{ fontSize: '.8rem' }}>10:00 PM</div>
        </div>
        <div className={classes.flex}>
          <p className={classes.desc}>
            Description comes here. Putting some random text for now Description comes here. Putting
            some random text for now Description comes here. Putting some random text for now
          </p>
          <div className={classes.flex}>
            <Switch
              checked={status}
              onChange={() => setStatus(!status)}
              name="checkedB"
              color="primary"
            />
            <span style={{ fontSize: '.8rem' }}>Completed</span>
          </div>
        </div>
      </Container>
    </Paper>
  );
};

export default Item;
