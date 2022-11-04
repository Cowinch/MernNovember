const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];
//dont forget to take server down and up when making changes

module.exports = (app) => {
    // all routes in a server must start with /api
    app.get("/api/demo", (req, res) => {
        console.log("inside '/api/demo'")
        res.json({message: "ok"})
    })

    app.get("/api/user", (req, res) => {
        //whatever we send here is what React axios will receive in the .then()
        console.log(users)
        res.json({users})
    })

    //READ ONE
    app.get('/api/users/:var', (req, res) => {
        console.log(req.params)
        console.log(req.params.var)
        console.log(users[req.params.var])
        res.json({
            idRequested: req.params.unicorn,
            data: users[req.params.var]
        })
    })

    app.post("api/users", (req, res) => {
        console.log(req.body)
        users.push(req.body)
        res.json({
            message: "ok"
        })
    })
}