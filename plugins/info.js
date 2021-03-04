let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Reyali/SugarDady/Codet
Developer: @Nurotomo
Github: 
https://github.com/reyali

*Sosmed :*
Kritik kami di sosmed ataupun Email
Instagram: http://instagram.com/reyali_adji
➥ Email: reyaliadji@gmail.com

*Thanks To :*
Nurotomo (Developer)
SugarDady (Creator)
Padil Samiri 
Tentunya Yg Paling Utama Adalah
Thanks To ALLAH.SWT


╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

