import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Navigation, Footer } from 'components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  flex-grow: 1;
`

const MainTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Navigation />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

MainTemplate.propTypes = {
  children: PropTypes.any.isRequired,
}

export default MainTemplate
