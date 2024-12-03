import React, { useEffect, useState } from 'react'
import Shoppingg from './Shopping'
import ShopList from './ShopList'

const Cart = ({ setquantity, quantity, handleremove, cartitem = [] }) => {
  // console.log(`caaaa ${cartitem}`)

  //  const total = cartitem.reduce((sum, item) => {
  //     return sum + parseFloat(item.price);

  //   }, 0)




 const [displayCart, setdisplayCart]=useState(false)
  const [total, settotal] = useState(0);
  // const [removeItem, setremoveItem]=useState({})
  // const [cart, setcart]=useState(cartitem)



  useEffect(() => {
    let newtotal = 0;
    cartitem.forEach(item => {
      const itemQuntity = quantity[item.id] || 1;
      newtotal = newtotal + parseFloat(item.price) * itemQuntity;
    });
    settotal(newtotal);

  }, [cartitem, quantity])



  const handleplus = (item) => {





    setquantity(
      (quantity) => {
        const currentQuantity = quantity[item.id] || 1;
        return {
          ...quantity,
          [item.id]: currentQuantity + 1,

        }
      });


  };
  const handleminus = (item) => {
    setquantity(
      (quantity) => {
        const currentQuantity = quantity[item.id] || 1;
        if (currentQuantity > 0) {
          return {
            ...quantity,
            [item.id]: currentQuantity - 1,
          }
        }

        else {
          return quantity;

        }

      });
  }
  //  console.log(removeItem)
  //  removeItem=(!removeItem)
  //  console.log("manual",removeItem)



  // const handleremove =(itemid)=>{
  // setcart(prevCart => [...prevCart, {[itemid]: cartitem[itemid] } ]);
  //   console.log(cartitem.id);
  //   console.log("itemid",itemid)
  //   const productid=cartitem.map(product=>product.id)
  //   console.log("product id",productid)


  //   setremoveItem(
  // (prevRemove)=>({
  //   ...prevRemove,
  //   [itemid]:true,
  // }))

  // setcart((prevcart)=>prevcart.filter((item)=>item.id!==itemid))


  // setTimeout(() => {
  //   alert(`item removed`)
  // }, 2000);

  // for(let  i=0; i<productid.length; i++)
  // {

  // if(itemid==productid[i])
  //   {
  //     alert("item remove")
  //   }
  //   else{
  //     console.log("not remover")
  //   }
  // }      


  // else{
  // console.log("not matched",productid);
  // setcart(productid[i])
  // const updatecart = cartitem.filter(item=>item.id === itemid)
  //  productid=productid.length-1;
  //  setcart(updatecart)
  // setquantity((prevQuantity)=>{
  // const newQuantity ={...prevQuantity};
  // delete newQuantity[itemid];
  // return newQuantity;
  // });
  // setquantity(
  //   (quantity)=>{
  //   const currentQuantity = quantity[itemid] || 1;
  //   return{
  //     ...quantity,
  //     [itemid]: currentQuantity-(currentQuantity),

  //    }
  // });
  // console.log("updated cart after loop",updatecart)
  // }
  // }

  // };










  // const [cart, setcart]=useState(cartitem)


  //    console.log("after declare",cart);
  //   const handleremove =(itemid)=>{
  //  setTimeout((cart={cartitem}) => {
  //   console.log("cart in time",cart)
  //  }, 2000);


  //  setcart( prevcart=>{(item=> item.id != itemid);
  //     });

  //     setquantity(prevQuantity =>{
  //       const newQuantity ={ ...prevQuantity};
  //       delete newQuantity[itemid];
  //       return newQuantity;
  //     });

  // console.log("itemid",itemid);
  // };
  // console.log("new cart",cart);

  // useEffect (()=>{
  //   console.log("updated cart",cart);
  // },[cart]);

  const handleCartDesign = () => {
    console.log("enter in cart")
    setdisplayCart(!displayCart)
  }


  return (
    <>

      <ul  className='fixed top-2 right-2 max-h-[80vh] overflow-y-auto '>
        <li className='cursor-pointer' onClick={handleCartDesign}><lord-icon
          src="https://cdn.lordicon.com/pbrgppbb.json"
          trigger="hover">
         </lord-icon> </li>
      </ul>

      <div className={`fixed top-12 right-1 max-h-[80vh] overflow-y-auto  border border-violet-400 w-1/2  bg-violet-300  rounded-xl ${ displayCart? 'block': "hidden" }`}>
        <div className='flex   justify-center '>

          {/* <div className=' border border-violet-300 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  '> */}
          <div className='  grid lg:grid-cols-2 xl:grid-cols-3      rounded-lg  shadow-2xl  md:grid-cols-2 sm:grid-cols-1  '>

            {cartitem.map((item) => (
              <div key={item.id}  >
                {/* <div className='border border-black justify-center flex flex-col items-center' > */}
                <img className='w-3/4 h-44  m-2 items-center shadow-xl shadow-violet-700/80  rounded-tr-3xl rounded-bl-3xl ' src={item.img} />
                <p className=' px-2 font-bold text-lg ml-1'>{item.title}</p>
                <p className='px-3 font-semibold text-xl'>Rs.{item.price}</p>
                <div className=' flex items-center   ml-3 '  >
                  <button className='border border-violet-700 font-bold w-8 rounded-l-md' onClick={() => handleminus(item)}>  - </button>
                  <p className='border border-violet-700 px-2 w-8 ' > {quantity[item.id] || 1} </p>
                  <button className='border border-violet-700 font-bold w-8 rounded-r-md' onClick={() => handleplus(item)}>  + </button>
                </div>
                {/* </div> */}
                {/* <button className=''  onClick={()=>handleremove(item.id)}> {removeItem[item.id] ? "Removed ": "Remove"}  </button>  */}
                <button className=' border border-violet-500 rounded-xl py-1 px-4 my-1 text-lg font-semibold ml-3 ' onClick={() => handleremove(item.id)}> Remove  </button>
                {/* <button onClick={()=>handleremove(item.id)} > Remove     </button>
                {/* <button onClick={()=>handleremove(item.id)} disabled={removeItem[item.id]}  > {removeItem[item.id] ? "Removed ": "Remove"}    </button> */}
              </div>


            ))}
          </div>

        </div>
        <div className='flex justify-center'>
          <p className='font-semibold cursor-not-allowed '> ⚠Please press Cart again to close the Window  </p>

        </div>
        <div className=' border border-violet-400 rounded-lg cursor-pointer  self-center p-3 bg-gradient-to-b from-violet-500 to-violet-200 text-md font-semibold   text-center'>
          <p className={`' font-bold font-sans text-lg'${total==0? "hidden": "block"}`}> Total: Rs.{total}</p>
        </div>
        {/* <button onClick={handler}> removeeeee </button> */}
      </div>

    </>
  )
}

export default Cart




// import React from 'react';

// const Cart = ({ cartitem = [] }) => {
//   console.log(`caaaa ${cartitem}`);
//   const total = cartitem.reduce((sum, item) => {
//     return sum + parseFloat(item.price);
//   }, 0);

//   return (
//     <>
//       <div className='fixed top-12 right-1 max-h-[80vh] overflow-y-auto border border-violet-300 w-1/2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 bg-violet-400 rounded-xl'>
//         <div className="flex flex-col justify-between h-full">
//           <div className="flex-1">
//             {cartitem.map((item) => (
//               <div key={item.id}>
//                 <img
//                   className='w-3/4 h-auto m-2 items-center shadow-xl shadow-violet-700/80 rounded-tr-3xl rounded-bl-3xl'
//                   src={item.img}
//                   alt={item.title}
//                 />
//                 <p className='px-2 font-bold text-xl'>{item.title}</p>
//                 <p className='px-3 font-semibold text-2xl'> Rs.{item.price}</p>
//               </div>
//             ))}
//           </div>

//           {/* Total Section */}
//           <div className="text-center py-4 border-t border-black">
//             <p className='text-2xl font-semibold'>Total: Rs.{total}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;
