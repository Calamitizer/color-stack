import React from 'react';
// import { Button } from '@material-ui/core';

interface Props {
  data: any;
  // setData: () => void;
}

const JsonView: React.FC<Props> = ({ data }) => (
  <div>
    {/* <Button onClick={setData}>Click!</Button> */}
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </div>
);

export default JsonView;
