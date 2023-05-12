'use client'

import React, { createContext, useReducer, useState } from 'react'

export type TabType = {
  id: string
  name: string
  selected?: boolean
}

type StateType = {
  tabs: Array<any>
}

type ActionType = {
  type: string
  payload: TabType
}

const initialState: StateType = {
  tabs: [
    {
      name: 'Small Blind',
      id: 'small-blind',
      selected: true,
    },
    {
      name: 'Welcome to Zerosolver',
      id: 'welcome',
      selected: false,
    },
  ],
}

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'ADD_TAB':
      // reset selected
      state.tabs.forEach((tab) => (tab.selected = false))

      return {
        ...state,
        tabs: [...state.tabs, action.payload],
      }
    case 'REMOVE_TAB':
      return {
        ...state,
        tabs: state.tabs.filter((tab) => tab.id !== action.payload.id),
      }
    case 'SELECT_TAB':
      return {
        ...state,
        tabs: state.tabs.map((tab) => {
          if (tab.id === action.payload.id) {
            tab.selected = true
          } else {
            tab.selected = false
          }
          return tab
        }),
      }
    case 'UPDATE_TAB':
      return {
        ...state,

        tabs: state.tabs.map((tab) => {
          if (tab.id === action.payload.id) {
            tab.name = action.payload.name
          }
          return tab
        }),
      }
    default:
      return state
  }
}

export const TabsContext = createContext<{
  state: StateType
  dispatch: React.Dispatch<ActionType>
}>({
  state: initialState,
  dispatch: () => null,
})

export const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <TabsContext.Provider value={{ state, dispatch }}>{children}</TabsContext.Provider>
}
