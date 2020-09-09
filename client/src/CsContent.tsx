import React from 'react';
import { Container } from '@material-ui/core';
import JsonViewer from '@client/JsonViewer/Container';
import ColorDropdown from '@client/ColorDropdown/Container';

interface Props {}

const CsContent: React.FC<Props> = () => (
  <Container>
    <ColorDropdown />
    <JsonViewer />
  </Container>
);

export default CsContent;
