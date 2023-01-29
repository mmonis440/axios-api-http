const axios = require('axios');

async function doget () { 
    let res = await axios.get('https://api.github.com/users/mmonis440');

    console.log(`status: ${res.status}`)
    console.log(`method: ${res.headers.server}`)
    console.log(`date: ${res.headers.date}`)
    console.log(`api-key: ${res.id}`)
 }

doget();