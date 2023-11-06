import React from 'react'
import setup from './config/setup'

const {route_prefix} = setup;

function Create() {
  return (
    <>
     <a href={`#/${route_prefix}`} className='btn btn-success'> Back</a> <br />
      create user
    </>
  )
}

export default Create
