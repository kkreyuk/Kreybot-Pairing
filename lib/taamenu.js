const chalk = require('chalk')
const fs = require('fs')

global.menu = `
ɴᴀᴍᴀ ꜱᴀ𝐲ᴀ ᴀᴅᴀʟᴀʜ *YASSxOFC*

ʙᴏᴛ ɪɴɪ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ 𝐬ᴇʙᴀɢᴀɪ *ᴇᴅᴜᴋᴀ𝐬ɪ ᴘᴇʟᴀᴊᴀʀᴀɴ*, *ᴜɴᴅᴜʜᴀɴ ᴍᴇᴅɪᴀ*, *ɢᴀᴍᴇ*, *ᴘᴇɴᴊᴀɢᴀ ɢʀᴜᴘ*, *ᴅᴀɴ ʟᴀɪɴɴʏᴀ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇᴍʙᴜᴀᴛ ᴋᴀᴍᴜ ʟᴇʙɪʜ ᴍᴜᴅᴀʜ ᴜɴᴛᴜᴋ ᴍᴇɴᴊᴀʟᴀɴɪ ʜᴀʀɪ-ʜᴀʀɪ:>

 *✎ ᴏᴡɴᴇʀ : YASSxOFC*
 
ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀ𝐬ᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ 𝐬ɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ᴜɴᴛᴜᴋ ᴍᴇɴᴀɴʏᴀᴋᴀɴ *.ᴏᴡɴᴇʀ*

 ✎ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ғɪᴛᴜʀ ʙᴏᴛ: *.𝐚𝐥𝐥𝐦𝐞𝐧𝐮*
 ✎ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ 𝐬ɪᴍᴘᴇʟ ᴍᴇɴᴜ: *𝐬ɪᴍᴘᴇʟ*

𝐜𝐨𝐩𝐲𝐫𝐢𝐠𝐡𝐭 *©yassxofc* 𝐚𝐧𝐝 𝐚𝐥𝐥 𝐫𝐢𝐠𝐡𝐭𝐬 𝐫𝐞𝐬𝐞𝐫𝐯𝐞𝐝`

global.simpel = `
❏═┅═━–〈 Simple Menu

✎ Allmenu
✎︎ Tools
✎ Aimenu
✎︎ Nsfw
✎︎ Gamemenu
✎︎ Islammenu
✎︎ Bugmenu
✎︎ Rpg
✎︎ Groupmenu
✎ Beritamenu
✎︎ Funmenu
✎ Ownemenu
✎︎ Addmenu
✎︎ Randommenu
✎︎ Downloadmenu
✎ Textmaker
`

