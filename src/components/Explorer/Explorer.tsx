'use client'

import { useState } from 'react'

import { ExplorerTree } from './Explorer.client'

import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc'

const Explorer = () => {
  const [open, setOpen] = useState(true)
  const [size, setSize] = useState(260)

  const handler = (mouseDownEvent: React.MouseEvent<HTMLButtonElement>) => {
    const startSize = size
    const startX = mouseDownEvent.clientX

    const mouseMoveHandler = (mouseMoveEvent: MouseEvent) => {
      setSize(startSize + mouseMoveEvent.clientX - startX)
    }

    const mouseUpHandler = () => {
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
    }

    document.addEventListener('mousemove', mouseMoveHandler)
    document.addEventListener('mouseup', mouseUpHandler)
  }

  return (
    <div
      className='border-r bg-neutral-900 border-r-neutral-700 text-sm p-3 text-neutral-400  overflow-y-auto relative'
      style={{ width: size }}
    >
      <div className='flex items-center justify-between mb-4'>
        <p className='text-neutral-600 uppercase'>Explorer</p>
        <div className='flex items-center'>
          <button
            type='button'
            onClick={() => setOpen(false)}
            className='text-neutral-500 hover:text-neutral-400'
          >
            <VscChevronLeft />
          </button>
        </div>
      </div>

      <ExplorerTree />

      <button
        type='button'
        className='absolute cursor-ew-resize right-0 top-0 hover:bg-neutral-700/25 h-full w-1.5 transition-colors'
        id='handle'
        onMouseDown={handler}
      />
    </div>
  )
}

export default Explorer
