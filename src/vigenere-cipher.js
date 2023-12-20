const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    let upperMessage = message.toUpperCase();
    let upperKey = key.toUpperCase();
    let ind = 0;
    let vigener = '';

    let k = 0;
    while (k < upperMessage.length) {
      if (!this.alphabet.includes(upperMessage[k])) {
        vigener = vigener + upperMessage[k];
        k++;
        continue;
      }
      vigener = vigener + this.alphabet[
        (this.alphabet.indexOf(upperMessage[k]) + this.alphabet.indexOf(upperKey[ind++ % upperKey.length])) % this.alphabet.length
      ];
      k++;
    }
    return this.direct ? vigener : vigener.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    let upperMessage = message.toUpperCase();
    let upperKey = key.toUpperCase();
    let ind = 0;
    let phrase = '';
    let k = 0;
    while (k < upperMessage.length) {
      if (!this.alphabet.includes(upperMessage[k])) {
        phrase = phrase + upperMessage[k];
        k++;
        continue;
      }

      let dec = this.alphabet.indexOf(upperMessage[k]) - this.alphabet.indexOf(upperKey[ind++ % upperKey.length]) % this.alphabet.length;

      if (dec >= 0)
        phrase = phrase + this.alphabet[dec];
      else
        phrase = phrase + this.alphabet[this.alphabet.length + dec];
      k++;
    }
    return this.direct ? phrase : phrase.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
