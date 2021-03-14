module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig.join('').replace(/,/g, '');
        let depth = [];
    for (let bracket of str) {
            let bracketsIndex = brackets.indexOf(bracket)

            if (bracketsIndex % 2 === 0) {
                
                if (bracket === brackets[bracketsIndex + 1] && depth[depth.length - 1] === bracketsIndex){
                    depth.pop();
                } else if (bracket === brackets[bracketsIndex + 1] && depth[depth.length - 1] !== bracketsIndex) {
                    depth.push(bracketsIndex)
                }
                else{
                    depth.push(bracketsIndex)
                }
            } 
            else {
                if (depth.pop() !== bracketsIndex-1){
                    return false;
                }
            }
            
        }
        return depth.length === 0

}
