"use strict";
const verifyUser = (user, sentValue) => {
    return (user.username === sentValue.username
        && user.password === sentValue.password);
};
const bdUser = { username: 'João', password: '123456' };
const sentUser = { username: 'João', password: '123456' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
//# sourceMappingURL=struturalTyping.js.map