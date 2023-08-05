import React from 'react'

function Comment({ comment }) {
  return (
    <div className='text-sm mb-1 p-1'>
      {comment.text}
    </div>
  )
}

export default Comment