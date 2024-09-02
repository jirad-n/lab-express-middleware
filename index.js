const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/images', express.static('public/images'));
app.use('/assets/images', express.static('public/images'));

const todoRouter = express.Router();
app.use('/todos', todoRouter);

todoRouter.get('/',(req, res, next)=>{
    res.status(200).json({message: `${req.method} todos`});
});
todoRouter.post('/',(req, res, next)=>{
    res.status(200).json({message: `${req.method} todos`});
});
todoRouter.put('/:todoId',(req, res, next)=>{
    res.status(200).json({message: `${req.method} todos`});
});
todoRouter.patch('/:todoId',(req, res, next)=>{
    res.status(200).json({message: `${req.method} todos`});
});
todoRouter.delete('/:todoId',(req, res, next)=>{
    res.status(200).json({message: `${req.method} todos`});
});

app.get('/dog', async (req, res, next) => {
    try {
        const axiosRes = await axios.get('https://dog.ceo/api/breeds/image/random');
        res.status(200).json({image: axiosRes.data.message});
    } catch(err) {
        next(err);
    }
})

app.use((err, req, res, next) => {
    res.status(500).json({message: err.message});
})

// app.use((req, res) => {
//     res.status(404).json({message: 'path not found'})
// })

// app.use(express.static('public'));
// app.use('/assets/images/', express.static('public'));

app.listen(8004, ()=>{console.log('server running')});