import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from '../Components/Videocard'
import { getAllCategoryAPI, getAllUploadedVideosAPI, updateCategoryAPI } from '../../services/allAPI'




function View({uploadVideoResponse,setDropVideoResponse}) {
  const [deleteVideoResponse,setDeleteVideoResponse]=useState(false)

    const [allVideos,setAllVideos] = useState([])
  
    useEffect(()=>{
      getAllUploadedVideos()
      setDeleteVideoResponse(false)
    },[uploadVideoResponse,deleteVideoResponse])
  
    const getAllUploadedVideos = async ()=>{
      const result =await getAllUploadedVideosAPI()
      if(result.status===200){
        console.log(result);
        setAllVideos(result.data)
      }else{
        console.log("API Failed");
        setAllVideos([])
      }

    }
 const dragOver=(e)=>{
  e.preventDefault()
 }
 const videoDropped=async(e)=>{
  const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData("data"))
  console.log(videoId,categoryId);
  const {data}=await getAllCategoryAPI()
  const selectedCategory=data.find(item=>item.id==categoryId)
  let result=selectedCategory.allvideos.filter(video=>video.id!==videoId)
  console.log(result);
  let{id,categoryName}=selectedCategory
  let newCategory={id,categoryName,allvideos:result}
  console.log(newCategory) ;
  const res =await updateCategoryAPI(categoryId,newCategory)
  setDropVideoResponse(res)

 }

  return (
    <div >
       <Row droppable="true" onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e)}>
      {
        allVideos?.length>0?allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
      <Videocard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
      </Col>
        )):<p className='text-danger fw-bolder'>nothing</p>
      }
      
    </Row>
    </div >
  )
}

export default View