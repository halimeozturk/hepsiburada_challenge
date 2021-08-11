import React from "react";

function Modal(props) {
  if ( props.isOpen === false)
  return null

  const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '9999',
  background: '#fff',
  border: '1px solid gray',
  boxShadow: '4px 4px 25px 1px #888888',
  borderRadius: '2px'
}

const modalHeaderStyle = {
  width: '100%',
  height: 40,
  background: 'black',
  position: 'absolute',
  borderBottom: '1px solid black',
  top: 0,
  cursor: 'move',
  color: 'white',
  display: 'flex',
  alignItems: 'center'
}

const modalFooterStyle = {
  width: '100%',
  height: 40,
  position: 'absolute',
  bottom: 0,
  textAlign: 'right'
}


if (props.width && props.height) {
  modalStyle.width =  props.width + 'px';
  modalStyle.height =  props.height + 'px';
  modalStyle.marginLeft = '-' + ( props.width/2) + 'px';
  modalStyle.marginTop = '-' + ( props.height/2) + 'px';
  modalStyle.transform = null;
}

if (props.style) {
  for (let key in  props.style) {
    modalStyle[key] =  props.style[key]
  }
}

let backdropStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  zIndex: '9998',
  background: 'rgba(0, 0, 0, 0.3)'
}

if ( props.backdropStyle) {
  for (let key in  props.backdropStyle) {
    backdropStyle[key] =  props.backdropStyle[key]
  }
}

const close =(e)=>{
  e.preventDefault()

  if ( props.onClose) {
    props.onClose()
  }
}

return (
  <div id="modal" className={ props.containerClassName}>
    <div className={ props.className} style={modalStyle}>
      <div className="modalHeader" style={modalHeaderStyle}>
        <div className="text-link">Remove Link</div>
        <a onClick={(e) => close(e)}  className="close-thin" href="#"></a>
      </div>
      <div className="modalBody" >
        <h2> Do you want to remove:</h2>
        <h1>{ props.deleteItemTemp.name}</h1>
      </div>
      <div className="modalFooter" style={modalFooterStyle}>
         <a onClick={(e) => close(e)} className='mm-close' href="/">Close</a>
         <a className='mm-ok' onClick={(e) => props.deleteItem(props.deleteItemTemp)} href="#">OK</a>
      </div>
    </div>
    {! props.noBackdrop &&
        <div className={ props.backdropClassName} style={backdropStyle}
             onClick={e =>  close(e)}/>}
  </div>
)
}








export default Modal;
