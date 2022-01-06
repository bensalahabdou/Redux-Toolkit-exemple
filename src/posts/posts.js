import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { fetchPosts } from './postsSlice'
import Post from '../posts/post'

function Posts() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchPosts({ limit:  10}))
  },[dispatch])
  const { posts } = useSelector(state => state.posts)
  // console.log(posts)
  return (
    <ul className='m-3'> 
     <div className='row'>
        {posts.map(post => 
    
      <div className='col-sm-12 col-md-6 col-lg-auto' key={post.id}>
      
      <li className='p-3' style={{listStyle: 'none'}} ><Post  post={post} /></li>
      
     
    </div>)}
    </div>
    </ul>
  )
}

export default Posts

