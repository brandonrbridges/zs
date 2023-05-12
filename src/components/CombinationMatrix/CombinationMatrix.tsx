'use client'

import React, { useState, useEffect } from 'react'

import { CellProps } from './CombinationMatrix.props'

import { ranks } from '@/app/types'

interface WinPercentages {
  fold: number
  check: number
  bet: number
}

const Cell: React.FC<CellProps & WinPercentages> = ({
  rowIndex,
  cellIndex,
  cell,
  fold,
  check,
  bet,
}) => (
  <div
    key={cellIndex}
    className='border rounded border-neutral-600 text-center w-8 h-8 text-xs py-1 cell relative'
  >
    <div className='absolute flex left-0 top-0 overlay h-full w-full overflow-hidden rounded-sm'>
      <div style={{ width: `${fold}%` }} className='h-full bg-fold' />
      <div style={{ width: `${check}%` }} className='h-full bg-check' />
      <div style={{ width: `${bet}%` }} className='h-full bg-bet' />
    </div>
    <p className='absolute block z-10 text-neutral-950 w-full'>{cell}</p>
  </div>
)

const CombinationMatrix: React.FC = () => {
  const [matrix, setMatrix] = useState<string[][]>([])
  const [winPercentages, setWinPercentages] = useState<WinPercentages[][]>([])

  const calculateCombination = (i: number, j: number): string => {
    if (i === j) return `${ranks[i]}${ranks[j]}` // pairs
    if (i < j) return `${ranks[i]}${ranks[j]}s` // suited
    return `${ranks[j]}${ranks[i]}o` // offsuit
  }

  const getRandomPercentage = () => Math.floor(Math.random() * 100)

  useEffect(() => {
    const tempMatrix: string[][] = []
    const tempWinPercentages: WinPercentages[][] = []

    for (let i = 0; i < 13; i++) {
      const row: string[] = []
      const rowPercentages: WinPercentages[] = []

      for (let j = 0; j < 13; j++) {
        row.push(calculateCombination(i, j))
        rowPercentages.push({
          fold: getRandomPercentage(),
          check: getRandomPercentage(),
          bet: getRandomPercentage(),
        })
      }

      tempMatrix.push(row)
      tempWinPercentages.push(rowPercentages)
    }

    setMatrix(tempMatrix)
    setWinPercentages(tempWinPercentages)
  }, [])

  return (
    <div className='grid gap-2 grid-cols-13 grid-rows-13 combination-matrix'>
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className='space-y-2'>
          {row.map((cell, cellIndex) => (
            <Cell
              rowIndex={rowIndex}
              cellIndex={cellIndex}
              cell={cell}
              {...winPercentages[rowIndex][cellIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default CombinationMatrix
