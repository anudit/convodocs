const fs = require('fs');

let data = `APPLICATION_ID=${process.env.APPLICATION_ID}
API_KEY=${process.env.API_KEY}
`;

fs.writeFile(".env.local", data,
    {
        encoding: "utf8",
        flag: "w",
        mode: 0o666
    },
    (err) => {
        if (err) {
            console.log(err)
        };
    }
);
