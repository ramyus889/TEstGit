/* Utility types */
interface IProfile2 {
	name: string
	age: number
	isOwner: boolean
}

const profile5: Readonly<Pick<IProfile2, 'age'>> = {
	age: 25,
}

// profile5.age =234

// RECORD
const store: Record<string, number> = {
	bugatti: 10000000,
}
