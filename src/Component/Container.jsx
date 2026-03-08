import React from 'react'

const Container = ({children, className}) => {
  return (
    <>
       <div className={`w-full max-w-[1320px] px-2 mx-auto ${className}`}>{children}</div>
    </>
  )
}

export default Container