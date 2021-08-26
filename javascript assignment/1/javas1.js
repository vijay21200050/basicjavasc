var str = `Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`
str = str.replace("9876535362","XXXXXXXXXX");
const word1 = str.split('?');
const word2 = word1.join('?[');
const word3 = word2.split('.');
const word4 = word3.join('.[');
const word5 = word4.split('[');
for(let i = 0 ; i < word5.length ; i++) {
	var word = word5[i].split(' ');
	if(word.length > 4) {
		console.log(word5[i]);
	}	
}
