import { useState } from "react"

function ImageUpload(){
    const [image, setImage]=useState('')

    const handleChange=(e)=>{
        console.log(e.target.files)
        setImage(e.target.files[0])
    }
    return(
        <div>
            IMAGE UPLOAD
            <input type="file" onChange={handleChange}/>
        </div>
    )
}
export default ImageUpload