import * as React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetPostByIdQuery } from '../posts/postDetailsApi'


const PostDetails = () => {
  const {id} = useParams()
  let navigate = useNavigate();

const { data, isLoading } = useGetPostByIdQuery(id)

// console.log(data)
return (
    <div>
        {isLoading && 
        (<div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)
        }
        {data ? 
        (<div className='container-lg'>
            <button onClick={() => navigate('/')} className='btn btn-secondary fixed-left'>{"<"}</button>
            <h2 className='m-3'>{data.title}</h2>
            <p className='m-3'>{data.body}</p>

        </div>): [] }
    </div>
)

}

export default  PostDetails
