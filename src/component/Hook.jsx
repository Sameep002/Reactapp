import React,{ useState } from 'react'

const Hook = () => {

//     const [data ,setdata] = useState(
//         {
//             name:" ",
//             mail:" ",
//             city:" ",
//             state:" ",
//         }
//     )
//     let key,value;
//     const change = (e) =>{
//         e.preventDefault();
//         key = e.target.name;
//         value = e.target.value;
//         setdata({
//             ...data,
//             [key]:value,
//         })
//         console.log(e);
//     }

// return(
//     <div>
//         <>
//             <form action="#.php" className='flex flex-col mx-auto my-10 w-1/4'>
//                 <input className='text-white bg-purple-700 m-2 p-1' type="text" placeholder='Enter name' name='name' value={data.name} onChange={change}/>
//                 <input className='text-white bg-purple-700 m-2 p-1' type="text" placeholder='Enter mail' name='mail' value={data.mail} onChange={change}/>
//                 <input className='text-white bg-purple-700 m-2 p-1' type="text" placeholder='Enter city' name='city' value={data.city} onChange={change}/>
//                 <input className='text-white bg-purple-700 m-2 p-1' type="text" placeholder='Enter state' name='state' value={data.state} onChange={change}/>
//                 <input type="button" value="" />
//             </form>
//             <div className='flex flex-col mx-auto my-10 w-1/4 bg-purple-700 m-2 p-1 text-center'>
//                 <div>{data.name}</div>
//                 <div>{data.mail}</div>
//                 <div>{data.city}</div>
//                 <div>{data.state}</div>
//             </div>
//         </>
//     </div>
// )

    let [count , setcount] = useState(0);

    const click = () =>{
        setcount(++count);
    }

  return (
    <>
       <div>{count}</div>
       <button className='bg-slate-600' onClick={click}>increment</button>
    </>
  )
}

export default Hook