const openai = require('../config/openaiConfig')

const generateMeta = async (chat) => {
    const reply = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: `${chat}`
            }
        ],
        max_tokens: 100
    })

    console.log(reply.data.choices[0].message)

    const tags = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: 'user',
                content: `Come up with 10 keywords for a YouTube video called ${chat}`
            }
        ],
        max_tokens: 100
    })

    console.log(tags.data.choices[0].message)
}

module.exports = { generateMeta }