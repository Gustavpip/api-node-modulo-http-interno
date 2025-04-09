import fs from "fs/promises";
import path from "path";

export async function logError(filename, content) {
  try {
    const logDir = path.resolve("src/logs");
    await fs.mkdir(logDir, { recursive: true });

    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}]\n${content}\n\n`;

    await fs.appendFile(path.join(logDir, filename), logMessage, "utf-8");
  } catch (err) {
    console.error("Erro ao salvar log:", err);
  }
}
