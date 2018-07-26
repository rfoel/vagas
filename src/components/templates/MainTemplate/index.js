import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'
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
  padding: 0 1rem;
  margin: 1rem auto;
  flex-grow: 1;
  max-width: ${size('maxWidth')};
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