global.taall = `
⦿ ───『𝗔𝗹𝗹 𝗠𝗲𝗻𝘂』───

  ➤ *𝗜𝗻𝗳𝗼 𝗠𝗲𝗻𝘂*
  
✎ .sc
✎ .tqto
✎ .donasi
✎ .owner
✎ .bot
✎ .setppgc
✎ .git
✎ .daftar

  ➤ *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂*
  
✎ .welcome on/off
✎ .antilimk on/of
✎ .antitoxic on/off
✎ .pushkontak (teksnya)
✎ .pushcontid (id grup)
✎ .bcgc (teksnya)
✎ .hidetag (teksnya)
✎ .kick (628xxx)
✎ .𝐚𝐝𝐝 (𝟔𝟐𝟖𝐱𝐱)
✎ .𝐩𝐫𝐨𝐦𝐨𝐭𝐞 (𝟔𝟐𝟖𝐱𝐱)
✎ .𝐝𝐞𝐦𝐨𝐭𝐞 (𝟔𝟐𝟖𝐱𝐱)
✎ .𝐬𝐞𝐧𝐝𝐥𝐢𝐧𝐤𝐠𝐜 (𝟔𝟐𝟖𝐱𝐱)
✎ .𝐞𝐝𝐢𝐭𝐠𝐫𝐨𝐮𝐩 𝐜𝐥𝐨𝐬𝐞 / 𝐨𝐩𝐞𝐧
✎ .𝐞𝐝𝐢𝐭𝐢𝐧𝐟𝐨 𝐨𝐧 / 𝐨𝐟𝐟
✎ .𝐣𝐨𝐢𝐧 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐞𝐝𝐢𝐭𝐬𝐮𝐛𝐣𝐞𝐤 (𝐭𝐞𝐱𝐭𝐧𝐲𝐚)
✎ .𝐞𝐝𝐢𝐭𝐝𝐞𝐬𝐤 (𝐭𝐞𝐱𝐭𝐧𝐲𝐚)
✎ .𝐭𝐚𝐠𝐚𝐥𝐥 (𝐭𝐞𝐱𝐭𝐧𝐲𝐚)
✎ .𝐢𝐧𝐬𝐩𝐞𝐜𝐭 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐥𝐢𝐧𝐤𝐠𝐫𝐨𝐮𝐩
✎ .𝐫𝐞𝐬𝐞𝐭𝐥𝐢𝐧𝐤𝐠𝐜
✎ .𝐩𝐫𝐨𝐦𝐨𝐭𝐞𝐚𝐥𝐥
✎ .𝐝𝐞𝐦𝐨𝐭𝐞𝐚𝐥𝐥
✎ .𝐥𝐚𝐫𝐚𝐧𝐠𝐚𝐧
✎ .𝐯𝐢𝐫𝐠𝐚𝐦
✎ .𝐛𝐮𝐚𝐭𝐬𝐰
✎ .𝐛𝐮𝐚𝐭𝐬𝐰𝐢𝐦𝐚𝐠𝐞
✎ .𝐛𝐮𝐚𝐭𝐬𝐰𝐯𝐢𝐝𝐞𝐨
✎ .𝐬𝐰𝐢𝐧
✎ .𝐯𝐧𝐬𝐰
✎ .𝐛𝐮𝐚𝐭𝐬𝐰𝐩𝐭𝐯
✎ .𝐭𝐨𝐩𝐭𝐯
✎ .𝐛𝐮𝐚𝐭𝐬𝐰𝐬

  ➤ *𝐑𝐏𝐆*
  
✎ .𝐢𝐧𝐯𝐞𝐧𝐭𝐨𝐫𝐲
✎ .𝐦𝐢𝐧𝐢𝐧𝐠
✎ .𝐡𝐮𝐧𝐭
✎ .𝐛𝐮𝐲
✎ .𝐬𝐞𝐥𝐥
✎ .𝐥𝐞𝐚𝐝𝐞𝐫𝐛𝐨𝐚𝐫𝐝
✎ .𝐡𝐞𝐚𝐥

  ➤ *𝗔𝗶 𝗠𝗲𝗻𝘂*
  
✎ .𝐚𝐢
✎ .𝐫𝐲𝐨
✎ .𝐦𝐢𝐤𝐮
✎ .𝐥𝐮𝐟𝐟𝐲
✎ .𝐳𝐞𝐭𝐚
✎ .𝐜𝐡𝐚𝐜𝐚

  ➤ *𝗧𝗼𝗼𝗹𝘀*
  
✎ .𝐢𝐠𝐬𝐭𝐚𝐥𝐤
✎ .𝐭𝐨𝐦𝐩𝟒
✎ .𝐭𝐨𝐦𝐩𝟑
✎ .𝐭𝐨𝐚𝐮𝐝
✎ .𝐭𝐨𝐯𝐧
✎ .𝐭𝐨𝐚𝐮𝐝𝐢𝐨
✎ .𝐭𝐨𝐠𝐢𝐟
✎ .𝐭𝐨𝐮𝐫𝐥
✎ .𝐬𝐦𝐞𝐦𝐞
✎ .𝐬𝐭𝐚𝐥𝐤𝐭𝐢𝐤𝐭𝐨𝐤
✎ .𝐢𝐧𝐟𝐨𝐠𝐞𝐦𝐩𝐚
✎ .𝐟𝐟𝐬𝐭𝐚𝐥𝐤
✎ .𝐭𝐱𝐭𝟐𝐢𝐦𝐠
✎ .𝟐𝐢𝐦𝐠
✎ .𝐡𝐝
✎ .𝐦𝐲𝐢𝐩
✎ .𝐠𝐢𝐭𝐡𝐮𝐛𝐜𝐥𝐨𝐧𝐞
✎ .𝐦𝐞𝐧𝐟𝐞𝐬
✎ .𝐟𝐛𝐯𝐢𝐝𝐞𝐨 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐟𝐛𝐫𝐞𝐞𝐥𝐬 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐢𝐠 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐢𝐠𝐫𝐞𝐞𝐥𝐬 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐭𝐰𝐢𝐭𝐯𝐢𝐝𝐞𝐨 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐭𝐢𝐤𝐭𝐨𝐤𝐯𝐢𝐝𝐞𝐨 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐲𝐭𝐦𝐩𝟑 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐲𝐭𝐦𝐩𝟒 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐲𝐭𝐬𝐞𝐚𝐫𝐜𝐡𝟐 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐩𝐥𝐚𝐲 (𝐪𝐮𝐞𝐫𝐲)
✎ .𝐲𝐭𝐫𝐞𝐞𝐥𝐬 (𝐥𝐢𝐧𝐤𝐧𝐲𝐚)
✎ .𝐠𝐞𝐭𝐦𝐮𝐬𝐢𝐜 (𝐫𝐞𝐩𝐥𝐲 𝐡𝐚𝐬𝐢𝐥)
✎ .𝐠𝐞𝐭𝐯𝐢𝐝𝐞𝐨 (𝐫𝐞𝐩𝐥𝐲 𝐡𝐚𝐬𝐢𝐥)
✎ .𝐪𝐫
✎ .𝐬𝐭𝐢𝐜𝐤𝐞𝐫
✎ .𝐤𝐚𝐥𝐤𝐮𝐥𝐚𝐭𝐨𝐫

  ➤ *𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂*
  
✎ .𝐬𝐞𝐰𝐚
✎ .𝐧𝐨𝐩𝐞
✎ .𝐭𝐮𝐭𝐨𝐫𝐢𝐚𝐥
✎ .𝐰𝐦
✎ .𝐣𝐨𝐝𝐨𝐡
✎ .𝐰𝐦𝐯𝐢𝐝𝐞𝐨
✎ .𝐞𝐦𝐨𝐣𝐢𝐦𝐢𝐱
✎ .𝐞𝐦𝐨𝐣𝐢𝐦𝐢𝐱𝟐
✎ .𝐚𝐭𝐭𝐩 (𝐭𝐞𝐱𝐭𝐧𝐲𝐚)
✎ .𝐭𝐭𝐩 (𝐭𝐞𝐱𝐭𝐧𝐲𝐚)
✎ .𝐚𝐟𝐤 (𝐭𝐞𝐱𝐭𝐧𝐲𝐚)
✎ .𝐠𝐚𝐦𝐛𝐚𝐫 (𝐭𝐞𝐱𝐭𝐧𝐲𝐚)
✎ .𝐪𝐮𝐨𝐭𝐞𝐬𝐚𝐧𝐢𝐦𝐞
✎ .𝐟𝐚𝐤𝐭𝐚𝐮𝐧𝐢𝐤
✎ .𝐤𝐚𝐭𝐚𝐛𝐢𝐣𝐚𝐤
✎ .𝐩𝐚𝐧𝐭𝐮𝐧
✎ .𝐛𝐮𝐜𝐢𝐧
✎ .𝐪𝐮𝐨𝐭𝐞𝐬
✎ .𝐝𝐚𝐫𝐤𝐣𝐨𝐤𝐞𝐬
✎ .𝐠𝐨𝐨𝐠𝐥𝐞
✎ .𝐜𝐨𝐮𝐩𝐥𝐞
✎ .𝐜𝐨𝐟𝐟𝐞
✎ .𝐠𝐞𝐭𝐧𝐚𝐦𝐞
✎ .𝐠𝐞𝐭𝐩𝐢𝐜
✎ .𝐬𝐞𝐭𝐩𝐩𝐠𝐫𝐨𝐮𝐩
✎ .𝐥𝐢𝐫𝐢𝐤
✎ .𝐜𝐞𝐫𝐩𝐞𝐧
✎ .𝐪𝐜𝐢𝐦𝐠
✎ .𝐜𝐞𝐫𝐢𝐭𝐚𝐡𝐨𝐫𝐨𝐫
✎ .𝐜𝐮𝐚𝐜𝐚

  ➤ *ᴀᴅᴠᴀɴᴄᴇᴅ*
  
✎ .>
✎ .=>
✎ .$

  ➤ *𝗠𝗲𝗻𝘂 𝗚𝗮𝗺𝗲*
  
✎ .ᴛᴛᴄ
✎ .ᴅᴇʟᴛᴄ
✎ .ꜱᴜɪᴛᴘᴠᴘ
✎ .ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
✎ .ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
✎ .ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
✎ .ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
✎ .ᴛᴇʙᴀᴋ ʟᴀɢᴜ
✎ .ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
✎ .ꜰᴀᴍɪʟʏ𝟏𝟎𝟎
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ᴇ𝐱ᴛʀᴇᴍᴇ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ𝟐

  ➤ *𝗕𝗲𝗿𝗶𝘁𝗮 𝗠𝗲𝗻𝘂*
  
✎ ..𝐟𝐚𝐣𝐚𝐫
✎ .𝐜𝐧𝐧
✎ .𝐥𝐚𝐲𝐚𝐫𝐤𝐚𝐜𝐚
✎ .𝐜𝐧𝐛𝐜
✎ .𝐭𝐫𝐢𝐛𝐮𝐧
✎ .𝐢𝐧𝐝𝐨𝐳𝐨𝐧𝐞
✎ .𝐤𝐨𝐦𝐩𝐚𝐬
✎ .𝐝𝐞𝐭𝐢𝐤
✎ .𝐝𝐚𝐢𝐥𝐲
✎ .𝐢𝐧𝐞𝐰𝐬
✎ .𝐨𝐤𝐞𝐳𝐨𝐧𝐞
✎ .𝐬𝐢𝐧𝐝𝐨
✎ .𝐭𝐞𝐦𝐩𝐨
✎ .𝐚𝐧𝐭𝐚𝐫𝐚
✎ .𝐤𝐨𝐧𝐭𝐚𝐧
✎ .𝐦𝐞𝐫𝐝𝐞𝐤𝐚
✎ .𝐣𝐚𝐥𝐚𝐧𝐭𝐢𝐤𝐮𝐬-𝐦𝐞𝐦𝐞

  ➤ *𝗠𝗲𝗻𝘂 𝗢𝘄𝗻𝗲𝗿*
  
✎ .𝐬𝐞𝐭𝐩𝐩𝐛𝐨𝐭
✎ .𝐚𝐝𝐝𝐩𝐫𝐞𝐦 (𝟔𝟐𝟖𝐱𝐱)
✎ .𝐝𝐞𝐥𝐩𝐫𝐞𝐦 (𝟔𝟐𝟖𝐱𝐱)
✎ .𝐥𝐢𝐬𝐭𝐩𝐫𝐞𝐦
✎ .𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐚𝐝𝐝 (𝟔𝟐𝟖𝐱𝐱)
✎ .𝐩𝐞𝐧𝐠𝐠𝐮𝐧𝐚 𝐝𝐞𝐥 (𝟔𝟐𝟖𝐱𝐱)
✎ .𝐥𝐢𝐬𝐭𝐛𝐚𝐧
✎ .𝐡𝐚𝐩𝐮𝐬𝐝𝐛 (𝟔𝟐𝟖𝐱𝐱@𝐬.𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩.𝐧𝐞𝐭)
✎ .𝐥𝐢𝐬𝐭𝐝𝐛
✎ .𝐛𝐥𝐨𝐜𝐤
✎ .𝐩𝐩𝐩𝐚𝐧𝐣𝐚𝐧𝐠
✎ .𝐮𝐧𝐛𝐥𝐨𝐜𝐤

  ➤ *𝗜𝘀𝗹𝗮𝗺 𝗠𝗲𝗻𝘂*
  
✎ .𝐣𝐚𝐝𝐰𝐚𝐥𝐬𝐡𝐨𝐥𝐚𝐭
✎ .𝐤𝐢𝐬𝐚𝐡𝐧𝐚𝐛𝐢
✎ .𝐚𝐥𝐪𝐮𝐫𝐚𝐧𝐚𝐮𝐝𝐢𝐨
✎ .𝐚𝐬𝐦𝐚𝐮𝐥𝐡𝐮𝐬𝐧𝐚
✎ .𝐚𝐥𝐪𝐮𝐫𝐚𝐧
✎ .𝐥𝐢𝐬𝐭𝐬𝐮𝐫𝐚𝐡

  ➤ *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂*
✎ .ᴀʀᴛɪɴᴀᴍᴀ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴀʀᴛɪᴍɪᴍᴘɪ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ʀᴇᴊᴇᴋɪ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴘᴇᴋᴇʀᴊᴀᴀɴ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴀʀᴛɪᴛᴀʀᴏᴛ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ʜᴀʀɪꜱᴀɴɢᴀʀ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ʜᴀʀɪʙᴀɪᴋ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ꜰᴇɴɢꜱʜᴜɪ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ɴᴀɢᴀʜᴀʀɪ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ʜᴀʀɪɴᴀᴀꜱ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴡᴇᴛᴏɴ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴀʀᴀʜʀᴇᴊᴇᴋɪ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ꜱɪꜰᴀᴛ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴍᴇᴍᴀɴᴄɪɴɢ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴍᴀꜱᴀꜱᴜʙᴜʀ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ᴢᴏᴅɪᴀᴋ (ᴛᴇ𝐱ᴛɴʏᴀ)
✎ .ꜱʜɪᴏ (ᴛᴇ𝐱ᴛɴʏᴀ)

  ➤ *𝗖𝘂𝗰𝗶 𝗠𝗮𝘁𝗮*
  
✎ .𝐜𝐞𝐜𝐚𝐧𝐢𝐧𝐝𝐨
✎ .𝐜𝐞𝐜𝐚𝐧𝐜𝐡𝐢𝐧𝐚
✎ .𝐜𝐞𝐜𝐚𝐧𝐡𝐢𝐣𝐚𝐛𝐞𝐫
✎ .𝐜𝐞𝐜𝐚𝐧𝐦𝐚𝐥𝐚𝐲𝐬𝐢𝐚
✎ .𝐜𝐞𝐜𝐚𝐧𝐯𝐢𝐞𝐭𝐧𝐚𝐦
✎ .𝐜𝐞𝐜𝐚𝐧𝐤𝐨𝐫𝐞𝐚
✎ .𝐜𝐞𝐜𝐚𝐧𝐣𝐞𝐩𝐚𝐧
✎ .𝐜𝐞𝐜𝐚𝐧
✎ .𝐚𝐫𝐭
✎ .𝐚𝐰𝐨𝐨
✎ .𝐛𝐭𝐬
✎ .𝐜𝐨𝐠𝐚𝐧
✎ .𝐞𝐥𝐚𝐢𝐧𝐚
✎ .𝐩𝐚𝐩𝐭𝐭 𝐟𝐨𝐭𝐨/𝐯𝐢𝐝𝐞𝐨
✎ .𝐞𝐱𝐨
✎ .𝐞𝐥𝐟
✎ .𝐞𝐬𝐭𝐞𝐭𝐢𝐜
✎ .𝐤𝐚𝐧𝐧𝐚
✎ .𝐥𝐨𝐥𝐢
✎ .𝐧𝐞𝐤𝐨𝟐
✎ .𝐰𝐚𝐢𝐟𝐮
✎ .𝐬𝐡𝐨𝐭𝐚
✎ .𝐡𝐮𝐬𝐛𝐮
✎ .𝐬𝐚𝐠𝐢𝐫𝐢
✎ .𝐬𝐡𝐢𝐧𝐨𝐛𝐮
✎ .𝐦𝐞𝐠𝐮𝐦𝐢𝐧
✎ .𝐰𝐚𝐥𝐥𝐧𝐢𝐦𝐞
✎ .𝐪𝐮𝐨𝐭𝐞𝐬𝐢𝐦𝐚𝐠𝐞
✎ .𝐧𝐞𝐤𝐨
✎ .𝐰𝐚𝐢𝐟𝐮
✎ .𝐤𝐢𝐥𝐥
✎ .𝐩𝐚𝐭
✎ .𝐥𝐢𝐜𝐤
✎ .𝐛𝐢𝐭𝐞
✎ .𝐲𝐞𝐞𝐭
✎ .𝐛𝐨𝐧𝐤
✎ .𝐰𝐢𝐧𝐤
✎ .𝐩𝐨𝐤𝐞
✎ .𝐧𝐨𝐦
✎ .𝐬𝐥𝐚𝐩
✎ .𝐬𝐦𝐢𝐥𝐞
✎ .𝐰𝐚𝐯𝐞
✎ .𝐛𝐥𝐮𝐬𝐡
✎ .𝐬𝐦𝐮𝐠
✎ .𝐠𝐥𝐨𝐦𝐩
✎ .𝐡𝐚𝐩𝐩𝐲
✎ .𝐝𝐚𝐧𝐜𝐞
✎ .𝐜𝐫𝐢𝐧𝐠𝐞
✎ .𝐡𝐢𝐠𝐡𝐟𝐢𝐯𝐞
✎ .𝐡𝐚𝐧𝐝𝐡𝐨𝐥𝐝

  ➤ *𝗔𝗱𝗱 𝗠𝗲𝗻𝘂*
✎ .𝐬𝐞𝐭𝐜𝐦𝐝
✎ .𝐝𝐞𝐥𝐜𝐦𝐝
✎ .𝐥𝐢𝐬𝐭𝐜𝐦𝐝
✎ .𝐬𝐞𝐭𝐩𝐩𝐛𝐨𝐭
✎ .𝐚𝐝𝐝𝐩𝐝𝐟
✎ .𝐝𝐞𝐥𝐩𝐝𝐟
✎ .𝐥𝐢𝐬𝐭𝐩𝐝𝐟
✎ .𝐲𝐨𝐩𝐝𝐟
✎ .𝐬𝐞𝐧𝐝𝐩𝐝𝐟
✎ .𝐚𝐝𝐝𝐳𝐢𝐩
✎ .𝐝𝐞𝐥𝐳𝐢𝐩
✎ .𝐥𝐢𝐬𝐭𝐳𝐢𝐩
✎ .𝐲𝐨𝐳𝐢𝐩
✎ .𝐬𝐞𝐧𝐝𝐳𝐢𝐩
✎ .𝐚𝐝𝐝𝐚𝐩𝐤
✎ .𝐝𝐞𝐥𝐚𝐩𝐤
✎ .𝐥𝐢𝐬𝐭𝐚𝐩𝐤
✎ .𝐲𝐨𝐚𝐩𝐤
✎ .𝐬𝐞𝐧𝐝𝐚𝐩𝐤
✎ .𝐚𝐝𝐝𝐯𝐧
✎ .𝐝𝐞𝐥𝐯𝐧
✎ .𝐥𝐢𝐬𝐭𝐯𝐧
✎ .𝐚𝐝𝐝𝐦𝐬𝐠
✎ .𝐬𝐞𝐧𝐝𝐥𝐢𝐬𝐭
✎ .𝐥𝐢𝐬𝐭𝐦𝐬𝐠
✎ .𝐝𝐞𝐥𝐦𝐬𝐠
✎ .𝐠𝐞𝐭𝐦𝐬𝐠
─
  ➤ *𝗧𝗲𝘅𝘁 𝗠𝗮𝗸𝗲𝗿*
  
✎ .𝐛𝐥𝐚𝐜𝐤𝐩𝐢𝐧𝐤
✎ .𝐫𝐚𝐢𝐧𝐛𝐨𝐰𝟐
✎ .𝐰𝐚𝐭𝐞𝐫_𝐩𝐢𝐩𝐞
✎ .𝐡𝐚𝐥𝐥𝐨𝐰𝐞𝐞𝐧
✎ .𝐬𝐤𝐞𝐭𝐜𝐡
✎ .𝐬𝐢𝐫𝐜𝐮𝐢𝐭
✎ .𝐝𝐢𝐬𝐜𝐨𝐯𝐞𝐫𝐲
✎ .𝐦𝐞𝐭𝐚𝐥𝐥𝐢𝐜𝟐
✎ .𝐟𝐢𝐜𝐭𝐢𝐨𝐧
✎ .𝐝𝐞𝐦𝐨𝐧
✎ .𝐭𝐫𝐚𝐧𝐬𝐟𝐨𝐫𝐦𝐞𝐫
✎ .𝐛𝐞𝐫𝐫𝐲
✎ .𝐭𝐡𝐮𝐧𝐝𝐞𝐫
✎ .𝐦𝐚𝐠𝐦𝐚
✎ .𝟑𝐝𝐬𝐭𝐨𝐧𝐞
✎ .𝐧𝐞𝐨𝐧
✎ .𝐠𝐥𝐢𝐭𝐜𝐡
✎ .𝐡𝐚𝐫𝐫𝐲_𝐩𝐨𝐭𝐭𝐞𝐫
✎ .𝐞𝐦𝐛𝐨𝐬𝐬𝐞𝐝
✎ .𝐛𝐫𝐨𝐤𝐞𝐧
✎ .𝐩𝐚𝐩𝐞𝐫𝐜𝐮𝐭
✎ .𝐠𝐫𝐚𝐝𝐢𝐞𝐧𝐭
✎ .𝐠𝐥𝐨𝐬𝐬𝐲
✎ .𝐰𝐚𝐭𝐞𝐫𝐜𝐨𝐥𝐨𝐫
✎ .𝐦𝐮𝐥𝐭𝐢𝐜𝐨𝐥𝐨𝐫
✎ .𝐧𝐞𝐨𝐧_𝐝𝐞𝐯𝐢𝐥
✎ .𝐮𝐧𝐝𝐞𝐫𝐰𝐚𝐭𝐞𝐫
✎ .𝐛𝐞𝐚𝐫
✎ .𝐰𝐨𝐧𝐝𝐞𝐫𝐟𝐮𝐥𝐠
✎ .𝐜𝐡𝐫𝐢𝐬𝐭𝐦𝐚𝐬
✎ .𝐧𝐞𝐨𝐧_𝐥𝐢𝐠𝐡𝐭
✎ .𝐬𝐧𝐨𝐰
✎ .𝐜𝐥𝐨𝐮𝐝𝐬𝐤𝐲
✎ .𝐥𝐮𝐱𝐮𝐫𝐲𝟐
✎ .𝐠𝐫𝐚𝐝𝐢𝐞𝐧𝐭𝟐
✎ .𝐬𝐮𝐦𝐦𝐞𝐫
✎ .𝐰𝐫𝐢𝐭𝐢𝐧𝐠
✎ .𝐞𝐧𝐠𝐫𝐚𝐯𝐞𝐝
✎ .𝐬𝐮𝐦𝐦𝐞𝐫𝐲
✎ .𝟑𝐝𝐠𝐥𝐮𝐞
✎ .𝐦𝐞𝐭𝐚𝐥𝐝𝐚𝐫𝐤
✎ .𝐧𝐞𝐨𝐧𝐥𝐢𝐠𝐡𝐭
✎ .𝐨𝐬𝐜𝐚𝐫
✎ .𝐦𝐢𝐧𝐢𝐨𝐧
✎ .𝐡𝐨𝐥𝐨𝐠𝐫𝐚𝐩𝐡𝐢𝐜
✎ .𝐩𝐮𝐫𝐩𝐥𝐞
✎ .𝐠𝐥𝐨𝐬𝐬𝐲𝐛
✎ .𝐝𝐞𝐥𝐮𝐱𝐞𝟐
✎ .𝐠𝐥𝐨𝐬𝐬𝐲𝐜
✎ .𝐟𝐚𝐛𝐫𝐢𝐜
✎ .𝐧𝐞𝐨𝐧𝐜
✎ .𝐧𝐞𝐰𝐲𝐞𝐚𝐫
✎ .𝐧𝐞𝐰𝐲𝐞𝐚𝐫𝟐
✎ .𝐦𝐞𝐭𝐚𝐥𝐬
✎ .𝐱𝐦𝐚𝐬
✎ .𝐛𝐥𝐨𝐨𝐝
✎ .𝐝𝐚𝐫𝐤𝐠
✎ .𝐣𝐨𝐤𝐞𝐫
✎ .𝐰𝐢𝐜𝐤𝐞𝐫
✎ .𝐧𝐚𝐭𝐮𝐫𝐚𝐥
✎ .𝐟𝐢𝐫𝐞𝐰𝐨𝐫𝐤
✎ .𝐬𝐤𝐞𝐥𝐞𝐭𝐨𝐧
✎ .𝐛𝐚𝐥𝐥𝐨𝐨𝐧
✎ .𝐛𝐚𝐥𝐥𝐨𝐨𝐧𝟐
✎ .𝐛𝐚𝐥𝐥𝐨𝐨𝐧𝟑
✎ .𝐛𝐚𝐥𝐥𝐨𝐨𝐧𝟒
✎ .𝐛𝐚𝐥𝐥𝐨𝐨𝐧𝟓
✎ .𝐛𝐚𝐥𝐥𝐨𝐨𝐧𝟔
✎ .𝐛𝐚𝐥𝐥𝐨𝐨𝐧𝟕
✎ .𝐬𝐭𝐞𝐞𝐥
✎ .𝐠𝐥𝐨𝐬𝐬
✎ .𝐝𝐞𝐧𝐢𝐦
✎ .𝐝𝐞𝐜𝐨𝐫𝐚𝐭𝐞
✎ .𝐝𝐞𝐜𝐨𝐫𝐚𝐭𝐞𝟐
✎ .𝐩𝐞𝐫𝐢𝐝𝐨𝐭
✎ .𝐫𝐨𝐜𝐤
✎ .𝐠𝐥𝐚𝐬𝐬
✎ .𝐠𝐥𝐚𝐬𝐬𝟐
✎ .𝐠𝐥𝐚𝐬𝐬𝟑
✎ .𝐠𝐥𝐚𝐬𝐬𝟒
✎ .𝐜𝐚𝐩𝐭𝐚𝐢𝐧_𝐚𝐬𝟐
✎ .𝐫𝐨𝐛𝐨𝐭
✎ .𝐞𝐪𝐮𝐚𝐥𝐢𝐳𝐞𝐫
✎ .𝐭𝐨𝐱𝐢𝐜
✎ .𝐬𝐩𝐚𝐫𝐤𝐥𝐢𝐧𝐠
✎ .𝐬𝐩𝐚𝐫𝐤𝐥𝐢𝐧𝐠𝟐
✎ .𝐬𝐩𝐚𝐫𝐤𝐥𝐢𝐧𝐠𝟑
✎ .𝐝𝐞𝐜𝐨𝐫𝐚𝐭𝐢𝐯𝐞
✎ .𝐜𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞
✎ .𝐬𝐭𝐫𝐚𝐰𝐛𝐞𝐫𝐫𝐲
✎ .𝐤𝐨𝐢𝐟𝐢𝐬𝐡
✎ .𝐛𝐫𝐞𝐚𝐝
✎ .𝐦𝐚𝐭𝐫𝐢𝐱
✎ .𝐛𝐥𝐨𝐨𝐝𝟐
✎ .𝐧𝐞𝐨𝐧𝐥𝐢𝐠𝐭𝐡𝟐
✎ .𝐭𝐡𝐮𝐧𝐝𝐞𝐫𝟐
✎ .𝟑𝐝𝐛𝐨𝐱
✎ .𝐧𝐞𝐨𝐧𝟐
✎ .𝐫𝐨𝐚𝐝𝐰
✎ .𝐛𝐨𝐤𝐞𝐡
✎ .𝐠𝐧𝐞𝐨𝐧
✎ .𝐚𝐝𝐯𝐚𝐧𝐜𝐞𝐝
✎ .𝐝𝐫𝐨𝐩𝐰𝐚𝐭𝐞𝐫
✎ .𝐰𝐚𝐥𝐥
✎ .𝐜𝐡𝐫𝐢𝐬𝐦𝐚𝐬𝐭
✎ .𝐡𝐨𝐧𝐞𝐲
✎ .𝐝𝐫𝐮𝐠
✎ .𝐦𝐚𝐫𝐛𝐥𝐞
✎ .𝐦𝐚𝐫𝐛𝐥𝐞𝟐
✎ .𝐢𝐜𝐞
✎ .𝐣𝐮𝐢𝐜𝐞
✎ .𝐫𝐮𝐬𝐭𝐲
✎ .𝐚𝐛𝐬𝐭𝐫𝐚
✎ .𝐛𝐢𝐬𝐜𝐮𝐢𝐭
✎ .𝐰𝐨𝐨𝐝
✎ .𝐬𝐜𝐢𝐟𝐢
✎ .𝐦𝐞𝐭𝐚𝐥𝐫
✎ .𝐩𝐮𝐫𝐩𝐥𝐞𝐠
✎ .𝐬𝐡𝐢𝐧𝐲
✎ .𝐣𝐞𝐰𝐞𝐥𝐫𝐲
✎ .𝐣𝐞𝐰𝐞𝐥𝐫𝐲𝟐
✎ .𝐦𝐞𝐭𝐚𝐥𝐡
✎ .𝐠𝐨𝐥𝐝𝐞𝐧
✎ .𝐠𝐥𝐢𝐭𝐭𝐞𝐫
✎ .𝐦𝐞𝐭𝐚𝐥𝐞
✎ .𝐜𝐚𝐫𝐛𝐨𝐧
✎ .𝐜𝐚𝐧𝐝𝐲
✎ .𝐦𝐞𝐭𝐚𝐥𝐛
✎ .𝐠𝐞𝐦𝐛
✎ .𝟑𝐝𝐜𝐡𝐫𝐨𝐦𝐞
✎ .𝐦𝐞𝐭𝐚𝐥𝐛𝟐
✎ .𝐦𝐞𝐭𝐚𝐥𝐠

͏͏͏͏*͏(͏---- 𝚉𝚘𝚗𝚊 𝙱𝚊𝚑𝚊𝚢𝚊 -----)*

𝐍𝐄𝐖

•.playsong
•.creategc (𝐞𝐫𝐨𝐫)
•.ytvid
•.poll (𝐠𝐫𝐨𝐮𝐩)
•.opentime (𝐠𝐫𝐨𝐮𝐩)
•.closetime (𝐠𝐫𝐨𝐮𝐩)

𝙂𝙖𝙨 𝙈𝙚𝙣𝙪

.spamsms (628xx)
.call (628xx)
.kenon (628xx)
.verif@ (628xx)
.banned (628xx)
.unbannedv2 (628xx)
.unbannedv3 (628xx)
.unbannedv4 (628xx)
.unbannedv5 (628xx)

➛ 𝗕𝘂𝗴 𝗠𝗲𝗻𝘂

*𝐁𝐔𝐆 𝐒𝐏𝐀𝐌 𝐏𝐀𝐊𝐄 𝐉𝐔𝐌𝐋𝐀𝐇*

.❤️ (𝐉𝐮𝐦𝐥𝐚𝐡)
.😁 (𝐉𝐮𝐦𝐥𝐚𝐡)
.😱 (𝐉𝐮𝐦𝐥𝐚𝐡)
.🤣 (𝐉𝐮𝐦𝐥𝐚𝐡)
.😂 (𝐉𝐮𝐦𝐥𝐚𝐡)
.😘 (𝐉𝐮𝐦𝐥𝐚𝐡)
.💔 (𝐉𝐮𝐦𝐥𝐚𝐡)
.👊 (𝐉𝐮𝐦𝐥𝐚𝐡)

𝐂𝐨𝐧𝐭𝐨𝐡 : 😂 𝟓
*𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐏𝐑𝐈𝐁𝐀𝐃𝐈*

.🌷 (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.🐵 (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.🙈 (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.🙉 (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.🙊 (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.🐒 (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.ꜱᴀɴᴛᴇᴛ (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.ꜱᴇɴᴅɢᴀꜱꜰᴜʟʟ (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.ꜱᴇɴᴅᴜɴʟɪᴛʀᴏʟɪ (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.ꜱᴇɴᴅᴜɴʟɪᴅᴏᴄᴜ (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.ꜱᴇɴᴅᴜɴʟɪᴄᴜʏ (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.ꜱᴇɴᴅᴜɴʟɪʙᴏᴍ (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.ꜱᴇɴᴅᴜɴʟɪʟᴀɢ (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.ꜱᴇɴᴅᴜɴʟɪᴅᴇʟᴀʏ (𝟔𝟐𝟖𝐱𝐱𝐱𝐱)
.𝚂𝙴𝙽𝙳𝙸𝙽𝚅𝙸𝚃𝙴 (𝟼𝟸𝚇𝚇𝚇𝚇𝚇𝚇) 
.𝚂𝙴𝙽𝙳𝙸𝙽𝚅𝙸𝚃𝙴𝟸 (𝟼𝟸𝚇𝚇𝚇𝚇) 
.𝚂𝙴𝙽𝙳𝙸𝙽𝚅𝙸𝚃𝙴𝟹 (𝟼𝟸𝚇𝚇𝚇𝚇) 

𝐂𝐨𝐧𝐭𝐨𝐡 : 🌷 𝟔𝟐𝟖𝟖𝟐𝟏𝟎𝟏𝟖𝟎𝟓𝟎𝟓
*𝐊𝐈𝐑𝐈𝐌 𝐊𝐄 𝐆𝐑𝐎𝐔𝐏 𝐏𝐀𝐊𝐄𝐈 𝐈𝐃*

.ᴛʀᴏʟɪɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
.ᴅᴏᴄᴜɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
.ɢᴀꜱꜰᴜʟʟɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ꜱᴀɴᴛᴇᴛɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ᴜɴʟɪᴅᴇʟᴀʏɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ᴜɴʟɪʟᴀɢɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ᴜɴʟɪʙᴏᴍɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ᴜɴʟɪᴄᴜʏɢᴄ (ʟɪɴᴋ ɴʏᴀ)

*𝐁𝐔𝐆 𝐒𝐏𝐀𝐌 𝐃𝐈 𝐓𝐄𝐌𝐏𝐀𝐓*

.ᴜɴʟɪᴛᴇᴛ
.ᴜɴʟɪᴛʀᴏʟɪ
.ᴜɴʟɪᴅᴏᴄᴜ
.ᴜɴʟɪᴠɪʀᴛᴇ𝐱ᴛ
.ᴜɴʟɪᴅᴇʟᴀʏ
.ᴜɴʟɪʟᴀɢ
.ᴜɴʟɪʙᴏᴍ
.ᴜɴʟɪᴄᴜʏ

*𝐁𝐎𝐍𝐔𝐒*

.𝐠𝐨𝐲𝐚𝐧𝐠

 
`

