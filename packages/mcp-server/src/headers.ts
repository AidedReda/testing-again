// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'testingariesmcp/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.slice(req.headers.authorization.search(' '));
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { bearerToken: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const bearerToken =
    req.headers['x-testingariesmcp-bearer-token'] instanceof Array ?
      req.headers['x-testingariesmcp-bearer-token'][0]
    : req.headers['x-testingariesmcp-bearer-token'];
  const apiKey =
    req.headers['X-API-Key'] instanceof Array ? req.headers['X-API-Key'][0] : req.headers['X-API-Key'];
  return { bearerToken, apiKey };
};
