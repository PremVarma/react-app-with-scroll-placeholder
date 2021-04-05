import { Home } from './Home'
import { fireEvent } from '@testing-library/react'
import ReactDOM from 'react-dom'

describe('Home component tests', () => {
  let container: HTMLDivElement
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    ReactDOM.render(<Home />, container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container.remove()
  })

  it('Renders correctly initial document', () => {
    const logoutSpan = document.querySelectorAll('span')
    expect(logoutSpan[0].textContent).toBe('Home')
    expect(logoutSpan[1].textContent).toBe('Logout')
  })
})
