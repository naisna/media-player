import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getAllCategoryAPI, updateCategoryAPI } from '../../services/allAPI';
import Videocard from './Videocard';

function Category({dropVideoResponse}) {
  const[allCategories,setAllCategories]=useState([])
  const[categoryName,setcategoryName]=useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAdd=async()=>{
    if(categoryName){
      const result=await addCategoryAPI({categoryName,allvideos:[]})
      if(result.status>=200 && result.status<300){
        handleClose()
        setcategoryName("")
      }else{
        alert(result.message)
      }
    }
    else{
        alert("please fill the category field")
      }
    }
    useEffect(()=>{
      getCategories()
    },[dropVideoResponse])

     const getCategories=async()=>{
        const {data}=await getAllCategoryAPI()
        setAllCategories(data)
      }
      const removeCategory=async(id)=>{
        await deleteCategoryAPI(id)
        getCategories()
      }
      const dragOver=(e)=>{
        console.log("video card dragged over the category");
        e.preventDefault()
      }
    
      const videoDrop=async (e,categoryId)=>{
        const videoId=e.dataTransfer.getData("VideoId")
        console.log("Video Id:"+videoId, "dropped inside category:"+categoryId);
        const {data}=await getAVideoAPI(videoId)
        // console.log(data);
        const selectedCategory=allCategories.find(item=>item.id===categoryId)
        selectedCategory.allvideos.push(data)
        console.log(selectedCategory);
        await updateCategoryAPI(categoryId,selectedCategory)
        getCategories()
      }
      // console.log(allCategories);
      
      const videoDragStarted=(e,videoId,categoryId)=>{
        let datashare={videoId,categoryId}
        e.dataTransfer.setData("data",JSON.stringify(datashare))
      }
  
  return (
    <div>
    <div className='d-grid'>
      <button onClick={handleShow} className='btn bg-warning text-light' >Add Category</button>
      </div>
      {allCategories?.length>0?allCategories.map(category=>(
      <div className="border rounded p-3 mt-2" droppable="true" onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,category?.id)}>
      <div className="d-flex justify-content-between align-items-center">
        <h6>{category?.categoryName}</h6>
        <button onClick={()=>removeCategory(category?.id)} className='btn' variant=""><i class="fa-solid fa-trash "></i></button>
      </div>
      <Row >
        {
          category?.allvideos?.length>0?category?.allvideos.map(card=>(
            <Col sm={12} className='mb-3' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
              <Videocard video={card} insideCategory={true} />
            </Col>
          )):null
        }
      </Row>
      </div>
      )):<p className='text-danger fw-bolder'>no category yet</p>
      
}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className='text-dark'>Add Category</h4>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <FloatingLabel  label="Category Name" className="mb-3" onChange={e=>setcategoryName(e.target.value)}  >
        <Form.Control type="text" placeholder="Category Name" />
      </FloatingLabel>
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      </div>
  )
}

export default Category