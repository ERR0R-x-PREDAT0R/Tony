let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
    let devil = `ㅤ
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch("https://imgur.com/a/gFNHtYm.jpeg")).buffer(), devil, 'ᴛᴏɴʏ sᴇʀ  ʙʏ ᴀʟɪɴsʜᴀɴ\n\╔╗╔╗╔══╗╔══╗\n\║╚╝║║╔╗║╚║║╝\n\║╔╗║║╠╣║╔║║╗\n\╚╝╚╝╚╝╚╝╚══╝ \n\n\ https://github.com/ERR0R-x-PREDAT0R/Tony-Ser \n\n\ © ī.am ꪶᴛᴏɴʏ sᴇʀꫂ⁩⁴⁰⁴⁩' , '❤️', '.❤️', '🙂', ',🙂')
}
handler.tags = ['main']
handler.help = ['git']
handler.command = /^(git)$/i
module.exports = handler
