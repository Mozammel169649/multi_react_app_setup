import React from 'react'
import setup from './config/setup'

const {route_prefix} = setup;

function All() {
  return (
    <>
      <a href={`#/${route_prefix}/create`}> Create Blog </a> <br />
      all blog
    </>
  )
}

export default All
