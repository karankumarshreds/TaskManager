import React from 'react';
import { Container } from '@material-ui/core';
import Item from '../components/TodoList/Item';

const ListItems = () => {
  return (
    <div className="ListItems">
      <Container>
        <Item />
      </Container>
    </div>
  );
};

export default ListItems;
