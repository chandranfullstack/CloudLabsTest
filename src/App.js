import './App.css';
import {useState} from "react"
import Popup from './Components/ui/popup';

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

  const handleSaveSegment=()=>{
    const data={
      segment_name:segmentName,
      schema:selectedSchemas?.map((s)=>({[s.value]:s.label}))
    }
  console.log(data,'data')
  }

  const handlePopup=()=>{
    setShowPopup(!showPopup)
  }

  return (
   <>
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
