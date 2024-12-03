import React from 'react'
import Cart from './Cart'

const Navbar = () => {
    // const handleCartDesign=()=>{
    //     console.log("cart design")
    // }
    return (
        <>
            <div>

                <div className='flex justify-between mr-8 bg-violet-50 '>
                    <div>

                        <button className='border border-black flex justify-start mt-2'> 
                            <img src='img/setting.png' className='w-6 mix-blend-darken'/>
                             </button>
                    </div>
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
