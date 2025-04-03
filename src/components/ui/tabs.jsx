import React, { useState } from 'react'

export function Tabs({ defaultValue, children }) {
  const [active, setActive] = useState(defaultValue)
  const tabs = React.Children.toArray(children)
  const list = tabs.find(tab => tab.type.displayName === 'TabsList')
  const contents = tabs.filter(tab => tab.type.displayName === 'TabsContent')

  return (
    <div>
      {React.cloneElement(list, { active, setActive })}
      {contents.map(content => {
        return React.cloneElement(content, { active })
      })}
    </div>
  )
}

export function TabsList({ children, active, setActive }) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { active, setActive })
      )}
    </div>
  )
}

export function TabsTrigger({ value, children, active, setActive }) {
  return (
    <button
      style={{
        padding: 8,
        borderBottom: active === value ? '2px solid #000' : 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={() => setActive(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ value, active, children }) {
  if (value !== active) return null
  return <div style={{ paddingTop: 16 }}>{children}</div>
}

Tabs.displayName = 'Tabs'
TabsList.displayName = 'TabsList'
TabsTrigger.displayName = 'TabsTrigger'
TabsContent.displayName = 'TabsContent'
