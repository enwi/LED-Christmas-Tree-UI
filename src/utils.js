/**
 * Generates a capitalized version of the input string
 * @function
 * @param {String} value - The input value
 * @return {String} The capitalized value
 */
export function capitalize (value) {
	if (!value) return ''
	value = value.toString()

	let separateWord = value.toLowerCase().split(' ');
	for (let i = 0; i < separateWord.length; i++) {
		separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
			separateWord[i].substring(1);
	}
	return separateWord.join(' ');
}
/**
 * Generates a readable string for a given second count
 * @function
 * @param {Number} seconds - The  number of seconds
 * @return {String} The readable time
 */
export function sec_to_human(seconds) {
	seconds = Number(seconds);
	let d = Math.floor(seconds / (3600*24));
	let h = Math.floor(seconds % (3600*24) / 3600);
	let m = Math.floor(seconds % 3600 / 60);
	let s = Math.floor(seconds % 60);

	if(h<10) h = "0"+h
	if(m<10) m = "0"+m
	if(s<10) s = "0"+s

	return d+"d "+h+":"+m+":"+s
}