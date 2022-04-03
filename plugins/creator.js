const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;Rasyid;;;'
                    + 'FN:Rasyid\n' // full name
                    + 'ORG:Rasyid;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6282260624836:+62 822-6062-4836\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'Rasyid', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
