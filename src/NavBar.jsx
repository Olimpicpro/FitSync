import profilePic from './assets/download.png'

function NavBar(props){
    return(
        
        <div className="navbar">
            <h1>Fit<span>Sync</span></h1>
            <a href="">Home</a>
            <a href="">Contact Us</a>
            <img src={props.pic} alt="Profile Picture" />
        </div>
    );
}

export default NavBar