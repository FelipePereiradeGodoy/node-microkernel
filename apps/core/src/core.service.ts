import { Injectable } from '@nestjs/common';
import { INotificationInput } from 'pluginContracts/plugin-contracts'
import { IProducer } from './producer.interface';
import { Notification } from './notification';

@Injectable()
export class CoreService {
  constructor(
    readonly producer: IProducer<INotificationInput>
  ) {}

  async sendNotification(payload: any): Promise<void> {
    const baseNotification: Notification = new Notification ({
      to: payload.to,
      title: payload.title,
      message: payload.message,
    });

    baseNotification.validateTitle();
    baseNotification.validateMessage();

    await this.producer.publish({
      id: baseNotification.id,
      to: baseNotification.to,
      title: baseNotification.title,
      message: baseNotification.message,
      metadata: {core: true, plugin: false},
      date: new Date()
    });
  }
}
