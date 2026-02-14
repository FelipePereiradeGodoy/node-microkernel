import { Injectable, OnModuleInit } from '@nestjs/common';
import { Kafka, Consumer } from 'kafkajs';

@Injectable()
export class KafkaConsumer implements OnModuleInit {
  private readonly consumer: Consumer;

  constructor() {
    const kafka = new Kafka({
      clientId: 'plugin1',
      brokers: ['localhost:9092'],
    });
    this.consumer = kafka.consumer({ groupId: 'plugin1-group' });
  }

  async onModuleInit() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: 'notifications', fromBeginning: true });

    await this.consumer.run({
      eachMessage: async ({ message }) => {
        const content = message.value?.toString();
        if (content) {
          this.handleMessage(JSON.parse(content));
        }
      },
    });
  }

  private handleMessage(payload: any): void {
    console.log('Fake SMS sent to:', payload.to);
    console.log('Message:', payload.message);
  }
}