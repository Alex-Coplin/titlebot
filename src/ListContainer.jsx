import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ListContainer = (props) => {
  return (
    <ListGroup>
      {props.urls.map((url, index) => {
        return (
          <ListGroup >
            <ListGroup.Item variant="secondary">
              URL: {url}
            </ListGroup.Item>
            <ListGroup.Item variant="">
              Page Title: {props.titles[index]}
            </ListGroup.Item>
          </ListGroup>
        );
      })}
    </ListGroup>
  );
};

export default ListContainer;
