interface Config {
    host: string,
}

export default class Global {

    private static prodConfig = {
        host: "https://api.bardox.co/v1/",
    } as Config;

    private static devConfig = {
        host: "http://localhost/v1/",
    } as Config;

    public static isDevelopment(callback = null):any {
        if (process.env.NODE_ENV == "development") {
            if (callback) return callback;
            return true;
        } 
        return false;
    }

    public static isProduction(callback = null):any {
        if (process.env.NODE_ENV == "production") {
            if (callback) return callback;
            return true;
        }
        return false;
    }

    public static getConfig(field:any):any {
        if (this.isProduction()) {
            return this.prodConfig[field];
        } else {
            return this.devConfig[field];
        }
    }


}
