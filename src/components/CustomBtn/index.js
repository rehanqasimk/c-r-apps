
function CustomBtn(props) {
    
    console.log("props ==>",props)
    return <button 
    className='custom-btn'
    onClick={(() => props.changeScreen(props.screen))}
    // onClick={(() => props.changeScreen(!props.screen))}
    style={{background: props.color}}>{props.title}</button>
}

export default CustomBtn