global.nsfw = ` 
  ➤ *NSFW Menu*
✎ .baka
✎ .smug
✎ .neko_sfw
✎ .hentai_gif
✎ .spank
✎ .blowjob
✎ .cumarts
✎ .eroyuri
✎ .eroneko
✎ .erokemonomimi
✎ .erokitsune
✎ .ero
✎ .feet
✎ .erofeet
✎ .feetgif
✎ .femdom
✎ .futanari
✎ .hentai
✎ .holoero
✎ .holo
✎ .keta
✎ .kitsune
✎ .kemonomimi
✎ .pussyart
✎ .pussywankgifgirl_solo
✎ .girl_solo_gif
✎ .tits
✎ .trap
✎ .yuri
✎ .avatar2
✎ .anal
✎ .bj
✎ .boobs
✎ .classic
✎ .cumsluts
✎ .kuni
✎ .lesbian
✎ .n
✎ .neko_gif
✎ .ahegao
✎ .bdsm
✎ .cuckold
✎ .cum
✎ .foot
✎ .gangbang
✎ .glasses
✎ .jahy
✎ .masturbation
✎ .nsfw_neko
✎ .orgy
✎ .panties
✎ .tentacles
✎ .thighs
✎ .zettai
  `
global.ownermenu = `
  ➤ *𝗠𝗲𝗻𝘂 𝗢𝘄𝗻𝗲𝗿*
✎ .setppbot
✎ .pppanjang
✎ .addprem (628xx)
✎ .delprem (628xx)
✎ .listprem
✎ .pengguna add (628xx)
✎ .pengguna del (628xx)
✎ .listban
✎ .hapusdb (628xx@s.whatsapp.net)
✎ .listdb
✎ .block
✎ .unblock
✎ .>
✎ .=>
✎ .$
 `

