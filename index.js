'use strict'

const cheerio = require('cheerio')
const axios = require('axios').default

module.exports = (() => {
    this.generate = async string => {
        const urlString = encodeURI(string)
        const html = await axios.get(`http://vanillicon.com/?seed=${urlString}`)
        const $ = cheerio.load(html.data)

        const avatarUrl = $('#link_textbox').val()

        if(Boolean(avatarUrl) == false) 
            throw new Error(`Couldn't find element`)

        return avatarUrl
    }

    return this
})()