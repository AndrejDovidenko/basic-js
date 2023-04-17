const { NotImplementedError } = require("../extensions/index.js");

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
  if (!Array.isArray(members)) {
    return false;
  }
  for (let j = 0; j < members.length; j++) {
    if (typeof members[j] !== "string") {
      delete members[j];
    }
  }
  members = members.map((i) => i.trim());
  let sum = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let b = members.join(",").toUpperCase().split(",");
      sum += b[i][0];
    }
  }
  return sum.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
