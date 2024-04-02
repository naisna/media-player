import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './Footer.css'


import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div>
  <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>  */}

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 mt-5'>
              <h5 className='text-uppercase fw-bold mb-4 text-success'>
              <i class="fa-solid fa-video fa-lg me-3 text-warning" ></i>
              Video Player
              </h5>
              <p className='text-success'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic numquam, nulla placeat consequuntur impedit dignissimos in laborum assumenda quae perferendis pariatur. Sequi nihil placeat ullam repellendus corrupti illo dicta eos?
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h5 className='text-uppercase fw-bold mb-4 text-success'>Links</h5>
              <p>
               
              </p>
              <p>
                <a href='#!' className='text-dark'>
               Landing Page
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                 Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                 Watch History
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 mt-5'>
              <h5 className='text-uppercase fw-bold mb-4 text-success'>Guides</h5>
              <p>
                <a href='#!' className='text-dark'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                 React Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-dark'>
                  Bootstrap
                </a>
              </p>
              <p>
               
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 mt-5'>
              <h5 className='text-uppercase fw-bold mb-4 text-success'>Contact Us</h5>
              <div></div>
            
              <div className="row">
          <div className="col-md-8">
    <MDBInput type="text"  size="lg" id="form5Example2" label="Enter Your Email ID" className='bg-info' style={{display:'flex', textAlign:'center'}}/>
  </div>
  <div className="col-md-4">
    <MDBBtn size="lg" className='  btn-no-outline'style={{boxShadow:'none', borderColor:'#9C2542',display:'flex',backgroundColor:'#9C2542', textAlign:'center'}} >Subscribe</MDBBtn>
  </div>
</div>
<div className='d-flex justify-content-center justify-content-lg-between pt-5'>
  <div>

<Link to={'https://www.instagram.com/?hl=en'}> <MDBIcon fab icon="instagram" size="2x" className='me-4 text-reset' style={{ marginRight: '20px' }} /> </Link>

    <a href='' className='me-5 text-reset' style={{ marginRight: '20px' }}>
      <Link to={'https://www.instagram.com/?hl=en'}><MDBIcon fab icon="twitter" size="2x" /></Link>
    </a>
   <Link to={'https://www.linkedin.com/'}> <MDBIcon fab icon="linkedin" size="2x" className='me-4 text-reset' style={{ marginRight: '20px' }}/></Link>
     

    <a href='' className='me-5 text-reset' style={{ marginRight: '30px' }}>
      <MDBIcon fab icon="facebook-f" size="2x" />
    </a>
  </div>
</div>


             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-success' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', fontSize:'20px' }}>
      Copyright: © 2023 Media Player. Build with React 
        
      </div>
    </MDBFooter>


    </div>
  )
}

export default Footer