global.bugmenu = `
𝗕𝘂𝗴 𝗠𝗲𝗻𝘂

*BUG SPAM PAKE JUMLAH*

.❤️ (Jumlah)
.😁 (Jumlah)
.😱 (Jumlah)
.🤣 (Jumlah)
.😂 (Jumlah)
.😘 (Jumlah)
.💔 (Jumlah)
.👊 (Jumlah)

Contoh : 😂 5
*KIRIM KE PRIBADI*

.🌷 (628xxxx)
.🐵 (628xxxx)
.🙈 (628xxxx)
.🙉 (628xxxx)
.🙊 (628xxxx)
.🐒 (628xxxx)
.ꜱᴀɴᴛᴇᴛ (628xxxx)
.ꜱᴇɴᴅɢᴀꜱꜰᴜʟʟ (628xxxx)
.ꜱᴇɴᴅᴜɴʟɪᴛʀᴏʟɪ (628xxxx)
.ꜱᴇɴᴅᴜɴʟɪᴅᴏᴄᴜ (628xxxx)
.ꜱᴇɴᴅᴜɴʟɪᴄᴜʏ (628xxxx)
.ꜱᴇɴᴅᴜɴʟɪʙᴏᴍ (628xxxx)
.ꜱᴇɴᴅᴜɴʟɪʟᴀɢ (628xxxx)
.ꜱᴇɴᴅᴜɴʟɪᴅᴇʟᴀʏ (628xxxx)
.𝚂𝙴𝙽𝙳𝙸𝙽𝚅𝙸𝚃𝙴 (𝟼𝟸𝚇𝚇𝚇𝚇𝚇𝚇) 
.𝚂𝙴𝙽𝙳𝙸𝙽𝚅𝙸𝚃𝙴𝟸 (𝟼𝟸𝚇𝚇𝚇𝚇) 
.𝚂𝙴𝙽𝙳𝙸𝙽𝚅𝙸𝚃𝙴𝟹 (𝟼𝟸𝚇𝚇𝚇𝚇) 

Contoh : 🌷 62812xxxxx
*KIRIM KE GROUP PAKEI ID*

.ᴛʀᴏʟɪɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
.ᴅᴏᴄᴜɢᴄ (ɪᴅ ɢʀᴏᴜᴘ)
.ɢᴀꜱꜰᴜʟʟɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ꜱᴀɴᴛᴇᴛɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ᴜɴʟɪᴅᴇʟᴀʏɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ᴜɴʟɪʟᴀɢɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ᴜɴʟɪʙᴏᴍɢᴄ (ʟɪɴᴋ ɴʏᴀ)
.ᴜɴʟɪᴄᴜʏɢᴄ (ʟɪɴᴋ ɴʏᴀ)

*BUG SPAM DI TEMPAT*

.ᴜɴʟɪᴛᴇᴛ
.ᴜɴʟɪᴛʀᴏʟɪ
.ᴜɴʟɪᴅᴏᴄᴜ
.ᴜɴʟɪᴠɪʀᴛᴇxᴛ
.ᴜɴʟɪᴅᴇʟᴀʏ
.ᴜɴʟɪʟᴀɢ
.ᴜɴʟɪʙᴏᴍ
.ᴜɴʟɪᴄᴜʏ

•-------------------------------------------------•
*BONUS*

.ʜᴀɪᴋᴀʟ
.ɢᴏʏᴀɴɢ`

