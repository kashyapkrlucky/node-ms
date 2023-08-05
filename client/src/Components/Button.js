import React from 'react'

function Button(props) {
    return (
        <button className='bg-slate-700 text-sm px-2.5 py-2 text-white rounded-sm'  {...props}>Submit</button>
    )
}

export default Button
