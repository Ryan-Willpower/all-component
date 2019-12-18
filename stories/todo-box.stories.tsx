import { storiesOf } from '@storybook/react'
import React from 'react'

import { Todo } from '../src/components/todo'

const info = {
  date: {
    at: 17,
    day: 'Tuesday',
    month: 'Dec',
    year: 2019,
  },
  event: {
    name: 'Go to shopping',
    from: '5 PM',
    to: '7 PM',
  },
}

storiesOf('Todo', module).add('With simple information', () => (
  <Todo info={info} />
))
