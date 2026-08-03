import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { useFetch } from './useFetch.js'

function createDeferred() {
  let resolve
  let reject
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })
  return { promise, resolve, reject }
}

function Probe({ loader }) {
  const { data, loading, error } = useFetch(loader)
  const status = loading ? 'loading' : data ? `data:${data}` : `error:${error}`
  return <div data-testid="probe">{status}</div>
}

describe('useFetch', () => {
  it('muestra los datos cuando la petición resuelve', async () => {
    const deferred = createDeferred()
    render(<Probe loader={() => deferred.promise} />)
    expect(screen.getByTestId('probe')).toHaveTextContent('loading')
    await act(async () => {
      deferred.resolve('ok')
    })
    expect(await screen.findByText('data:ok')).toBeInTheDocument()
  })

  it('muestra el error cuando la petición falla', async () => {
    const deferred = createDeferred()
    render(<Probe loader={() => deferred.promise} />)
    await act(async () => {
      deferred.reject(new Error('fallo'))
    })
    expect(await screen.findByText('error:fallo')).toBeInTheDocument()
  })
})
