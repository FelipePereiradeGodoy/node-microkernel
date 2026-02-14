export interface IProducer<T> {
  publish(message: T): Promise<void>;
}