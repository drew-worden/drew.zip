/**
 * Performs linear interpolation between two values.
 * @param a - The starting value.
 * @param b - The ending value.
 * @param t - The interpolation factor (between 0 and 1).
 * @returns The interpolated value between `a` and `b`.
 */
function lerp(a: number, b: number, t: number) {
	return a + (b - a) * t
}

// Exports
export { lerp }
