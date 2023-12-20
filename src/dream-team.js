const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let team = [];
  if (!Array.isArray(members)) {
    return false;
  }
  let k = 0
  while (k < members.length) {
    if (typeof members[k] === 'string') {
      team.push(members[k].trim()[0].toUpperCase());
    }
    k++;

  }

  return team.sort().join('');

}

module.exports = {
  createDreamTeam
};
