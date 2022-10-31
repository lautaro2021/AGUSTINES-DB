export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS", ['yWJZRVylaQeva1SAfG8QDg==','y0wZ5C9Nsq/3jCZCMYXAcA==','Bi5aJ6HiRMDHjg/4CXdHaA==','/+xmPV76pbEr39X5AuuNsw==']),
  },
});