global.groupmenu = `
  ➤ *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂*
✎ .welcome on / off
✎ .antilink on / off
✎ .antitoxic on / off
✎ .pushkontak (textnya)
✎ .pushcontid (id group)
✎ .bcgc (textnya)
✎ .hidetag (textnya)
✎ .kick (628xx)
✎ .add (628xx)
✎ .promote (628xx)
✎ .demote (628xx)
✎ .sendlinkgc (628xx)
✎ .editgroup close / open
✎ .editinfo on / off
✎ .join (linknya)
✎ .editsubjek (textnya)
✎ .editdesk (textnya)
✎ .tagall (textnya)
✎ .inspect (linknya)
✎ .linkgroup
✎ .resetlinkgc
✎ .promoteall
✎ .demoteall
✎ .larangan
✎ .virgam
✎ .buatsw
✎ .buatswimage
✎ .buatswvideo
✎ .swin
✎ .vnsw
✎ .buatswptv
✎ .toptv
✎ .buatsws
  `

global.tools = `
  ➤ *𝗧𝗼𝗼𝗹𝘀*
✎ .igstalk
✎ .tomp4
✎ .tomp3
✎ .toaud
✎ .tovn
✎ .toaudio
✎ .togif
✎ .tourl
✎ .kalkulator
✎ .smeme
✎ .stalktiktok
✎ .infogempa
✎ .ffstalk
✎ .txt2img
✎ .2img
✎ .hd
✎ .myip
✎ .githubclone
✎ .menfes
✎ .play2 (query)
✎ .fbvideo (linknya)
✎ .fbreels (linknya)
✎ .igvideo (linknya)
✎ .igreels (linknya)
✎ .twitvideo (linknya)
✎ .tiktokvideo (linknya)
✎ .ytmp3 (linknya)
✎ .ytmp4 (linknya)
✎ .ytsearch (linknya)
✎ .ytsearch2 (linknya)
✎ .play (query)
✎ .ytreels (linknya)
✎ .getmusic (reply hasil)
✎ .getvideo (reply hasil)
✎ .createqr
✎ .detectqr
✎ .sticker
 `

