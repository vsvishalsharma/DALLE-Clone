import FileSaver from 'file-saver';
import { surpriseprompts } from '../surpriseprompt';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseprompts.length);
  const randomPrompt = surpriseprompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}