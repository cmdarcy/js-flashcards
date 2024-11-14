// New cards and decks can be added to this file by creating a pull request
// Please see the readme for more information

const data = [
	{
		deckTitle: "arrayMethods",
		cards: [
			{
				front: "Array.filter( )",
				back: {
					description:
						"creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.",
					extra_info:
						"Returns: A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned",
				},
			},
			{
				front: "Array.map( )",
				back: {
					description:
						"creates a new array with the results of applying the provided function on every element in the calling array.",
					extra_info:
						"Returns: A new array containing the results of applying the provided function on every element in the calling array.",
				},
			},
			{
				front: "Array.reduce( )",
				back: {
					description:
						"applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
					extra_info: "Returns: The reduced value.",
				},
			},
		],
	},
	{
		deckTitle: "objectMethods",
		cards: [
			{
				front: "Object.keys( )",
				back: {
					description:
						"Returns an array of a given object's own property names.",
					extra_info:
						"Returns: An array of strings, containing the names of the properties of the object.",
				},
			},
			{
				front: "Object.values( )",
				back: {
					description:
						"Returns an array of a given object's own enumerable property values.",
					extra_info:
						"Returns: An array of property values of the given object.",
				},
			},
			{
				front: "Object.entries( )",
				back: {
					description:
						"Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.",
					extra_info:
						"Returns: An array of [key, value] pairs of the given object.",
				},
			},
		],
	},
	{ deckTitle: "stringMethods", cards: [] },
	{ deckTitle: "variables", cards: [] },
];

export default data;
