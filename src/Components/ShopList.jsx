import React, { useEffect, useState } from 'react'
import Shopping from './Shopping';
import Cart from './Cart';





const ShopList = ({id,product,shop,AddtoCart, cart,backToCart,setbackToCart,handleremove,removeitem,setremoveitem}) => {
    const {title,review,img,price}=product;
    
    const [addcart, setaddcart]= useState(false)
// setremoveItem(false)
const isItemInCart = cart.some((item) => item.id === id);
  
console.log(removeitem)

// removeItem=(!removeItem)
// if(backToCart==true)
// {
//     console.log("item removed")
//     // setaddcart(!addcart)
//     // setbackToCart(false)
// }
// else{
//     console.log("not removed")
// }


 

// console.log(removeItem)
    // const addItem =()=>{
    //     // console.log("cart added")
    //     //setcart[cart,product ]
    //     AddtoCart(product)
    //     console.log(product)
         
    //     console.log(addcart)
    //     setaddcart(!addcart)
     
        
    //     // removeItem=(!removeItem)
       
    //     }
        
   

    
    // const [isDisabled, setisDisabled]=useState(true)
    // console.log(!removeItem)
    // removeItem=!removeItem
    
    //     if(removeItem===true)
    //     {
    //         console.log("remove else")
    
    //     }
    //     else{
        // setaddcart(false)
        //     }
        // const removeItemHandler =()=>{
            //     handleremove(id);
            // }
            
            // useEffect (()=>{
                //   setisDisabled(!isDisabled)
                // },[addcart]);
                
                // removeItem=()=>{
                    //     removeItem("removed item is",product.id)
                    //     setaddcart(true)
                    //     // setaddcart(true)
                    // }
                    
                    
                    
                    return (
                        <>
            <div>
                {/* <div className={`flex   flex-col ${shop}`}> */}
                <div id={id} className= {`flex    sm:flex-row md:flex-col lg:flex-col  ssm:flex-row    flex-col ${shop ? ' ': 'hidden'} `}>
                     <img className='md:w-1/2 lg:w-3/4 ssm:w-1/2 sm:w-1/2 container md:border   h-48  relative m-2 items-center shadow-xl shadow-violet-700/80  rounded-tr-3xl rounded-bl-3xl  ' src={img} />
                     <div className='  '>

                    <p className=' px-2 font-bold text-xl '> {title }</p>
                    <p className=' px-3 py-1 font-semibold text-xl  rounded-lg shadow-lg '> Review-{review}</p>
                    <p className='px-3 font-semibold text-2xl'> Rs.{price}</p>
                    
                    {/* <button className= {`self-start px-3 border border-violet-400 bg-violet-300 rounded-lg font-semibold text-lg h-10  `}  onClick={addItem}  >
                                    
                          { addcart? <div className='border border-red-500'> hello </div>  : "Add to Cart" }  
                           </button> */}


<button className='border border-violet-400 rounded-lg text-lg px-3 py-1 bg-violet-300 font-semibold '   onClick={() => AddtoCart(product)} disabled={ isItemInCart}>
        {isItemInCart ? ' Added'  : 'Add to Cart'}
      </button>


                           {/* <Shopping addcart={addcart}/> */}


                          {/* {addcart && (
          <button onClick={removeItem} className="self-start px-3 border border-red-500 bg-red-300 rounded-lg font-semibold text-lg h-10 mt-2">
            Remove from Cart
          </button>
          )} */}
                     </div>
                </div>
 
            </div>
        </>
    )

}


export default ShopList
