import React, { Fragment } from 'react';

export const notFound = () => {
  return (
    <Fragment>
      <h1>404 NOT FOUND</h1>
      <p className='lead'>The page you are looking for does not exist</p>
    </Fragment>
  );
};

export default notFound;
