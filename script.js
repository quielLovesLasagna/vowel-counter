"use strict";

const textArea = document.getElementById("inputText");
const button = document.querySelector("button");
const result = document.getElementById("result");

function checkVowels() {
	const text = textArea.value.toLowerCase();

	let vowelCount = 0;
	for (let i = 0; i < text.length; i++) {
		let char = text[i];
		if (isVowel(char)) {
			vowelCount++;
		}
	}

	result.textContent = `Total Vowel(s): ${vowelCount}`;
}

function isVowel(char) {
	const vowels = ["a", "e", "i", "o", "u"];
	return vowels.includes(char);
}

button.addEventListener("click", checkVowels);
