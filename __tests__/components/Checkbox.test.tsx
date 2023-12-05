import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Checkbox } from '../../components/Checkbox'

test('clicking the custom checkbox makes the input as checked', async () => {
  render(<Checkbox />)
  await userEvent.click(screen.getByTestId('checkbox'))
  const checkboxInput = screen
    .getByTestId('checkbox')
    .getElementsByTagName('input')[0]
  expect(checkboxInput).toBeChecked()
})
