const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: true},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 30, premium: false},
    {username: 'sergio58', age: 30, premium: true},
    ];

for (let user of users.filter(user => user.premium == true)){
    console.log("El usuario", user.username, "con una edad de", user.age, "años, es un usuario premium");
}

const noPremiumUsers = users.filter(user => user.premium == false);
console.log(noPremiumUsers);