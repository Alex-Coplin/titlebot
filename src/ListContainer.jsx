import React from 'react';

const ListContainer = (props) => {
  return (
    <div>
      {props.urls.map((url, index) => {
        return (
          <div>
            <div>
              URL: {url}
            </div>
            <div>
              Page Title: {props.titles[index]}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListContainer;