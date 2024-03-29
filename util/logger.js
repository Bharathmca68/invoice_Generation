const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  transports: [
    new transports.File({
      filename: "../Loggers/info.log",
      level: "info",
      format: format.combine(format.timestamp(), format.json()),
    }),
  ],
});
module.exports = logger;
