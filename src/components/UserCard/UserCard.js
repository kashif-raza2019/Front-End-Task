import {Card, Spinner} from 'react-bootstrap';

function UserCard(props){
    const data = props.data;
    // Spinner to be shown while data is loading
    if(!data) return <div className='text-center'> <Spinner animation='border' variant='success' className='text-center' /> </div>
    return (
        <>
            <Card className='userCard' 
                style={{ width: '250px' }}
             >
                <Card.Img variant='top' src={data.avatar} />
                <Card.Body>
                    <Card.Title className='text-secondary text-center'>{data.first_name} {data.last_name}</Card.Title>
                    <Card.Text>
                         <p className='text-secondary'>USER ID: <span className='text-success'> {data.id} </span></p>
                        <p className='text-secondary'>CONTACT <span className="text-success" >{data.email}</span></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default UserCard;