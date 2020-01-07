import React from 'react'

function MyList(props){
    let image = props.img
    let title = props.title
    let movie = props.movie
    return(
        <div>
            <h5>
                {title}
            </h5>
            <img src={image} alt={image} onClick={()=>props.onRemove(movie)}/>
        </div>
            
    )
}

export default MyList