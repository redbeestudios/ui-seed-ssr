var Logstash = require('logstash-client');

const Levels = Object.freeze({
    ERROR:  "error",
    INFO:   "info",
    DEBUG:  "debug"
});

class Logger {
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
            this._client = new Logstash({
                type: 'tcp',
                host: process.env.LOGSTASH,
                port: process.env.LOGSTASH_PORT
            });
        }

        return Logger.instance;
    }

    info(msg, appName, method) {
        this._client.send(this.getMessage(msg, Levels.INFO, appName, method));
        console.log("INFO: ", msg);
    }

    error(msg, appName, method){
        this._client.send(this.getMessage(msg, Levels.ERROR, appName, method));
        console.error("ERROR: ", msg);
    }

    debug(msg, appName, method){
        this._client.send(this.getMessage(msg, Levels.DEBUG, appName, method));
        console.debug("DEBUG: ", msg);
    }

    getMessage(message, level, appName, method) {
        return {
            '@timestamp': new Date(),
            'message': { message },
            'level': { level },
            'appname': appName,
            'method' : method
        };
    }
}

const logger = new Logger();
Object.freeze(logger);

export default logger;