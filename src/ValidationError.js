import React from 'react';

export default function ValidationError(props) {
	console.log('props fromvalidation',props)
  if(props.message) {
    return (
      <div className="error">{props.message}</div>
    );
  }

  return <></>
}