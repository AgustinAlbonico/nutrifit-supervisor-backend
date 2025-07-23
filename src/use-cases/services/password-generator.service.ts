import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class PasswordGeneratorService {
  generatePassword(length = 10): string {
    return crypto.randomBytes(length).toString('base64').slice(0, length);
  }
}
