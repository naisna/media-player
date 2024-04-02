import React, { useState } from 'react'

import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { addVideoHistoryAPI, deleteVideoAPI } from '../../services/allAPI';





function Videocard({video,setDeleteVideoResponse,insideCategory}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow =async () => {
    setShow(true);
    const{caption,link}=video 
    let today=new Date()
    let timeStamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    //console.log(timeStamp)
    let videoHistory={caption,link,timeStamp}
  
  await addVideoHistoryAPI(videoHistory)
}
  const removeVideo =async(id)=>{
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }
  
  const dragStarted = (e,id)=>{
    console.log("Drag Started... Video Id:"+id);
    e.dataTransfer.setData("VideoId",id)
  }
  
    return (
    < > <Card style={{ width: '17rem', margin:'10px' }} draggable onDragStart={e=>dragStarted(e,video?.id)} >
    <Card.Img height={'200px'} variant="top"onClick={handleShow} src={video?.url}/>
    <Card.Body>
      <Card.Title className='d-flex justify-content-between align-items-center'>
      <h5>{video?.caption}</h5>
      {insideCategory?null:<button onClick={()=>removeVideo(video?.id)} className='btn' variant=""><i class="fa-solid fa-trash "></i></button>}
      </Card.Title>
    </Card.Body>
  </Card>
  
  <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="418" src={`${video?.link}?autoplay=1`} title="JAILER - Kaavaalaa Video Song | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson | Tamannaah" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
        </Modal.Body>
       
      </Modal>
  
  </>
  )
}

export default Videocard