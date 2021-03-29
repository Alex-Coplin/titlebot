import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const ListContainer = (props) => {
  return (
    <ListGroup>
      {props.urls.map((url, index) => {
        return (
          <>
            <ListGroup.Item variant="dark">
              URL: {url}
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              Page Title: {props.titles[index]}
            </ListGroup.Item>
          </>
        );
      })}
    </ListGroup>
  );
};

export default ListContainer;
