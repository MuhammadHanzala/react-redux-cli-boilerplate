
const userReducer = (
  state = {
    name: "No name assign yet",
    age: "No age assign yet please click on buttons..."
  }, action) => {
  switch (action.type) {
    case "SETNAME":

      return state = {
        name: 'Muneeb',
        age: '18'
      }
      // }
      break;
    case "SETAGE":
    return state = {
    name: "Hanzala",
    age: "89"
    }
    break;
    default:
      return state
  }
}

export default userReducer