import './App.css';
import Header from './components/Header';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Assembly from './pages/Assembly';
import Job from './components/Job';


function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <Col sm={12} md={6} lg={1} >
          <Sidebar />
        </Col>
        <Col sm={12} md={6} lg={4} >
          <Assembly />
        </Col>
        <Col sm={12} md={6} lg={7} >
          <Job />
        </Col>
      </Row>
    </div>
  );
}

export default App;