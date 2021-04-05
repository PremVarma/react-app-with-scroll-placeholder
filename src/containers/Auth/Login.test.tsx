import { Login } from './Login'
import { fireEvent } from '@testing-library/react'
import ReactDOM from 'react-dom'

describe('Login component tests', () => {
  let container: HTMLDivElement
  //   const loginService = jest.spyOn(Login.loginHandler)
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Login />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('Renders correctly initial document', () => {
    const inputs = container.querySelectorAll('input')
    expect(inputs).toHaveLength(2)
    expect(inputs[0].name).toBe('username')
    expect(inputs[1].name).toBe('password')
  })

  it('Passes credentials correctly', () => {
    const inputs = container.querySelectorAll('input')
    const button = container.querySelectorAll('button')
    const username = inputs[0]
    const password = inputs[1]
    fireEvent.change(username, { target: { value: 'foo' } })
    fireEvent.change(password, { target: { value: 'bar' } })
    fireEvent.click(button[0])
  })
})
