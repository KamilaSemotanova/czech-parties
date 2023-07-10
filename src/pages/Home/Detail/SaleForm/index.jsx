import React, { useState } from 'react';
import { SaveAccount } from '../../../../functions/db';
import { supabase } from '../../../../functions/supabase';

export const SaleForm = ({ submit, discountUrl }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDownload = () => {
    fetch(discountUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'czechparties.jpg';

        downloadLink.click();
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    SaveAccount(inputValue);
    setInputValue('');
    submit(event);
    // console.log(event);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
