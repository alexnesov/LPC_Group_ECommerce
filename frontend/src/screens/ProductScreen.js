import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import { useParams } from 'react-router-dom';

function ProductScreen( {match} ) {


  const { id } = useParams();

  const product = products.find((p) => p._id == id);

  return (
    <div>
        <Link to='/' className='btn my-3'>Go Back</Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} / >
          </Col>
        </Row>
    </div>
  )
}

export default ProductScreen