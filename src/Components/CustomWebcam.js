
import Webcam from "react-webcam";
import '../App.css';
import { useRef, useState, useCallback} from "react"; 

const CustomWebcam = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null); 

  // create a capture function
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = (() => {
    setImgSrc(null);
  });

  const upload = ((async) => {
    alert("Image uploaded Successfully!!")
    setImgSrc(null);
  });

  // console.log(imgSrc);
 return (
    <div className="container scanner-container">
      {imgSrc ? (
        <div className="capture w-100 m-0">
          <img src={imgSrc} alt="webcam" />
          <div className="btn-container">
              <button onClick={retake}>Retake photo</button>
              <button onClick={upload}>Upload photo</button>
          </div>  
        </div>
      ) : (
        <div className="capture w-100 m-0">
          <div className="qr" style={{ position: 'relative' }}>
            <Webcam height={'auto'} width={'100%'} ref={webcamRef} />
            <div className="qr-img" style={{ position: 'absolute', top: -60, left: 0, width: '100%' }}>
              <img src={require(`../assets/scanner.png`)} style={{ width: '100%' }} />
            </div>
          </div>
          <div className="btn-container">
            <button onClick={capture}>Capture photo</button>
          </div>        
        </div>
        
      )}
      
    </div>
  );
};

export default CustomWebcam;