global.randommenu = `
  ➤ *𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂*
✎ .sewa
✎ .nope
✎ .tutorial
✎ .wm
✎ .jodoh
✎ .wmvideo
✎ .emojimix
✎ .emojimix2
✎ .attp (textnya)
✎ .ttp (textnya)
✎ .afk (textnya)
✎ .gambar (textnya)
✎ .quotesanime
✎ .faktaunik
✎ .katabijak
✎ .pantun
✎ .bucin
✎ .quotes
✎ .darkjokes
✎ .google
✎ .couple
✎ .coffe
✎ .getname
✎ .getpic
✎ .setppgroup
✎ .lirik
✎ .cerpen
✎ .qcimg
✎ .ceritahoror
✎ .cuaca
  `

global.islammenu = `
  ➤ *𝗜𝘀𝗹𝗮𝗺 𝗠𝗲𝗻𝘂*
✎ .jadwalsholat
✎ .kisahnabi
✎ .alquranaudio
✎ .asmaulhusna
✎ .alquran
✎ .listsurah
  `

global.gasmenu = `
 .spamsms (628xx)
.call (628xx)
.kenon (628xx)
.verif@ (628xx)
.banned (628xx)
.unbannedv2 (628xx)
.unbannedv3 (628xx)
.unbannedv4 (628xx)
.unbannedv5 (628xx)`

