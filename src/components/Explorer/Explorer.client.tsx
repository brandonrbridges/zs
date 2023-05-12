'use client'

// React
import { useContext, useState } from 'react'

// Context
import { TabsContext } from '@/context/tabs.context'

// Data
import { data } from './Explorer.data'

// Helpers
import classNames from 'classnames'

// Modules
import TreeView, { INode } from 'react-accessible-treeview'

// Icons
import { VscFolder, VscFolderOpened } from 'react-icons/vsc'

export const ExplorerTree = () => {
  const { state, dispatch } = useContext(TabsContext)

  const [expandedIds, setExpandedIds] = useState([])

  const handleClick = (element: INode) => {
    dispatch({
      type: 'ADD_TAB',
      payload: {
        id: element.id as string,
        name: element.name,
        selected: true,
      },
    })
  }

  const NodeIcon = ({ isExpanded }: { isExpanded: boolean }) => {
    return (
      <span>
        {isExpanded ? (
          <VscFolderOpened className='text-neutral-300' />
        ) : (
          <VscFolder className={classNames('')} />
        )}
      </span>
    )
  }

  return (
    <div>
      <TreeView
        data={data}
        expandedIds={expandedIds}
        nodeRenderer={({
          element,
          isBranch,
          isExpanded,
          isDisabled,
          getNodeProps,
          level,
          handleExpand,
        }) => {
          return (
            <div
              {...getNodeProps({
                onClick: isBranch ? handleExpand : () => handleClick(element),
              })}
              className={classNames('flex items-center cursor-pointer', { 'pl-2.5': isBranch })}
              style={{
                marginLeft: 20 * (level - 1),
                opacity: isDisabled ? 0.5 : 1,
              }}
            >
              {isBranch && <NodeIcon isExpanded={isExpanded} />}
              <span
                className={classNames(
                  'border border-transparent px-2 py-1 rounded w-full transition-colors duration-100 ease-in',
                  { 'hover:bg-neutral-800/40 hover:border-neutral-700': !isBranch },
                  {
                    'text-neutral-500 hover:text-neutral-400': !isExpanded,
                    'text-neutral-400 hover:text-neutral-300': isExpanded,
                  }
                )}
              >
                {element.name}
              </span>
            </div>
          )
        }}
      />
    </div>
  )
}
