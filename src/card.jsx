import profilePic from './assets/download.png'


function Card(props){

    const submitClick = () => console.log("Learn")

    return(
        <center>
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.text}</p>
            <button onClick={submitClick}>Learn More</button>
        </div></center>
    );
}

export default Card