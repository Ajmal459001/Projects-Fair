import React,{useState} from 'react'
import { Card,Modal } from 'react-bootstrap'


const ProjectCard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <Card onClick={handleShow} className='btn shadow' >
      <Card.Body>
        <Card.Img height={'200px'} variant='top' src='https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'/>
        <Card.Title className='mt-2'>Card Title</Card.Title>
      </Card.Body>
    </Card>

    <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6>Languages Used : <span className='text-danger'>Language</span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Project Overview : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iusto harum vitae, incidunt rerum nobis ipsum molestiae quam. Labore fugit alias velit neque. Natus minima magni odit illo eius! Dolor.</span></p>
            </div>
          </div>
          <div className="mt-2 float-start">
              <a href="https://github.com/Ajmal459001/Simple-calculator.git" target='_blank' className='btn btn-secondary me-2'> <i className="fa-brands fa-github"></i> </a>
              <a href="https://ajmal459001.github.io/Simple-calculator/" target='_blank' className='btn btn-secondary me-2'> <i className="fa-solid fa-link"></i> </a>
            </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard