'use client'

// React
import { useContext } from 'react'

// Context
import { TabsContext } from '@/context/tabs.context'

// Components
import Simulator from '../Simulator'
import TabPane from '../TabPane'

const Zerosolver = () => {
  const { state, dispatch } = useContext(TabsContext)

  return (
    <div>
      <TabPane />
      <div className='p-6'>
        <Simulator tab={state.tabs.find((tab) => tab.selected == true)} />
      </div>
    </div>
  )
}

export default Zerosolver
