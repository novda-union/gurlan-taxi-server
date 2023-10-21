const responseStatus = {
  AUTH: {
    DRIVER_NOT_FOUND: "DRIVER_NOT_FOUND",
    HEADERS_NOT_FOUND: "HEADERS_NOT_FOUND",
    TOKEN_NOT_FOUND: "TOKEN_NOT_FOUND",
    TOKEN_NOT_VALID: "TOKEN_NOT_VALID",
    BANNED: "BANNED",
    SELF_ACCESS_NOT_VALID: "SELF_ACCESS_NOT_VALID",
    AUTH_WARNING: "AUTH_WARNING",
    VALIDATION_WAITING: "VALIDATION_WAITING",
    VALIDATION_DONE: "VALIDATION_DONE",
    VALIDATION_FAILED: "VALIDATION_FAILED",
    DRIVER_EXISTS: "DRIVER_EXISTS",
    IMAGES_SENT: "IMAGES_SENT",
    IMAGES_SENT_FAILED: "IMAGES_SENT_FAILED",
    DRIVER_REGISTRATION_DONE: "DRIVER_REGISTRATION_DONE",
    DRIVER_LOGIN_DONE: "DRIVER_LOGIN_DONE",
    DRIVER_LOGIN_FAILED: "DRIVER_LOGIN_FAILED",
    DRIVER_NOT_VALIDATED: "DRIVER_NOT_VALIDATED",
    SELF_DELETION_DONE: "SELF_DELETION_DONE",
    CLIENT_READY_TO_REGISTER: "CLIENT_READY_TO_REGISTER",
    CLIENT_REGISTER_DONE: "CLIENT_REGISTER_DONE",
    CLIENT_LOGIN_DONE: "CLIENT_LOGIN_DONE",
    CLIENT_TOKEN_NOT_FOUND: "CLIENT_TOKEN_NOT_FOUND",
    CLIENT_NOT_FOUND: "CLIENT_NOT_FOUND",
    CLIENT_CHECK_DONE: "CLIENT_CHECK_DONE"
  },
};

module.exports = { responseStatus };
