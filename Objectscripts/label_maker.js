let myInfo = {
    name: "John Cena",
    address: "556 Glock Street",
    city: "New York",
    state: "NY",
    zip: "10000"
};

function printContact(myInfo) {
console.log(myInfo.name);
console.log(myInfo.address);
console.log(myInfo.city + ", " + myInfo.state + ", " + myInfo.zip);
};

printContact(myInfo);