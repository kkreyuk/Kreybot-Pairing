const { promises } = require('fs');
const { join } = require('path');
const { spawn } = require('child_process');
const chalk = require('chalk');
const { fileURLToPath, URL } = require('url');

const __filename = fileURLToPath(import.meta.url);
const __dirname = new URL('.', import.meta.url).pathname;
const file = fileURLToPath(import.meta.url);

const ffmpeg = (buffer, args = [], ext = '', ext2 = '') => {
    return new Promise(async (resolve, reject) => {
        try {
            const tmp = join(__dirname, '../tmp', + new Date() + '.' + ext);
            const out = tmp + '.' + ext2;
            await promises.writeFile(tmp, buffer);
            spawn('ffmpeg', [
                '-y',
                '-i', tmp,
                ...args,
                out
            ])
            .on('error', reject)
            .on('close', async (code) => {
                try {
                    await promises.unlink(tmp);
                    if (code !== 0) return reject(code);
                    resolve({
                        data: await promises.readFile(out),
                        filename: out,
                        delete() {
                            return promises.unlink(out);
                        }
                    });
                } catch (e) {
                    reject(e);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 * @returns {Promise<{data: Buffer, filename: String, delete: Function}>}
 */
const toPTT = (buffer, ext) => {
    return ffmpeg(buffer, [
        '-vn',
        '-c:a', 'libopus',
        '-b:a', '128k',
        '-vbr', 'on',
    ], ext, 'ogg');
};

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 * @returns {Promise<{data: Buffer, filename: String, delete: Function}>}
 */
const toAudio = (buffer, ext) => {
    return ffmpeg(buffer, [
        '-vn',
        '-c:a', 'libopus',
        '-b:a', '128k',
        '-vbr', 'on',
        '-compression_level', '10'
    ], ext, 'opus');
};

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 * @returns {Promise<{data: Buffer, filename: String, delete: Function}>}
 */
const toVideo = (buffer, ext) => {
    return ffmpeg(buffer, [
        '-c:v', 'libx264',
        '-c:a', 'aac',
        '-ab', '128k',
        '-ar', '44100',
        '-crf', '32',
        '-preset', 'slow'
    ], ext, 'mp4');
};

export {
    toAudio,
    toPTT,
    toVideo,
    ffmpeg,
};
import {
    fileURLToPath,
    URL
} from 'url'
import chalk from 'chalk'
import fs from 'fs'
const __filename = new URL('', import.meta.url).pathname
const __dirname = new URL('.', import.meta.url).pathname
let file = fileURLToPath(import.meta.url)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.bgGreen(chalk.black("[  UPDATE ]")), chalk.white(`${__filename}`))
    import(`${file}?update=${Date.now()}`)
})