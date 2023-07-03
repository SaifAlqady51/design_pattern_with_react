import Express  from "express";
import cors from 'cors'

const app = Express();
app.use(Express.json())
app.use(Express.urlencoded())
app.use(cors())

let currentUser = {
    id:'7',
    name:'John',
    age:21,
    hairColor: 'white',
    hobbies: ['swimming','some shit','some unimportant stuff']
}

let users = [
    {
        id:'1',
        name:'John',
        age:21,
        hairColor:'red',
        hobbies:['swimming','bicycling','gaming']
    },
    {
        id:'2',
        name:'Samy',
        age:41,
        hairColor:'black',
        hobbies:['bi','football','gaming']
    },
    {
        id:'3',
        name:'rafael',
        age:21,
        hairColor:'brown',
        hobbies:['math', 'jumping','gaming']
    },
    {
        id:'4',
        name:'mo',
        age:31,
        hairColor:'black',
        hobbies:['kicking', 'bicycling','gaming']
    },
]

app.get('/current-user',(_req,res) => {
    res.json(currentUser)
})


app.get('/user/:id',(req,res) => {
    const {id} = req.params;
    res.json(users.find(user => user.id === id))
})

app.post('/user/:id', (req,res) => {


    const {id} = req.params;
    const updatedUser = req.body;

    users = users.map(user => user.id === id? updatedUser : user )
    res.json(users.find(user => user.id === id))
})

app.get('/',(_req,res) => {
    res.send('Welcome')
})


app.listen(8000,() => {
    console.log('listening on port 8000')
})