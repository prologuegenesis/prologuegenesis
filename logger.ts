export class Logger {
    static info(message: string) {
        console.log(`[INFO] ${message}`);
    }

    static error(message: string) {
        console.error(`[ERROR] ${message}`);
    }

    static protocol(message: string) {
        console.log(`[@prologuegenesis] ${message}`);
    }
} 