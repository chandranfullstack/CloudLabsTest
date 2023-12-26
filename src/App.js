import './App.css';
import {useState} from "react"
import Popup from './Components/ui/popup';

function App() {
  const [showPopup,setShowPopup]=useState(false)
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);

  const schemaOptions = [
    { label: 'First Name', value: 'first_name' },
    { label: 'Last Name', value: 'last_name' },
    { label: 'Gender', value: 'gender' },
    { label: 'Age', value: 'age' },
    { label: 'Account Name', value: 'account_name' },
    { label: 'City', value: 'city' },
    { label: 'State', value: 'state' },
  ];

  const handleAddSchema = (selectedSchema) => {
    setSelectedSchemas([...selectedSchemas, selectedSchema]);
  };

  const handleSaveSegment = () => {
    // Send data to the server here
    const data = {
      segment_name: segmentName,
      schema: selectedSchemas.map((schema) => ({ [schema.value]: schema.label })),
    };
    console.log('Sending data to server:', data);
  };
  const handlePopup=()=>{
    setShowPopup(true)
  }
  return (
   <>
   <div className=' container mx-auto bg-gray-400 h-screen backdrop-blur-lg '>
     <div className=' flex justify-center items-center flex-row h-full'>
       <button className=' bg-transparent border border-4 border-[#FFFFFF] px-3 py-1 text-white' onClick={()=>handlePopup()}>
          Save segment
       </button>
     </div>
     {
      showPopup&&(
        <Popup 
        onClose={() => setShowPopup(false)}
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
