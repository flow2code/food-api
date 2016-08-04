export function addPlace(name, address, email) {
	return {
		type: 'ADD_PLACE',
		name,
		address,
		email
	}
}
