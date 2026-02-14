import { Injectable } from '@nestjs/common';
import { IProducer } from './producer.interface';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaProducer implements IProducer<any> {
  private readonly producer: Producer;

  constructor() {
    const kafka = new Kafka({
      clientId: 'node-microkernel',
      brokers: ['localhost:9092'],
    });
    this.producer = kafka.producer();
  }

  async publish(message: any): Promise<void> {
    await this.producer.connect();
    await this.producer.send({
      topic: 'notifications',
      messages: [{ value: JSON.stringify(message) }],
    });
    await this.producer.disconnect();
  }
}