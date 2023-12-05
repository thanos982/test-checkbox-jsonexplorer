import styles from './Checkbox.module.scss'

type CheckboxProps = {
  labelText?: string
  hideInput?: boolean
}

/**
 * A custom checkbox component.
 * @param labelText - The text of the label. Optional.
 * @param hideInput - Whether to hide the input element.
 */
export const Checkbox = ({
  labelText = '',
  hideInput = true,
}: CheckboxProps): JSX.Element => {
  return (
    <label data-testid='checkbox' className={styles.container}>
      <input type='checkbox' className={`${hideInput && styles.srOnly}`} />
      <span className={styles.customCheckbox}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
          <rect width='256' height='256' fill='none'></rect>
          <polyline
            points='216 72.005 104 184 48 128.005'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='16'
          ></polyline>
        </svg>
      </span>
      {labelText}
    </label>
  )
}
