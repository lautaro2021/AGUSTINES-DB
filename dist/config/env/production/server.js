"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    proxy: true,
    app: {
        keys: env.array("APP_KEYS", ['yWJZRVylaQeva1SAfG8QDg==', 'y0wZ5C9Nsq/3jCZCMYXAcA==', 'Bi5aJ6HiRMDHjg/4CXdHaA==', '/+xmPV76pbEr39X5AuuNsw==']),
    },
});
