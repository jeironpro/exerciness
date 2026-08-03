import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from './Modal.jsx'

describe('Modal', () => {
  it('no renderiza nada cuando está cerrado', () => {
    render(<Modal open={false} onClose={vi.fn()} title="Título" />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('muestra el diálogo con su contenido cuando está abierto', () => {
    render(
      <Modal open onClose={vi.fn()} title="Añadir ejercicio">
        Contenido del modal
      </Modal>,
    )
    expect(screen.getByRole('dialog', { name: 'Añadir ejercicio' })).toBeInTheDocument()
    expect(screen.getByText('Contenido del modal')).toBeInTheDocument()
  })

  it('cierra al pulsar Escape', async () => {
    const handleClose = vi.fn()
    const user = userEvent.setup()
    render(<Modal open onClose={handleClose} title="Título" />)
    await user.keyboard('{Escape}')
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
