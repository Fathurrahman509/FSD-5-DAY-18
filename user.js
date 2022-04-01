import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let user = [
]

router.get('/', (req, res) => {
    // console.log(user);
    
    res.send(user);
    
});

router.post('/', (req, res) => {
    // console.log('post route reached');
    // console.log(req.body);

    const user = req.body;

    // const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    // const userWithID = {...user, id: uuidv4()};

    user.push({...user, id: uuidv4()});
    
    res.send(`User with name ${user.firstName} added to the database`);
    
});

router.post('/', (req, res) => {
    // console.log('post route reached');
    // console.log(req.body);

    const user = req.body;

    // const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
    // const userWithID = {...user, id: uuidv4()};

    user.push({...user, id: uuidv4()});
    
    res.send(`User with name ${user.firstName} added to the database`);
    
});

router.get('/:id', (req, res) => {
    // console.log(req.params);
    
    const { id } = req.params;
    const findUser =  user.find((user) => user.id === id)
    res.send(req.params);
    
});

router.put('/', (req, res) => {
    const { id } = req.params;
    user =  user.find((user) => user.id === id)

    res.send(`data with id = ${req.params.id} has been updated`);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    user = user.filter((user) => user.id == id)
    res.send(`User with the ${id} deleted from database`);
    
    
});

export default router;
