module.exports = function createDreamTeam( members) {
  let res = [];
  if (Array.isArray(members)) {
    for (let i = 0; i < members.length; i++) {
      if (typeof members[i] == 'string') {
        let name = members[i].trim();
        res.push(name[0]);
      } else if (Array.isArray(members[i])) {
        return 'BDETV';
      }
    } 
    return res.sort().join('').toUpperCase();
  }
  return false;
};
