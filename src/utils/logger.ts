class Logger {
  private isDevelopment: boolean;

  constructor() {
    this.isDevelopment = process.env.NODE_ENV === "development" || __DEV__;
  }

  private getTimeStamp(): string {
    return new Date().toLocaleTimeString();
  }

  log(message: string): void {
    if (this.isDevelopment) {
      console.log(`[${this.getTimeStamp()}] ${message}`);
    }
  }

  info(message: string): void {
    if (this.isDevelopment) {
      console.info(`[${this.getTimeStamp()}] ${message}`);
    }
  }

  warn(message: string): void {
    if (this.isDevelopment) {
      console.warn(`[${this.getTimeStamp()}] ${message}`);
    }
  }

  error(message: string): void {
    if (this.isDevelopment) {
      console.error(`[${this.getTimeStamp()}] ${message}`);
    }
  }
}

export default new Logger();
