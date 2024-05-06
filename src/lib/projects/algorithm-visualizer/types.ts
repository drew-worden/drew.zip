// Interfaces
interface QueueEntry {
	x: number
	y: number
	r: number
	g: number
	b: number
}

interface Move {
	indices: number[]
	swapped: boolean
}

interface RGB {
	r: number
	g: number
	b: number
}

// Exports
export type { QueueEntry, Move, RGB }
