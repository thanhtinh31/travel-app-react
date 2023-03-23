import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function UpLoad() {
    
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [list,setList] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      setImage(e.target.files[0]);
      console.log(image);
    }
  };

  const handleMultifile =(e)=>{  
    console.log(e.target.files);
      setList(e.target.files);
      console.log(list);
  }

  const handleSubmitMulti = () => {
    const imageRef = ref(storage, "images/"+image.name);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            console.log(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  const handleSubmit = () => {
    const imageRef = ref(storage, "images/"+image.name);
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
            console.log(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="App">
      <img src={url} sx={{ width: 150, height: 150 }} />
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Submit</button>
      <br/>
      <input type="file" onChange={handleMultifile} multiple />
      <button onClick={handleSubmitMulti}>Submit</button>
    </div>
  );
}

export default UpLoad