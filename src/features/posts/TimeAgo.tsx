import React from 'react'
import { parseISO, formatDistanceToNow } from 'date-fns'

export const TimeAgo = (props: { timestamp: string }): JSX.Element => {
  const date = parseISO(props.timestamp)
  const timePeriod = formatDistanceToNow(date)
  const timeAgo = `${timePeriod} ago`
  return (
    <span title={props.timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}
