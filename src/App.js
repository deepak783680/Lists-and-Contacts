import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Contact } from "./Pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "./Pages/Link";
import { Settings } from "./Pages/Settings";
import { Sharedcontact } from "./Pages/Sharedcontact";
import { Sharedlink } from "./Pages/Sharedlink";
import { Sharinglist } from "./Pages/Sharinglist";
import { Home } from "./Pages/Home";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/link" element={<Link />}></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                        <Route path="/sharedcontact" element={<Sharedcontact />}></Route>
                        <Route path="/sharedlink" element={<Sharedlink />}></Route>
                        <Route path="/sharinglist" element={<Sharinglist />}></Route>
                    </Route>
                </Routes>
            </Router>

            {/* <div className='container-fluid bg-secondary'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-6 bg-danger'>
            <h1>Hello World !</h1>
          </div>
        </div>
      </div> */}
        </>
    );
}

export default App;
