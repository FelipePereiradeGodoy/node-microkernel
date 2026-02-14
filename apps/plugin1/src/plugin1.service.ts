import { Injectable } from '@nestjs/common';
import { KafkaConsumer } from './kafka.consumer';

@Injectable()
export class Plugin1Service {
  constructor(private readonly kafkaConsumer: KafkaConsumer) {}

  async processMessage(payload: any): Promise<void> {
    console.log('Processing message in Plugin1:', payload);
    // Simula o envio de SMS fake
    console.log('Fake SMS sent to:', payload.to);
    console.log('Message:', payload.message);
  }
}