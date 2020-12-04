import { countPrimes } from './solution'
import 'mocha'
import { expect } from 'chai'

it('solution', function () {
    expect(countPrimes(10)).equal(4)
    expect(countPrimes(0)).equal(0)
    expect(countPrimes(1)).equal(0)
    expect(countPrimes(2)).equal(0)
})