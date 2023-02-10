import { Link } from 'react-router-dom'


function Nav() {
    return (
        <div>
            <div className="nav">
                <Link to={"/"} id="homenav">Home</Link>
                <Link to={"/taskovi"} id="filternav">Filter tasks</Link>
            </div>
        </div >
    )
}


export default Nav;