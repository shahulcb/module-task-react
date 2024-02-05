import React from 'react'
import { Col, Row } from 'react-bootstrap';
import CustomCard from '../components/CustomCard';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';


const Home = () => {

    return (
        <>
            <Container className='mt-5' >
                <Row>
                    <Col md={6}>
                        <Image src="https://placehold.co/600x400" rounded fluid />
                    </Col>
                    <Col md={6}>
                        <h2>Lorem, ipsum dolor.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis voluptatem illo ipsum molestias cum, debitis temporibus id ullam culpa aspernatur distinctio, ipsam delectus a sed repellendus odio. Totam, quas?</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <h1 className='py-5'>Projects</h1>
                <Row>
                    <Col md={3}>
                        <CustomCard />
                    </Col>
                    <Col md={3}>
                        <CustomCard />
                    </Col>
                    <Col md={3}>
                        <CustomCard />
                    </Col>
                    <Col md={3}>
                        <CustomCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Home
