export function taskFirst() {
	const task = 'I prefer const when i can.'
	return task;
}

export function getlast() {
	return ' is okay';
}

export function taskSecond() {
    let combination = 'But sometimes let';
	combination += getlast();

	return combination;
}
