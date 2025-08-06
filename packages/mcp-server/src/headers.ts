// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from 'ariestestingmcp/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  if (req.headers.authorization) {
    const scheme = req.headers.authorization.split(' ')[0]!;
    const value = req.headers.authorization.slice(scheme.length + 1);
    switch (scheme) {
      case 'Bearer':
        return { bearerKey: req.headers.authorization.slice('Bearer '.length) };
      default:
        throw new Error(`Unsupported authorization scheme`);
    }
  }

  const bearerKey =
    req.headers['x-aries-api-key'] instanceof Array ?
      req.headers['x-aries-api-key'][0]
    : req.headers['x-aries-api-key'];
  const apiKey =
    req.headers['X-API-Key'] instanceof Array ? req.headers['X-API-Key'][0] : req.headers['X-API-Key'];
  return { bearerKey, apiKey };
};
