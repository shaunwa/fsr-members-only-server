const fs = require('fs');
const { groups, requests, messages, users } = require('./fake-data');

fs.writeFileSync(
    'groups.json',
    JSON.stringify(groups),
    'utf-8',
);

fs.writeFileSync(
    'requests.json',
    JSON.stringify(requests),
    'utf-8',
);

fs.writeFileSync(
    'messages.json',
    JSON.stringify(messages),
    'utf-8',
);

fs.writeFileSync(
    'users.json',
    JSON.stringify(users),
    'utf-8',
);

console.log('Done!');