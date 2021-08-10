import React, {useEffect, useState } from "react";
import leftArrow from "../styles/img/left-arrow.png";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast, Slide } from 'react-toastify';

function CreateLink() {

  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  let loadFromLocalStorage = JSON.parse(localStorage.getItem('linkList')) || [];
  const [validateName,setValidateName] = useState(false);
  const [validateUrl,setValidateUrl] = useState(false);


  const notify = () => {

    toast.success(name + ' added.', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const createItem = () => {
    let newItem = {
      "id": uuidv4(),
      "name": name,
      "url": url,
      "vote": 0,
      "createdDate": Date.now(),
      "voteDate": null
    }
    if(name  && url){
      loadFromLocalStorage.unshift(newItem);
      localStorage.setItem("linkList", JSON.stringify(loadFromLocalStorage));
      notify();
    }else{
      if(!name) setValidateName(true);
      if(!url)  setValidateUrl(true);
    }
    return newItem;
  }


  const changeName = (value) =>{
    if(value) {
      setValidateName(false);
    }
    setName(value);
  }

  const changeUrl = (value) =>{
    if(value) {
      setValidateUrl(false);
    }
    setUrl(value);

  }

  
  return (
    <div className="m-10 flex justify-center justify-items-center	">
      <div className="w-1/5	m-auto">
        <div className="font-medium "><a href="/"><img alt="" className="inline-block m-2" src={leftArrow} />Return to List</a></div>
        <div>
          <h2 className="text-2xl mt-5 font-bold">Add New Link</h2>
          <div className="mt-5">
            <label className="link-name-label -bottom-px mb-5">
              Link Name:
            </label>
            <input type="text" id="name" placeholder="e.g. Alphabet" name="linkname" value={name} onChange={e => changeName(e.target.value)} className="link-name w-full border rounded h-10" />
            {validateName ? <label id="name-error">This field is required.</label> : ''}
          </div>
          <div className="mt-5">
            <label>
              Link URL:
            </label>
            <input type="text" id="url" placeholder="e.g. http://abc.xyz"  name="link-url" value={url} onChange={e => changeUrl(e.target.value)} className="link-url w-full border rounded h-10" />
            {validateUrl ?  <label id="url-error">This field is required.</label> : ''}
          </div>
          <div className="flex justify-end mt-5">
            <button className="create-button w-32 h-10 border-black-600 bg-black items-center	rounded-3xl text-white	" type="submit" onClick={() => createItem()}>Add</button>
          </div>
        </div>
      </div>
      <div>
      <ToastContainer
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        />
      </div>
    </div>
  )
}

export default CreateLink;
