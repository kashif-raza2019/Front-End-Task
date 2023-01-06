import {Navbar} from 'react-bootstrap';
import './footer.css';

function Footer(){

    return (
        <>
        {/* Footer Nav */}
        <Navbar bg="dark" variant="dark" fixed="bottom"
         className="justify-content-center footer"
        >
            Made By Kashif Raza, 2023 as a part of &nbsp; <span className="text-primary"> Convin.AI </span> &nbsp; assignment
        </Navbar>
        </>
    );
}

export default Footer;