global.textmaker = `
  ➤ *𝗧𝗲𝘅𝘁 𝗠𝗮𝗸𝗲𝗿*
✎ .blackpink
✎ .rainbow2
✎ .water_pipe
✎ .halloween
✎ .sketch
✎ .sircuit
✎ .discovery
✎ .metallic2
✎ .fiction
✎ .demon
✎ .transformer
✎ .berry
✎ .thunder
✎ .magma
✎ .3dstone
✎ .neon
✎ .glitch
✎ .harry_potter
✎ .embossed
✎ .broken
✎ .papercut
✎ .gradient
✎ .glossy
✎ .watercolor
✎ .multicolor
✎ .neon_devil
✎ .underwater
✎ .bear
✎ .wonderfulg
✎ .christmas
✎ .neon_light
✎ .snow
✎ .cloudsky
✎ .luxury2
✎ .gradient2
✎ .summer
✎ .writing
✎ .engraved
✎ .summery
✎ .3dglue
✎ .metaldark
✎ .neonlight
✎ .oscar
✎ .minion
✎ .holographic
✎ .purple
✎ .glossyb
✎ .deluxe2
✎ .glossyc
✎ .fabric
✎ .neonc
✎ .newyear
✎ .newyear2
✎ .metals
✎ .xmas
✎ .blood
✎ .darkg
✎ .joker
✎ .wicker
✎ .natural
✎ .firework
✎ .skeleton
✎ .balloon
✎ .balloon2
✎ .balloon3
✎ .balloon4
✎ .balloon5
✎ .balloon6
✎ .balloon7
✎ .steel
✎ .gloss
✎ .denim
✎ .decorate
✎ .decorate2
✎ .peridot
✎ .rock
✎ .glass
✎ .glass2
✎ .glass3
✎ .glass4
✎ .captain_as2
✎ .robot
✎ .equalizer
✎ .toxic
✎ .sparkling
✎ .sparkling2
✎ .sparkling3
✎ .decorative
✎ .chocolate
✎ .strawberry
✎ .koifish
✎ .bread
✎ .matrix
✎ .blood2
✎ .neonligth2
✎ .thunder2
✎ .3dbox
✎ .neon2
✎ .roadw
✎ .bokeh
✎ .gneon
✎ .advanced
✎ .dropwater
✎ .wall
✎ .chrismast
✎ .honey
✎ .drug
✎ .marble
✎ .marble2
✎ .ice
✎ .juice
✎ .rusty
✎ .abstra
✎ .biscuit
✎ .wood
✎ .scifi
✎ .metalr
✎ .purpleg
✎ .shiny
✎ .jewelry
✎ .jewelry2
✎ .metalh
✎ .golden
✎ .glitter
✎ .metale
✎ .carbon
✎ .candy
✎ .metalb
✎ .gemb
✎ .3dchrome
✎ .metalb2
✎ .metalg
  `

