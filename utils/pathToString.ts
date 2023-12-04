import type { Path } from '../types'

/**
 * Converts a path array to a string representation.
 * @param path - The path array to convert.
 * @returns A string representation of the path.
 * @example
 * const examplePath: Path = ['foo', 0, 'bar'];
 * const queryString = pathToString(examplePath);
 * console.log(queryString); // Output: "foo[0].bar"
 */
export const pathToString = (path: Path, prefix: string = ''): string => {
  return path.reduce((result: string, segment) => {
    if (typeof segment === 'number') {
      return `${result}[${segment}]`
    } else {
      return result ? `${result}.${segment}` : segment
    }
  }, prefix)
}
