'use client'

import { useState } from 'react'
import get from 'lodash/get'
import { JsonObject } from './JsonExplorer/JsonObject'
import { pathToString } from '../utils/pathToString'
import styles from './JsonExplorer.module.scss'
import type { Path } from '../types'

// component types
export type JsonDataValue = string | number | boolean | JsonData[]
export type JsonData = {
  [key: string]: JsonDataValue
}
type JsonExplorerProps = {
  data: JsonData
}
type Output = {
  path: string
  value: string
}

export const JsonExplorer = ({ data }: JsonExplorerProps): JSX.Element => {
  const [output, setOutput] = useState<Output>({
    path: '',
    value: '',
  })

  /**
   * Handles the click event on a JSON object key.
   * @param {Path} path - The path to the selected key.
   * @returns {void}
   */
  const handleClick = (path: Path): void => {
    setOutput({
      path: pathToString(path, 'res'),
      value: get(data, path).toString(),
    })
  }

  return (
    <div>
      <div className={styles.jsonObjectContainer}>
        <JsonObject data={data} onKeyClick={handleClick} />
      </div>

      {output.value && (
        <div data-testid='output'>
          <div>
            <strong>{output.path}</strong>
          </div>
          <div>{output.value}</div>
        </div>
      )}
    </div>
  )
}
