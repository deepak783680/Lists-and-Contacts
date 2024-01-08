import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  return (

    <Container>
        <Row>
            <Col>
            <ul className='dp_navbar_items'>

            {/* <Route path="/contact" element={<Contact />}></Route>
                        <Route path="/link" element={<Link />}></Route>
                        <Route path="/settings" element={<Settings />}></Route>
                        <Route path="/sharedcontact" element={<Sharedcontact />}></Route>
                        <Route path="/sharedlink" element={<Sharedlink />}></Route>
                        <Route path="/sharinglist" element={<Sharinglist />}></Route> */}

                        <li>
                            <Link to="/contact">
                                <span>CONTACT</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/settings">
                                <span>settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sharedcontact">
                                <span>sharedcontact</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/link">
                                <span>link</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sharedlink">
                                <span>sharedlink</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/sharinglist">
                                <span>sharinglist</span>
                            </Link>
                        </li>
                        

                       
                    </ul>
            </Col>
        </Row>
    </Container>


    // <div className='container-fluid ' style={{ backgroundColor: "lightgreen" }}>
    //         <div className='row ' style={{ height: "100vh" }}>
    //             <div className='col-md-12'>
    //                 <ul className='dp_navbar_items'>
    //                     <li>
    //                         <Link to="/a">
    //                             <span className='fs-4 pe-5'><AiOutlineHome /></span>
    //                             <span>Page - A</span>
    //                         </Link>
    //                     </li>
    //                     <li><Link to="/b">Page - B</Link></li>
    //                     <li><Link to="/c">Page - C</Link></li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
  )
}
