import styles from './Checkbox.module.scss'

type CheckboxProps = {
  hideInput?: boolean
}

export const Checkbox = ({ hideInput = true }: CheckboxProps): JSX.Element => {
  return (
    <label className={styles.label}>
      <input type='checkbox' className={`${hideInput && styles.srOnly}`} />
      <span className={styles.customCheckbox}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
          <rect width='256' height='256' fill='none'></rect>
          <polyline
            points='216 72.005 104 184 48 128.005'
            fill='none'
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='16'
          ></polyline>
        </svg>
      </span>
    </label>
  )
}