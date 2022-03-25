// import React from 'react'

import styled from 'styled-components'

const Alert = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  padding: 0px;

`

function Announcement() {
  return (
    <Alert>
      get your free coupon
    </Alert>
  )
}

export default Announcement