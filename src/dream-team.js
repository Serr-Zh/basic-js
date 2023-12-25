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
  
  if (!members || !members.length || !Array.isArray(members)) {
    return false;
  }
  let team = '';
  let flagOfErrLen = false;
  // if (members = null || []) {
  //   return false;
  // }
  for (let i = 0; i < members.length; i += 1) {
    if (members[i] !== null && (typeof members[i] === 'string' || members[i] instanceof String)) {
      flagOfErrLen = true;
      let trimMem = members[i].trim();
      team += trimMem[0]; 
    }
  }
  if (!flagOfErrLen) {
    return false;
  }
  return team.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
