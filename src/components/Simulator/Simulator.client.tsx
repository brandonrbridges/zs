'use client'

// Types and interfaces
import { PokerHandType } from '@/app/types'

// React
import { useState } from 'react'

// Helpers
import classNames from 'classnames'

export const PokerCard = () => {
  return <div className='rounded-sm bg-[#6A9DC2] h-8 w-8'></div>
}

export const PokerHand = ({
  selected,
  play,
}: {
  selected?: PokerHandType
  play?: (arg: PokerHandType) => void
}) => {
  const [selectedHand, setSelectedHand] = useState<PokerHandType>(null)

  const handleClick = (type: PokerHandType) => {
    if (!play) return

    setSelectedHand(type)
    play(type)
  }

  const PokerAction = ({
    type,
    selected,
    onClick,
  }: {
    type: PokerHandType
    selected: boolean
    onClick: () => void
  }) => {
    return (
      <button
        className={classNames(
          'flex space-x-8 w-full items-center justify-between px-2 rounded hover:text-neutral-900 text-sm',
          {
            'hover:bg-[#E89E7B]': type === 'bet',
            'hover:bg-[#8DB489]': type === 'check',
            'hover:bg-[#6A9DC2]': type === 'fold',
          },
          {
            'bg-[#E89E7B]': type === 'bet' && selected,
            'bg-[#8DB489]': type === 'check' && selected,
            'bg-[#6A9DC2]': type === 'fold' && selected,
          },
          {
            'text-neutral-900': selected,
            'text-neutral-600': !selected,
          }
        )}
        onClick={onClick}
      >
        <span className='capitalize'>{type}</span>
        <span>15%</span>
      </button>
    )
  }

  return (
    <div className={classNames('w-fit')}>
      <div
        className={classNames('w-fit px-4 pt-1 relative rounded-tl-md', {
          'bg-sky-400 text-neutral-900': !selected,
          'bg-neutral-800/40 text-neutral-600': selected,
        })}
      >
        Hand
        <div
          className={classNames('absolute top-0 -right-10 w-10 h-full', {
            'bg-sky-400': !selected,
            'bg-neutral-800/40': selected,
          })}
          style={{
            clipPath: 'polygon(0 0, 50% 50%, 100% 100%, 0 100%)',
          }}
        />
      </div>
      <div
        className={classNames(
          'bg-neutral-800/40 border-2 px-2 py-4 rounded-md rounded-tl-none w-full',
          {
            'border-sky-400': !selected,
            'border-transparent': selected,
          }
        )}
      >
        <div className={classNames('flex flex-col items-start space-y-2')}>
          <PokerAction type='bet' selected={selected == 'bet'} onClick={() => handleClick('bet')} />
          <PokerAction
            type='check'
            selected={selected == 'check'}
            onClick={() => handleClick('check')}
          />
          <PokerAction
            type='fold'
            selected={selected == 'fold'}
            onClick={() => handleClick('fold')}
          />
        </div>
      </div>
    </div>
  )
}
