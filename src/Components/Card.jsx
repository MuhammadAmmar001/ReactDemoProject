import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function InfoCard({ title, desc, img, btnName, redirect }) {

    return (

        <Card style={{ width: '18rem' }} className='mx-auto border border-info border-5'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {desc}
                </Card.Text>
                <Button variant="primary" onClick={() => { window.open(redirect, '_blank') }}>{btnName}</Button>
            </Card.Body>
        </Card>

    );
}

export default InfoCard;