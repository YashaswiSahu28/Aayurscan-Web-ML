import React from 'react'
import { useRef } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Result from '../pages/Result';

  const FileUpload=()=>{
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleFileUpload=()=>{
      fileInputRef.current.click();
    };
    const handleFileChange=(event)=>{
      const file=event.target.files[0];
      
      const formData=new FormData();
      formData.append("file",file);

      // make a POST request to the File Upload API with the FormData object and Rapid API headers
      axios.post("http://192.168.121.219:3000/predict",formData,{
        headers:{
          "Content-Type":"multipart/form-data",
          // "x-rapidapi-host":"file-upload8.p.rapidapi.com",
          // "x-rapidapi-key":"your-rapidapi-key-here",
        },
      })
      .then((response)=>{
        const data = response.data.predictedData;
        //handle the response
        console.log("Response Received:",response);
        console.log('Navigating to result with data:', data);
        //navigate(<Result />);
        navigate('/result',{state: {data} });
      })
      .catch((error)=>{
        console.log("Error occurred:",error);
        const data="Error occurred. Unable to fetch predicted data.";
        console.log('Navigating to result with error data:', data);
        navigate('/result',{state: {data} });
      });
      //.finally(()=>{
      //  navigate('/result',{state: {data} });
      //});
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