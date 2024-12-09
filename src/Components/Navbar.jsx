import React from 'react'
import { useState } from 'react';
import Cart from './Cart'
import { Offcanvas, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    // const handleCartDesign=()=>{
    //     console.log("cart design")
    // }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div>

                <div className='flex justify-between bg-violet-50 '>
                    <div>

                        {/* <button className='border border-black flex justify-start mt-2'> 
                            <img src='img/setting.png' className='w-6 mix-blend-darken'/>
                             </button> */}
                        <div className=' mt-2'>
                            <Button variant='outline-secondary' onClick={handleShow}>
                                <img src='img/setting.png' className='w-6 mix-blend-darken ssm:w-5  sm:w-5 md:w-8 lg:8  ' />
                            </Button>

                            <Offcanvas show={show} onHide={handleClose} placement="start">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title >Setting </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, repudiandae?
                                    </div>
                                    <Dropdown className="mt-3 ">
                                        <Dropdown.Toggle variant="primary" id="dropdown-basic"  >
                                            Languages
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                    </div>
                    {/* <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            Link with href
                        </a> */}
                    {/* //     <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    //         Button with data-bs-target
                    //     </button>

                    //     <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    //         <div class="offcanvas-header">
                    //             <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    //             <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    //         </div>
                    //         <div class="offcanvas-body">
                    //             <div>
                    //                 Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    //             </div>
                    //             <div class="dropdown mt-3">
                    //                 <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    //                     Dropdown button
                    //                 </button>
                    //                 <ul class="dropdown-menu">
                    //                     <li><a class="dropdown-item" href="#">Action</a></li>
                    //                     <li><a class="dropdown-item" href="#">Another action</a></li>
                    //                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                    //                 </ul>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div> */}
                    {/* <ul>
                        <li className='font-bold text-3xl'> Logo </li>
                        </ul> */}
                    <ul className='flex gap-5 items-center px-5 py-2'>

                        <li className=' font-semibold hover:font-bold cursor-pointer text-xl'> Home </li>
                        <li className=' font-semibold hover:font-bold cursor-pointer text-xl'> About </li>
                        <li className=' font-semibold hover:font-bold cursor-pointer text-xl'> Service  </li>
                        <li className=' font-semibold hover:font-bold cursor-pointer text-xl'> Contact us </li>
                        {/* <buttonn onclick={handleCartDesign} > */}

                        {/* <li className='cursor-pointer' onClick={handleCartDesign}><lord-icon
                            src="https://cdn.lordicon.com/pbrgppbb.json"
                            trigger="hover">
                            {/* style="width:250px;height:250px" */}
                        {/* </lord-icon> </li>  */}
                        {/* </buttonn> */}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
