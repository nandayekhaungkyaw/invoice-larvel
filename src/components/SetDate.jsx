import React from 'react'

const SetDate = ({date}) => {
  const change = new Date(date);
  return (
    <div>
        <p>{change.toLocaleDateString('en-GB', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})}</p>
  <p>{change.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
})}</p>
    </div>
  )
}

export default SetDate
