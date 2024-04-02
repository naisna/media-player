import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import './Landingpage.css'
import {useNavigate} from 'react-router-dom'




function Landingpage() {
  const navigateByUrl=useNavigate()
  return (
    <div>
      <Row className='mt-5 align-items-center justify-content-between w-100'>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{fontSize:'40px'}}> Welcome to <span className='text-warning'>Media-Player</span></h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime praesentium ratione aperiam labore laudantium rerum, fuga necessitatibus harum, ipsum atque incidunt molestias blanditiis a, doloremque amet quam numquam animi! Ut?</p>
          <button onClick={()=>navigateByUrl('./home')} className='btn  mt-4' style={{backgroundColor:'#9C2542'}}>Get Started</button>
        </Col>
        <Col lg={5} className='images'>
          <img src="https://w0.peakpx.com/wallpaper/411/68/HD-wallpaper-music-texture-grunge-music-background-music-concepts-background-with-notes-musical-notes.jpg" className='rounded-pill'  style={{width:'500px', height:'500px'}} alt="" />
        </Col>
        <Col></Col>
      </Row> 
      <div className='container  d-flex mb-5 mt-5  align-items-center justify-content-between w-100 flex-column'>
        <h3 >Features</h3>
        <div className='cards d-flex mb-5 mt-5  align-items-center justify-content-between w-100 '>
        <Card style={{ width: '18rem' }} className='p-5 bg-warning'>
      <Card.Img variant="top" src="https://i.pinimg.com/736x/ea/dd/30/eadd30711fc8a98c466fafea15ed8f4b.jpg" style={{width:'100%',height:'200px'}} />
      <Card.Body>
        <Card.Title className='text-light'>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className='p-5 bg-danger'>
      <Card.Img variant="top" src="https://w0.peakpx.com/wallpaper/224/1002/HD-wallpaper-music-music-symbol.jpg" style={{width:'100%', height:'200px'}} />
      <Card.Body>
        <Card.Title ><span className='text-light'>Categorizing video</span></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }} className='p-5 bg-success'>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D" style={{width:'100%' ,height:'200px'}} />
      <Card.Body>
        <Card.Title className='text-light'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
      </div>
<div className='container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100'>
<div className='col-lg-5'>
  <h4 className='text-warning'>Simple,Powerful & Fast</h4>
  <h6 className='mb-5 mt-3' ><span className='text-warning fw-bolder'>Play Everything</span>:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, velit. Repellendus, iure. Itaque aut beatae sequi aperiam, voluptatibus commodi sapiente id ullam consequatur quos reprehenderit ipsa ad velit esse labore.</h6>

  <h6 className='mb-5 mt-3' ><span className='text-warning fw-bolder'>Categorize videos</span>:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, velit. Repellendus, iure. Itaque aut beatae sequi aperiam, voluptatibus commodi sapiente id ullam consequatur quos reprehenderit ipsa ad velit esse labore.</h6>

  <h6 className='mb-5 mt-3' ><span className='text-warning fw-bolder'>Managing videos</span>:Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, velit. Repellendus, iure. Itaque aut beatae sequi aperiam, voluptatibus commodi sapiente id ullam consequatur quos reprehenderit ipsa ad velit esse labore.</h6>

  

</div>
<div className='video col-lg-5 col-sm-10'>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/lM8h5Mm6ODo" title="JAILER - Kaavaalaa Video Song | Superstar Rajinikanth | Sun Pictures | Anirudh | Nelson | Tamannaah" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe>
</div>
</div>




    </div>
  )
}

export default Landingpage