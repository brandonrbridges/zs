'use client'

// Types and interfaces
import { PokerHandType, suits } from '@/app/types'
import type { TabType } from '@/context/tabs.context'

import { ranks } from '@/app/types'

// React
import { useEffect, useRef, useState } from 'react'

// Client Components
import { PokerHand } from './Simulator.client'

// Components
import CombinationMatrix from '../CombinationMatrix'

// Icons
import { VscLock } from 'react-icons/vsc'

// Helpers
import classNames from 'classnames'

const Simulator = ({ tab }: { tab: TabType }) => {
  if (!tab) return null

  if (tab.id == 'welcome') {
    return (
      <div className='flex flex-col space-y-4'>
        <p className='font-bold text-2xl'>Welcome to Poker Simulator</p>
        <div className='border rounded border-neutral-700 p-4'>
          <p>A playground for getting to know the Zerosolver application.</p>
          <p>Written by Brandon, using NextJS and Tailwindcss.</p>
        </div>
      </div>
    )
  }

  if (tab.id == 'new-tab') {
    return <p>Please select a configuration</p>
  }

  const [playedHands, setPlayedHands] = useState<PokerHandType[]>([])

  const handsRef = useRef(null)

  const playHand = (hand: PokerHandType) => {
    setPlayedHands([...playedHands, hand])
  }

  useEffect(() => {
    if (!handsRef.current) return

    // @ts-ignore
    handsRef.current.scrollLeft = handsRef.current.scrollWidth
  }, [playedHands])

  return (
    <div className='space-y-4'>
      <div className='grid grid-cols-3 gap-8'>
        <div className='flex space-x-4 overflow-x-hidden col-span-2' ref={handsRef}>
          {playedHands.map((hand, index) => (
            <PokerHand key={index} selected={hand} />
          ))}
          <PokerHand play={playHand} />
        </div>
        <div className='flex flex-col space-y-2'>
          {suits.map((suit) => (
            <div key={suit} className='flex space-x-2'>
              {ranks.map((rank) => (
                <div key={rank} className={classNames('card', suit)}>
                  {rank}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='border-t flex space-x-4 border-t-neutral-700 w-full pt-4 items-start justify-between'>
        <div>
          <p className='border rounded mx-auto border-neutral-700 mb-2 w-fit px-2'>BTN 55%</p>
          <CombinationMatrix />
        </div>
        <div className='flex-grow text-center'>
          <p className='border rounded mb-3 mx-auto border-neutral-700 text-sm w-fit px-4 text-neutral-600 uppercase'>
            Solver
          </p>

          <div className='flex flex-col space-y-4'>
            <SolverItem />
            <SolverItem />
            <SolverItem />
          </div>
        </div>
        <div>
          <p className='border rounded mx-auto border-neutral-700 mb-2 w-fit px-2'>BB 45%</p>
          <CombinationMatrix />
        </div>
      </div>
    </div>
  )
}

const SolverItem = () => {
  return (
    <div className='space-y-2'>
      <div className='flex space-x-2'>
        <div className='grid grid-cols-2 gap-2'>
          <div className='card diamonds'>9</div>
          <div className='card hearts'>4</div>
        </div>
        <VscLock className='mt-auto' />
      </div>
      <div>
        <div className='w-full flex bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700'>
          <div
            className='bg-fold h-2.5 first:rounded-l-full last:rounded-r-full'
            style={{ width: '45%' }}
          />
          <div
            className='bg-check h-2.5 first:rounded-l-full last:rounded-r-full'
            style={{ width: '30%' }}
          />
          <div
            className='bg-bet h-2.5 first:rounded-l-full last:rounded-r-full'
            style={{ width: '25%' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Simulator
