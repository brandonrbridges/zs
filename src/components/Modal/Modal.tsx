'use client'

// React
import React, { forwardRef } from 'react'

// Headless UI
import { Dialog } from '@headlessui/react'

const Modal = forwardRef(({ setOpen }: { setOpen: Function }, ref) => {
  return (
    <Dialog.Panel
      className='relative transform overflow-hidden rounded-lg bg-neutral-900 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'
      ref={ref}
    >
      <div className='sm:flex sm:items-start'>
        <div className='mt-3 text-center sm:mt-0 sm:text-left'>
          <h3 className='text-neutral-400'>Create an Account</h3>
          <div className='mt-2'>
            <p className='text-sm text-gray-500'>
              Generating a new account will create a new wallet and seed phrase. Please make sure
              you have a secure place to store your seed phrase.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-5 sm:mt-4 sm:flex sm:flex-row-reverse'>
        <button
          type='button'
          className='inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto'
          onClick={() => setOpen(false)}
        >
          Create Account
        </button>
        <button
          type='button'
          className='inline-flex w-full justify-center rounded-md border border-neutral-700 px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto'
          onClick={() => setOpen(false)}
        >
          Cancel
        </button>
      </div>
    </Dialog.Panel>
  )
})

Modal.displayName = 'Modal'

export default Modal
