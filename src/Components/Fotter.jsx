import React from 'react'

const Fotter = () => {
    return (
        <div className=' bg-violet-900  grid lg:grid-cols-3 xl:grid-cols-3      rounded-md    md:grid-cols-2 sm:grid-cols-2 ssm:grid-cols-1  gap-4 p-10 mt-10 '>
            <div className='  p-4 flex flex-col items-center'>
                <p className='font-bold text-2xl text-violet-200'> India mart </p>
                <p className='font-sans text-lg text-violet-50'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid ad qui porro nam doloribus maiores commodi in vitio!ae distinct</p>
            </div>

           
            <div className=' -500 p-4 sm: items-center flex flex-col'>
                <p className='text-blue-300 font-semibold font-sans text-xl'> Quick Link </p>
                <p className='hover:cursor-pointer hover:text-violet-50'>FAQ's </p>
                <p className='hover:cursor-pointer hover:text-violet-50'>Cookies Policy </p>
                <p className='hover:cursor-pointer hover:text-violet-50'> Terms and Condition </p>
                <p className='hover:cursor-pointer hover:text-violet-50'> Customer Support  </p>
                <p className='hover:cursor-pointer hover:text-violet-50'> @Copyrights </p>
            </div>

            {/* <div className='border border-red-500 p-4      flex flex-col justify-center items-center'> */}
            <div className='  p-4 sm:flex sm:flex-col sm:justify-center  sm:items-center md:col-span-2 sm:col-span-2 lg:col-span-1 xl:col-span-1'>
                <p className='text-lg text-violet-50 m-3 font-semibold '> Subscribe To Newsletters </p>
                <form>
                    <div>

                    <input type='email' placeholder='Your email-here' className='w-48 rounded-md  h-8 p-2' />
                    </div>
                    <button className='border border-violet-50 w-48 rounded-md p-1 mt-3   font-semibold  bg-violet-200 text-violet-900 hover:bg-violet-700 hover:text-violet-50'> Subscribe </button>
                </form>
            </div>
        </div>
    )
}

export default Fotter
