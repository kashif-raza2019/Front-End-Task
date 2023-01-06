import { Spinner } from 'react-bootstrap';
import useSWR from 'swr';
import './main.css';

// Component of specific UserButton
import UserButton from '../UserButton/UserButton';

// API endpoint for fetching the total users data
const API_URL = 'https://reqres.in/api/users';

// Fetcher for SWR to get data from API
const fetcher = (...args) => fetch(...args).then(res => res.json());

function Main(){
    let pageNumber = 2;
    // Get data from API
    const {data, error} = useSWR(API_URL + '?page=' + pageNumber, fetcher);
    
    // If data is loading
    if(!data) return <div className='text-center'>  <Spinner animation='border' variant='warning' /> </div>
    // If error
    if(error) return <div className='text-center'> <div className='text-danger' >Oops! it looks like some error occured on our end, please try again later..</div> </div>
    // If data is loaded

    return (
        <>
            <h1 className='text-center'>Front End Task | User Details</h1>
            <div className='main'>
                <table className='table table-borderless'>
                    <thead>
                        <tr>
                    {data.data.map((user) => (
                        <th
                        >
                        <UserButton 
                            id={user.id} 
                            name={user.first_name + ' ' + user.last_name} 
                        />
                        </th>
                    ))}
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    );
}

export default Main;