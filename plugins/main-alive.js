let handler = async (m, { conn, text, usedPrefix, command }) => {
  // Sound
  let name = m.pushName || conn.getName(m.sender)
  var vn = 'https://cdn.jsdelivr.net/gh/Lazack28/Lazack-md@main/media/Alive.mp3'
  let url = 'https://github.com/Lazack28/Lazack-md'
  let murl = 'https://youtu.be/3j_EIP--2t8?si=4TFWV0On6Bl1wr-e'
  let img = 'https://i.imgur.com/drAZuH2.jpeg'
  let con = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '923263429027@s.whatsapp.net' } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  }
  let doc = {
    audio: {
      url: vn,
    },
    mimetype: 'audio/mpeg',
    ptt: true,
    waveform: [0, 25, 50, 100, 50, 25, 0],
    fileName: 'shizo',

    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        title: '𝗠𝗔𝗟𝗜𝗞 is ALIVE',
        body: 'Lazack md',
        thumbnailUrl: img,
        sourceUrl: 'https://chat.whatsapp.com/KrJhpZhgKxZLfHcyUZKOMw',
        mediaType: 1,
        renderLargerThumbnail: true,
      },
    },
  }

  await conn.sendMessage(m.chat, doc, { quoted: con })
}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive)$/i

export default handler
