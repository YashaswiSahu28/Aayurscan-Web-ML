import React from 'react'
import { useRef } from 'react';
import axios from "axios";

  const FileUpload=()=>{
    const fileInputRef = useRef(null);
    const handleFileUpload=()=>{
      fileInputRef.current.click();
    };
    const handleFileChange=(event)=>{
      const file=event.target.files[0];
      
      const formData=new FormData();
      formData.append("files",file);

      // make a POST request to the File Upload API with the FormData object and Rapid API headers
      axios.post("https://file-upload8.p.rapidapi.com/upload",formData,{
        headers:{
          "Content-Type":"multipart/form-data",
          // "x-rapidapi-host":"file-upload8.p.rapidapi.com",
          // "x-rapidapi-key":"your-rapidapi-key-here",
        },
      })
      .then((response)=>{
        //handle the response
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      });
    };
  
    return (
      <div className='btn-container'>
        <button onClick={handleFileUpload}>Upload Image</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        
      </div>
    );
  };

export default FileUpload;