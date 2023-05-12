'use client'

// React
import { useContext } from 'react'

// Context
import { TabType, TabsContext } from '@/context/tabs.context'

// Helpers
import classNames from 'classnames'

// Icons
import { VscClose } from 'react-icons/vsc'

const TabPane = () => {
  const { state, dispatch } = useContext(TabsContext)

  const Tab = (tab: TabType) => {
    return (
      <div
        className={classNames(
          'border-t-4 last:!border-r flex group items-center justify-center px-10 py-3 cursor-pointer relative w-fit',
          {
            '!border-t-sky-400': tab.selected,
            '!border-t-transparent': !tab.selected,
          }
        )}
        onClick={() => dispatch({ type: 'SELECT_TAB', payload: tab })}
      >
        <p className='text-sm'>{tab.name}</p>
        <button
          className='opacity-0 right-2 absolute group-hover:opacity-100'
          onClick={() => dispatch({ type: 'REMOVE_TAB', payload: tab })}
        >
          <VscClose />
        </button>
        {tab.selected && <div className='bg-neutral-900 h-1 w-full -bottom-0.5 left-0 absolute' />}
      </div>
    )
  }

  const AddTab = () => {
    return (
      <div
        className={classNames(
          'border-t-4  flex group items-center justify-center px-10 py-3 cursor-pointer relative w-fit',
          {
            '!border-t-sky-400': false,
            '!border-t-transparent': true,
          }
        )}
        onClick={() =>
          dispatch({ type: 'ADD_TAB', payload: { name: 'New Tab', id: 'new-tab', selected: true } })
        }
      >
        <p className='text-sm'>+</p>
      </div>
    )
  }

  return (
    <>
      <div
        className={classNames(
          'bg-neutral-900 border-b border-b-neutral-700 flex divide-x divide-neutral-700 sticky top-0'
        )}
      >
        {state.tabs.map((tab) => (
          <Tab key={tab.id} {...tab} />
        ))}
        <AddTab />
      </div>
      {/*
      <div className='border-b bg-neutral-900 border-b-neutral-700 text-sm py-1 px-4 text-neutral-500'>
        <span>breadcrumbs</span>
      </div>
      */}
    </>
  )
}

export default TabPane
