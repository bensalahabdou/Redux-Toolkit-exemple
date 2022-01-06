import React from 'react'
import { Link } from 'react-router-dom'



function Post({ post }) {
    const { id, title, body } = post;
   
    return (
        <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{body}</p>
            <Link to={`/post/${id}`} ><button className='btn btn-primary'>
            View
            </button></Link >
            </div>
      </div>
    )
}

export default Post
