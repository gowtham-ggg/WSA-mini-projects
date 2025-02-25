const CardLayout = (props) => {
    return(
        <div className="card-container">
            {props.children}
        </div>
    )
}

export default CardLayout;