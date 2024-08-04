let encodeInput = document.getElementById('encode-input'); 
let encodeResult = document.getElementById('encode-result');
let encodeAnswer = document.getElementById('encode-answer');
let decodeInput = document.getElementById('decode-input');
let decodeResult = document.getElementById('decode-result');
let decodeAnswer = document.getElementById('decode-answer');

function isAlphabet(char){
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function Caesarencryption(event){
    event.preventDefault();
    let encryptedText = '';
    let increment = 3;
    for(let char of encodeInput.value){
        if(isAlphabet(char)){
            let unicodeOfChar = char.charCodeAt(0);
            if(char === char.toLowerCase()){
                let start = 'a'.charCodeAt(0);
                let logic = (unicodeOfChar - start + increment) % 26 + start;
                let encryptedChar = String.fromCharCode(logic); 
                encryptedText += encryptedChar;
            }
            else{
                let start = 'A'.charCodeAt(0);
                let logic = (unicodeOfChar - start + increment) % 26 + start;
                let encryptedChar = String.fromCharCode(logic); 
                encryptedText += encryptedChar;
            } 
        }
        else{
            encryptedText += char;
        }
    encodeAnswer.innerText = `${encryptedText}`
    encodeAnswer.style.color = 'black';
    }
}

encodeResult.addEventListener('click',Caesarencryption)

function caesarDecryption(event){
    event.preventDefault();
    let decryptedText = '';
    let increment = 3;
    for(let char of decodeInput.value){
        if(isAlphabet(char)){
            let unicodeOfChar = char.charCodeAt(0);
            if(char === char.toLowerCase()){
                let start = 'a'.charCodeAt(0);
                let logic = (unicodeOfChar - start - increment + 26) % 26 + start;
                let decryptedChar = String.fromCharCode(logic); 
                decryptedText += decryptedChar;
            }
            else{
                let start = 'A'.charCodeAt(0);
                let logic = (unicodeOfChar - start - increment + 26) % 26 + start;
                let decryptedChar = String.fromCharCode(logic); 
                decryptedText += decryptedChar;
            } 
        }
        else{
            decryptedText += char;
        }
    console.log(decryptedText)
    decodeAnswer.innerText = `${decryptedText}`
    decodeAnswer.style.color = 'black';
    }
}

decodeResult.addEventListener('click',caesarDecryption);