import styled from "styled-components"

const Anchor = styled.a.attrs(props => {
  const attrs = {}
  if (props.newTab) {
    attrs.target = "_blank"
    attrs.rel = "noopener noreferrer"
  }
  return attrs
})`
  color: #000;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #b71b03;
  }
`

export default Anchor