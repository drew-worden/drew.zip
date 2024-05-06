// Interfaces
interface Location {
	x: number
	y: number
}

interface Move {
	indices: number[]
	swapped: boolean
}

// Exports
export type { Location, Move }
