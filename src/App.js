import './App.css';
import {useState} from "react"
import Popup from './Components/ui/popup';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [showPopup,setShowPopup]=useState(false)
  const [segmentName,setSegmentName]=useState('')
  const [selectedSchemas,setSelectedSchemas]=useState([])

  const schemaOptions=[
    { label:"First Name",value:"first_name" ,type:"user"},
    { label:"Last Name",value:"last_name" ,type:"user"},
    { label:"Gender" , value: "gender",type:"user" },
    { label:"Age",value:"age" ,type:"user"},
    { label:"Account Name", value:"account_name" ,type:"group"},
    { label:"City",value:"city" ,type:"group"},
    { label:"State",value:"state",type:"group" }
  ]

  const handleAddSchema=(selectedSchema)=>{
    setSelectedSchemas([...selectedSchemas,selectedSchema])
  }

  const showToast=()=>{
    toast.success("segment added successfully",{position:"top-center"})
  }

  const handleSaveSegment=async()=>{
    const data={
      segment_name:segmentName,
      schema:selectedSchemas?.map((s)=>({[s.value]:s.label}))
    }
   try {
    await axios.post("https://webhook.site/020dfd0e-b874-4cb3-b821-56f06324c679",data,{withCredentials:false})
    .then(()=>{showToast();setShowPopup(false);setSegmentName("");setSelectedSchemas([])})
   } catch (error) {
    console.log(error)
   }
  console.log(data,'data')
  }

  const handlePopup=()=>{
    setShowPopup(!showPopup)
  }

  return (
   <>
   <ToastContainer />
   <div className=' container mx-auto bg-gray-700 bg-opacity-50 h-screen backdrop-blur-lg '>
     <div className=' flex justify-center items-center flex-row h-full'>
       <button className=' bg-transparent border border-4 border-[#FFFFFF] px-3 py-1 text-white' onClick={()=>handlePopup()}>
          Save segment
       </button>
     </div>
     {
      showPopup&&(
        <Popup 
        onClose={()=>setShowPopup(false)}
        segmentName={segmentName}
        setSegmentName={setSegmentName}
        schemaOptions={schemaOptions}
        selectedSchemas={selectedSchemas}
        setSelectedSchemas={setSelectedSchemas}
        onAddSchema={handleAddSchema}
        onSaveSegment={handleSaveSegment}
        />
      )
     }
   </div>
   </>
  );
}

export default App;
