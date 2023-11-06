const { Router } = require('express');

const router = Router();

router.get("/", (req, res)=>{
    res.send('GET');
});

router.post('/', (req, res) => {
    res.send('POST')
})

router.patch('/', (req, res) => {
    res.send('PATCH')
})

router.delete('/', (req, res) => {
    res.send('DELETE')
})

module.exports = router;