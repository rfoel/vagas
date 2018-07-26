import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Paragraph = styled.p`
  font-family: ${font('primary')};
  color: ${palette('gray', 0)};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
  ${props => props.align && `text-align: ${props.align}`};
`

Paragraph.propTypes = {
  reverse: PropTypes.bool,
  align: PropTypes.string,
}

export default Paragraph
