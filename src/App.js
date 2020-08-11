import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu/Menu';
import FileBrowser from './components/FileBrowser/FileBrowser';
import FilesOpen from './components/FilesOpen/FilesOpen';
import TextBox from './components/TextBox/TextBox';

function App() {


  return (
    <Container fluid className="px-0">
      <Row style={{paddingTop: '0rem'}}>
        <Col xs={1} className="pr-0">
          <Menu/>
        </Col>
        <Col xs={11} className="pl-0">
          <FilesOpen/>
          <TextBox/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
