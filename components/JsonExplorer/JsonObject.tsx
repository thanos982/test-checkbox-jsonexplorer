import styles from '../JsonExplorer.module.scss'
import type { JsonData } from '../JsonExplorer'
import type { Path } from '../../types'

type JsonObjectProps = {
  data: JsonData
  onKeyClick: (path: Path) => void
  path?: Path
}

/**
 * Displays a JSON object as a list of key-value pairs.
 */
export const JsonObject = ({
  data,
  onKeyClick,
  path = [],
}: JsonObjectProps): JSX.Element => {
  /**
   * Renders the value of the JSON object key.
   * Strings are returned with single quotes.
   */
  const renderValue = (value: string | number | boolean): string => {
    if (typeof value === 'string') {
      return `'${value}'`
    }
    return value.toString()
  }

  const keyValuePairs = Object.entries(data)

  return (
    <>
      {data && (
        <ul className={styles.jsonObject}>
          {keyValuePairs.map(([key, value], index) => (
            <li key={index} className={styles.keyValuePair}>
              {/* Value is not an array: keys are clickable  */}
              {!Array.isArray(value) && (
                <>
                  <div className={styles.key}>
                    <button
                      type='button'
                      onClick={(e) => {
                        e.preventDefault()
                        onKeyClick([...path, key])
                      }}
                    >
                      {key}
                    </button>
                  </div>
                  <div className={styles.value}>{renderValue(value)}</div>
                </>
              )}

              {/* Value is an array: keys are not clickabe.
              Values are displayed as nested JSON objects */}
              {Array.isArray(value) && (
                <>
                  <div className={styles.key}>{key}</div>
                  <div className={styles.value}>
                    {value.map((subData, index) => (
                      <div key={index} className={styles.array}>
                        <JsonObject
                          data={subData}
                          path={[...path, key, index]}
                          onKeyClick={onKeyClick}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