global.infomenu = `
  ➤ *𝗜𝗻𝗳𝗼 𝗠𝗲𝗻𝘂*
✎ .sc
✎ .tqto
✎ .donasi
✎ .owner
✎ .bot
✎ .sosmed
✎ .panel
✎ .daftar
  `

global.addmenu = `
  ➤ *𝗔𝗱𝗱 𝗠𝗲𝗻𝘂*
✎ .setcmd
✎ .delcmd
✎ .listcmd
✎ .setppbot
✎ .addpdf
✎ .delpdf
✎ .listpdf
✎ .yopdf
✎ .sendpdf
✎ .addzip
✎ .delzip
✎ .listzip
✎ .yozip
✎ .sendzip
✎ .addapk
✎ .delapk
✎ .listapk
✎ .yoapk
✎ .sendapk
✎ .addvn
✎ .delvn
✎ .listvn
✎ .addmsg
✎ .sendlist
✎ .listmsg
✎ .delmsg
✎ .getmsg
 `
 
global.cucimata = `
 
  `
global.beritamenu = `
  ➤ *𝗕𝗲𝗿𝗶𝘁𝗮 𝗠𝗲𝗻𝘂*
✎ .fajar
✎ .cnn
✎ .layarkaca
✎ .cnbc
✎ .tribun
✎ .indozone
✎ .kompas
✎ .detik
✎ .daily
✎ .inews
✎ .okezone
✎ .sindo
✎ .tempo
✎ .antara
✎ .kontan
✎ .merdeka
✎ .jalantikus-meme
  `

global.rpgmenu = `
  ➤ *RPG*
✎ .inventory
✎ .mining
✎ .hunt
✎ .buy
✎ .sell
✎ .leaderboard
✎ .heal
 `

global.funmenu = `
  ➤ *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂*
✎ .ᴀʀᴛɪɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴀʀᴛɪᴍɪᴍᴘɪ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴋᴇᴄᴏᴄᴏᴋᴀɴᴘᴀꜱᴀɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴋᴇᴄᴏᴄᴏᴋᴀɴɴᴀᴍᴀ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴊᴀᴅɪᴀɴᴘᴇʀɴɪᴋᴀʜᴀɴ (ᴛᴇxᴛɴʏᴀ)
✎ .ʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
✎ .ꜱɪꜰᴀᴛᴜꜱᴀʜᴀ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴘᴇᴋᴇʀᴊᴀᴀɴ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴀʀᴛɪᴛᴀʀᴏᴛ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴘᴏᴛᴇɴꜱɪᴘᴇɴʏᴀᴋɪᴛ (ᴛᴇxᴛɴʏᴀ)
✎ .ʀᴀᴍᴀʟᴀɴɴᴀꜱɪʙ (ᴛᴇxᴛɴʏᴀ)
✎ .ʜᴀʀɪꜱᴀɴɢᴀʀ (ᴛᴇxᴛɴʏᴀ)
✎ .ʜᴀʀɪʙᴀɪᴋ (ᴛᴇxᴛɴʏᴀ)
✎ .ꜰᴇɴɢꜱʜᴜɪ (ᴛᴇxᴛɴʏᴀ)
✎ .ɴᴀɢᴀʜᴀʀɪ (ᴛᴇxᴛɴʏᴀ)
✎ .ʜᴀʀɪɴᴀᴀꜱ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴡᴇᴛᴏɴ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴘᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴀʀᴀʜʀᴇᴊᴇᴋɪ (ᴛᴇxᴛɴʏᴀ)
✎ .ꜱɪꜰᴀᴛ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴋᴇʙᴇʀᴜɴᴛᴜɴɢᴀɴ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴍᴇᴍᴀɴᴄɪɴɢ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴍᴀꜱᴀꜱᴜʙᴜʀ (ᴛᴇxᴛɴʏᴀ)
✎ .ᴢᴏᴅɪᴀᴋ (ᴛᴇxᴛɴʏᴀ)
✎ .ꜱʜɪᴏ (ᴛᴇxᴛɴʏᴀ)
  
`

global.gamemenu = `
  ➤ *𝗠𝗲𝗻𝘂 𝗚𝗮𝗺𝗲*
✎ .ᴛᴛᴄ
✎ .ᴅᴇʟᴛᴄ
✎ .ꜱᴜɪᴛᴘᴠᴘ
✎ .ᴛᴇʙᴀᴋ ᴋᴀᴛᴀ
✎ .ᴛᴇʙᴀᴋ ɢᴀᴍʙᴀʀ
✎ .ᴛᴇʙᴀᴋ ʟɪʀɪᴋ
✎ .ᴛᴇʙᴀᴋ ᴋᴀʟɪᴍᴀᴛ
✎ .ᴛᴇʙᴀᴋ ʟᴀɢᴜ
✎ .ᴛᴇʙᴀᴋ ʟᴏɴᴛᴏɴɢ
✎ .ꜰᴀᴍɪʟʏ100
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ɴᴏᴏʙ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ᴇᴀꜱʏ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ᴍᴇᴅɪᴜᴍ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ʜᴀʀᴅ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ᴇxᴛʀᴇᴍᴇ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ
✎ .ᴋᴜɪꜱᴍᴀᴛʜ ɪᴍᴘᴏꜱꜱɪʙʟᴇ2

`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})


