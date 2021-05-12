export enum Source {
  sender = 'sender',
  receiver = 'receiver',
}

export class SimpleMessage {
  public text: string;
  public source: Source;
  constructor(text: string, source: Source) {
    this.text = text;
    this.source = source;
  }
}
