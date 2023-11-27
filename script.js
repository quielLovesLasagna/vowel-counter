"use strict";

const textArea = document.getElementById("inputText");
const button = document.querySelector("button");

function checkVowels() {
	const text = textArea.value.toLoweCase();
	let vowelCount = 0;

	for (let i = 0; i < text.length; i++) {
		let char = text[i];
	}
}

function isVowel(char) {
	const vowels = ["a", "e", "i", "o", "u"];
	return vowels.includes(char);
}

button.addEventListener("click", checkVowels);
