const { generateMeta } = require('./controllers/openaiController')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Chat input: \n', generateMeta  )