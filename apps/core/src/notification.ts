import { randomUUID } from "crypto";

export class Notification {
  id: string;
  to: string;
  title: string;
  message: string;

  constructor(data: any) {
    this.id = randomUUID().toString();
    this.to = data.to;
    this.title = data.title;
    this.message = data.message;
  }

  validateMessage() {
    if(this.message.length > 255) {
        throw "Número de caracteres muito alto";
    }
  }

  validateTitle() {
    if(this.title.length > 50) {
        throw "Número de caracteres muito alto";
    }
  }
}