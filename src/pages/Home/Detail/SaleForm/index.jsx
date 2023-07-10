import React, { useState } from 'react';

export const SaleForm = ({ submit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDownload = () => {
    // Logic for downloading the input value
    console.log(`Downloading: ${inputValue}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(event);
    // Logic for submitting the form
    console.log(`Submitting: ${inputValue}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};
