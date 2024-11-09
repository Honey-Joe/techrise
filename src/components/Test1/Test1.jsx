import React, { useState } from 'react';

function App() {
  // State to track the selected option in the first select
  const [selectedOption1, setSelectedOption1] = useState('');

  // List of options for each select
  const options1 = ['Code Crack', 'Web Maestro', 'Quiz Quest','InnovExhibit'];
  const options2 = ['Tech Link', 'Quiet Quest', 'Design Dazzle', 'Brand Blast'];

  // Map of which options in the second select should be disabled
  // based on selections in the first select (mapping to multiple options)
  const disableMap = {
    'Code Crack': ['Tech Link'],
    'Web Maestro': ['Quiet Quest'],
    'Quiz Quest': ['Design Dazzle'],
    'InnovExhibit':['Quiet Quest','Tech Link']
  };

  // Function to handle selection change in the first select
  const handleSelect1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  // State for the second select
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleSelect2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <div>
      <h3>Dropdowns with Disabled Multiple Options</h3>
      <div>
        <label>Select 1:</label>
        <select value={selectedOption1} onChange={handleSelect1Change}>
          <option value="">Select an option</option>
          {options1.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Select 2:</label>
        <select value={selectedOption2} onChange={handleSelect2Change}>
          <option value="">Select an option</option>
          {options2.map((option) => (
            <option
              key={option}
              value={option}
              disabled={
                disableMap[selectedOption1] &&
                disableMap[selectedOption1].includes(option)
              }
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default App;
