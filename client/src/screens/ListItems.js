import { Container } from '@material-ui/core';
import React from 'react';

const ListItems = () => {
  return (
    <div className="ListItems">
      <Container>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
      </Container>
    </div>
  );
};

export default ListItems;
