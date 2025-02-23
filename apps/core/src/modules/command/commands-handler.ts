export class CommandHandler {
  private options: any;

  constructor(options: any) {
    this.options = options;
  }

  public async handle(command: any): Promise<any> {
    console.log(this.options);
  }
}
