function evenName(friends) {
  let name = [];
  for (const friend of friends) {
    if (friend.length % 2 == 0) {
      name.push(friend);
    }
  }
  return name;
}
const friendlist = evenName(["Raihan", "Manum", "Obaydullah", "Hafijur", "Shobuj"]);
console.log(friendlist);
