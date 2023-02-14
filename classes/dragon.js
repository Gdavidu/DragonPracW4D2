// Your code here
class Dragon {
  constructor(name, color){
  this.name = name
  this.color = color
  }
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }
  static getDragons(...drags) {
    let dragNames = [];
    for (let dragons of drags){
      dragNames.push(dragons.name)
    }
    return dragNames
  }
}
module.exports = Dragon;
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
