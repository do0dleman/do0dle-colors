import genMethodMap from "./genMethodMap.js";

const entriesArray = Array.from(genMethodMap.entries())
const genMethods = ['random', ...entriesArray.map(item => item[0])]

export default genMethods