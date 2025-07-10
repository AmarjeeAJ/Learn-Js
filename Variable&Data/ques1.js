// let nums = [[2, 4], [1, 6], [7, 9], [8, 10], [11, 13], [14, 17]]
// let sortednums = [[1, 3], [2, 6], [7, 9], [8, 10], [11, 13], [14, 17]]
// output = [[1, 6], [7, 10], [11, 13], [14, 17]]

/**
 * 
 * 1. Sort nums according to initial of range item
 * 2. Loop over nums array
 * 3. firstElem = [1, 3]
 * 4. secondElem = [2, 6]
 * 5. secondElem[0] < firstElem[1] // 2 < 3
 * 
 * 6. output.push([firstElem[0], max(secondElem[1], firstElem[1])]) 
 * 
 * 
 * arr = [12345, 23456789, 56789101112,234]
 */

/** 
 * arr = ['abc', abcd, 'abcdef', 'bcdef']
 * 
 * find min length string: 3
 * 
 */