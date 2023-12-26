// src/Popup.js
import React, { useState } from 'react';

const  Popup=({ onClose, segmentName, setSegmentName, schemaOptions, selectedSchemas, onAddSchema, onSaveSegment }) =>{
  const [newSchema, setNewSchema] = useState('');

  const handleAddNewSchema = () => {
    if (newSchema && !selectedSchemas.some((schema) => schema.value === newSchema)) {
      onAddSchema(schemaOptions.find((schema) => schema.value === newSchema));
      setNewSchema('');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Segment Name:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={segmentName}
            onChange={(e) => setSegmentName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Add Schema to Segment:</label>
          <select
            className="border p-2 w-full"
            value={newSchema}
            onChange={(e) => setNewSchema(e.target.value)}
          >
            <option value="" disabled>
              Select an option
            </option>
            {schemaOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 mb-4" onClick={handleAddNewSchema}>
          + Add New Schema
        </button>
        {selectedSchemas.map((schema) => (
          <div key={schema.value} className="mb-2">
            {schema.label}
          </div>
        ))}
        <button className="bg-green-500 text-white px-4 py-2" onClick={onSaveSegment}>
          Save Segment
        </button>
        <button className="ml-2 text-gray-700" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Popup;
