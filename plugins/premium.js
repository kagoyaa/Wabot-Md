//Created By Adul Alhy [Jangan dihapus ya bang :)]

let handler = async (m, { conn }) => {
  idis = await m.reply(`
╭─「 Shop  」
│ 
│ • Jadi User Premium : 20k / bulan
│ • Join Group : 10k / bulan
│ 
╰────
╭─「 Via  」
│ 
│ • Telkomsel : 082189387018 
│ • Dana : 082189387018
│ 
╰────
Kalo Mau Join Grup / Jadi Premium 
Silahkan Chat Kontak Yang Ada Dibawah Ini 
`.trim()) 
  
  conn.sendContact(m.chat, '6282189387018', 'Rasyid', m)
}
handler.help = ['premium', 'shop', 'infopremium']
handler.tags = ['info']
handler.command = /^(premium|infopremium)$/i

module.exports = handler
