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

/**
 * Sorts an array of numbers using the selection sort algorithm.
 * @param array - The array of numbers to be sorted.
 * @returns An array of Move objects representing the steps taken during the sorting process.
 */
function selectionSort(array: number[]) {
	const moves: Move[] = []
	for (let i = 0; i < array.length - 1; i++) {
		let minIndex = i
		for (let j = i + 1; j < array.length; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j
			}
			moves.push({ indices: [i, j], swapped: false })
		}
		if (minIndex !== i) {
			const temp = array[i]
			array[i] = array[minIndex]
			array[minIndex] = temp
			moves.push({ indices: [i, minIndex], swapped: true })
		}
	}
	return moves
}

/**
 * Sorts an array of numbers using the insertion sort algorithm.
 * @param array - The array of numbers to be sorted.
 * @returns An array of Move objects representing the steps taken during the sorting process.
 */
function insertionSort(array: number[]) {
	const moves: Move[] = []
	for (let i = 1; i < array.length; i++) {
		let j = i
		while (j > 0 && array[j - 1] > array[j]) {
			const temp = array[j]
			array[j] = array[j - 1]
			array[j - 1] = temp
			moves.push({ indices: [j - 1, j], swapped: true })
			j--
		}
		moves.push({ indices: [j, i], swapped: false })
	}
	return moves
}

// Exports
export { bubbleSort, selectionSort, insertionSort }
