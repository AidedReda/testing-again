// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Aries } from '../client';

export abstract class APIResource {
  protected _client: Aries;

  constructor(client: Aries) {
    this._client = client;
  }
}
