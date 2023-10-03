const ActionButton = ({action, setAction}) =>{
    return(
    <button className='actions_button'
            title={action.action}
            onClick={()=>setAction(action.action)}>
        <img src={action.image} alt={action.action}/>
    </button>)
}

export default ActionButton;