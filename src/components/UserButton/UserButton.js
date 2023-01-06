import {useState} from 'react';
import {Button, Spinner} from 'react-bootstrap';
import useSWR from 'swr';
import UserCard from '../UserCard/UserCard';

// API endpoint for fetching the specific user
const API_URL = 'https://reqres.in/api/users/';

// Fetcher for SWR to get data from API
const fetcher = (...args) => fetch(...args).then(res => res.json());


function UserButton(props){

    const [show, setShow] = useState(false);

    const id = props.id;
    const name = props.name;
    // Get data from API
    const {data, error} = useSWR(API_URL + id, fetcher);
    
    // onClick Handler
    const onClickHandler = () => {
        setShow(!show);
    }

    // If data is loading
    if(!data) return <div className='text-center'>  <Spinner animation='border' variant='success' /> </div>
    // If error
    if(error) return <div className='text-center'>  <div className='text-center text-danger' >Oops! it looks like some error occured on our end, please try again later..</div> </div>
    // If data is loaded


    return (
        <>
            { show ? <UserCard data={data.data} /> : null}
            <Button className='btn btn-primary userBtn'
                onClick={onClickHandler}
            > {name} </Button>

           {/* User Card to be shown on button click */}



        </>
    );
}

export default UserButton;