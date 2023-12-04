import { pathToString } from './pathToString'
import type { Path } from '../types'

describe('pathToString', () => {
  it('converts a path array to a string', () => {
    const examplePath: Path = ['foo', 0, 'bar']
    const queryString = pathToString(examplePath)
    expect(queryString).toEqual('foo[0].bar')
  })

  it('handles a path with a prefix', () => {
    const examplePath: Path = ['foo', 0, 'bar']
    const prefix = 'res'
    const queryString = pathToString(examplePath, prefix)
    expect(queryString).toEqual('res.foo[0].bar')
  })

  it('handles a path with string segments', () => {
    const examplePath: Path = ['one', 'two', 'three']
    const queryString = pathToString(examplePath)
    expect(queryString).toEqual('one.two.three')
  })

  it('handles an empty path', () => {
    const emptyPath: Path = []
    const queryString = pathToString(emptyPath)
    expect(queryString).toEqual('')
  })

  it('handles negative numbers in the path', () => {
    const examplePath: Path = ['foo', -1, 'bar']
    const queryString = pathToString(examplePath)
    expect(queryString).toEqual('foo[-1].bar')
  })
})
