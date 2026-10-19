
function Button(props){

    const submitClick = () => console.log("Ouch!")

    return(
        <center>
        <button onClick={submitClick} className="button">{props.name}</button>
        </center>
    );
}

export default Button