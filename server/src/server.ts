import express, { response } from 'express';

const app = express();

// Endpoint
app.get('/ads', (req, res) => {
    return res.json([
        {id: 1, name: 'Gabriel'},
        {id: 2, name: 'Leonardo'},
        {id: 3, name: 'Camila'}
    ])
})

app.listen(3333)