export interface INotificationInput {
    id: string;
    to: string;
    title: string;
    message: string;
    date: Date;
    metadata?: Object;
}