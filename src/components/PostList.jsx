import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

import Post from './Post'
import styles from './PostList.module.css'

const PostList = () => {
  const posts = useLoaderData()

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              id={post.id}
              body={post.body}
              author={post.author}
              key={post.id}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default PostList
