// Imports
import type { Move } from "./types"

/**
 * Sorts an array of numbers using the bubble sort algorithm.
 * @param array - The array of numbers to be sorted.
 * @returns An array of Move objects representing the moves made during the sorting process.
 */
function bubbleSort(array: number[]) {
	const moves: Move[] = []
	let swapped: boolean
	do {
		swapped = false
		for (let i = 1; i < array.length; i++) {
			if (array[i - 1] > array[i]) {
				const temp = array[i - 1]
				array[i - 1] = array[i]
				array[i] = temp
				swapped = true
				moves.push({ indices: [i - 1, i], swapped: true })
			} else {
				moves.push({ indices: [i - 1, i], swapped: false })
			}
		}
	} while (swapped)

	return moves
}

// Exports
export { bubbleSort }
