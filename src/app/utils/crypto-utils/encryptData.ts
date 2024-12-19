import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

/**
 * Encripta un dato utilizando AES.
 * @param data El dato a encriptar.
 * @returns El dato encriptado como string.
 */
export function encryptData(data: string): string {
  const secretKey = environment.secretKey; // Clave secreta del entorno
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

/**
 * Desencripta un dato utilizando AES.
 * @param encryptedData El dato encriptado.
 * @returns El dato desencriptado como string.
 */
export function decryptData(encryptedData: string): string {
  const secretKey = environment.secretKey; // Clave secreta del entorno
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
