const express = require('express')
const app = express();

app.use('/assets', express.static(__dirname + '/dist/assets'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/dist/index.html`);
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))