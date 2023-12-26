import { useState } from 'react';

const  Popup=({ onClose,segmentName,setSegmentName,schemaOptions,selectedSchemas,onAddSchema,onSaveSegment }) =>{
  const [newSchema,setNewSchema]=useState('');

  const handleAddNewSchema=()=>{
    if(newSchema&&!selectedSchemas.some((s)=>s.value===newSchema)){
        onAddSchema(schemaOptions.find((s)=>s.value===newSchema))
        setNewSchema('')
    }
  };

  return (
    <>
    <div className=' fixed right-0 top-0 z-[50]  h-full flex'>
     <div className=' bg-white p-8'>
       <div className=' mb-4'>
        <label className=' inline-flex mb-4'>Enter the Name of the Segment</label>
        <input 
        type="text" 
        placeholder='Name of the segment'
        className=" w-full p-2 border border-gray-500 rounded focus:outline-none" 
        value={segmentName} 
        onChange={(e)=>setSegmentName(e?.target?.value)}
        />
        <p className=' w-[80%] mt-4'>
          To save your segment, you need to add the schemas to build the query
        </p> 
       </div>

       <div className=' my-4 flex justify-end'>
         <div className=' flex justify-between gap-4'>
           <p className=' flex items-center gap-1'><span className=' inline-flex items-center rounded-full bg-green-500 w-4 h-4'></span> - User Traits</p>
           <p className=' flex items-center gap-1'><span className=' inline-flex items-center rounded-full w-4 h-4 bg-pink-500'></span> - Group Traits</p>
         </div>
       </div>

       <div className=' my-2'>
         {
          selectedSchemas?.map((i)=>(
            <>
          <div className=' flex items-center gap-4 my-2 '>
          <span className={`inline-flex w-4 h-4 ${i?.type==="user"?" bg-green-500":"bg-pink-500"} rounded-full`}></span>
          <div className="relative inline-block text-left">
          <select className="block  w-[400px] appearance-none  bg-white border border-gray-500 py-2 px-4 pr-8 rounded leading-tight focus:outline-none">
              <option key={i.value} value={i.value}>
                {i.label}
              </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4z"/></svg>
          </div>
          </div>
          <div>
            <button className=' p-4 bg-blue-200'>
              <span className='flex w-6 h-1 rounded-md bg-gray-600'></span>
            </button>
          </div>
         </div>
            </>
          ))
         }
       </div>
       <div className='my-2 '>
         <div className=' flex items-center gap-4 '>
          <span className=' inline-flex w-4 h-4 bg-gray-300 rounded-full'></span>
          <div className="relative inline-block text-left">
          <select 
           value={newSchema}
           onChange={(e) => setNewSchema(e.target.value)}
          className="block  w-[400px] appearance-none  bg-white border border-gray-500 py-2 px-4 pr-8 rounded leading-tight focus:outline-none">
          <option value="" >
          Add schema to segment            
          </option>
            {schemaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-8-8 1.5-1.5L10 9l6.5-6.5L18 4z"/></svg>
          </div>
          </div>
          <div>
            <button className=' p-4 bg-blue-200'>
              <span className='flex w-6 h-1 rounded-md bg-gray-600'></span>
            </button>
          </div>
         </div>
       </div>
       
       <div className=' ml-[30px] mt-4'>
        <button  onClick={()=>handleAddNewSchema()} className=' bg-transparen text-[#009F7F]'>+ <span className=' underline'>Add New Schema</span></button>
       </div>
       <div className=' bottom-0 absolute'>
        <div className=' flex gap-4 p-5'>
          <button onClick={onSaveSegment} className=' bg-[#009F7F] text-white p-2 rounded'>Save the Segment</button>
          <button onClick={onClose} className=' bg-gray-100 text-pink-500 p-2 rounded'>Cancel</button>
        </div>
       </div>
     </div>
    </div>
    </>

  );
}

export default Popup;
