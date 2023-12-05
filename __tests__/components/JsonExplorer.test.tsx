import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { JsonExplorer } from '../../components/JsonExplorer'

test('clicking the key shows the value', async () => {
  render(<JsonExplorer data={{ name: 'John Doe' }} />)
  await userEvent.click(screen.getByText('name'))
  expect(screen.getByTestId('output')).toHaveTextContent('John Doe')
})

test('clicking the key shows the correct key path', async () => {
  render(<JsonExplorer data={{ fields: [{ id: 4 }] }} />)
  await userEvent.click(screen.getByText('id'))
  expect(screen.getByTestId('output')).toHaveTextContent('res.fields[0].id')
})

test('empty data displays "No data"', async () => {
  render(<JsonExplorer data={{}} />)
  expect(screen.getByTestId('output')).toHaveTextContent('No data')
})
