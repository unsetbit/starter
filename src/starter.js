import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`

const App = () => {
  return <Title>Start your app in <a target="_blank" href="https://github.com/unsetbit/starter/blob/master/src/starter.js#L12">./src/starter.js</a></Title>;
}

ReactDOM.render(<App />, document.querySelector("#root"))

export const hello = 'world';
