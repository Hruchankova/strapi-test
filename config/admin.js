module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'PiajcNs0uTWMUmrRAt8TLA=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'KuhaTUZCXMx0BJH633w0VA=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', '5A9hodVpRv6homV5fTy1Vw=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
