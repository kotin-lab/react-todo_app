import React, { createRef } from 'react';
import { InputBase, Paper, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  new: {
    padding: 35,
    background: '#efefef',
  },
  add: { display: 'flex' },
  input: { marginleft: 20, flex: 1}
}

const Add = props => {
  const subject = createRef();

  return (
    <div styel={styles.new}>
      <Paper component="form" style={styles.add}>
        <InputBase placeholder="New Task" style={styles.input} inputRef={subject} />
        <IconButton type="submit" aria-label="search">
          <IconButton />
        </IconButton>
      </Paper>
    </div>
  );
}

export default Add;
