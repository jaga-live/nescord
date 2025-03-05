export class GlobalConfig {
  private static options: Record<string, any> = {};

  static set(key: string, value: any) {
    this.options[key] = value;
  }

  static get(key: string) {
    return this.options[key];
  }
}
