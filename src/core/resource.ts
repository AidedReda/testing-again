// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Testingariesmcp } from '../client';

export abstract class APIResource {
  protected _client: Testingariesmcp;

  constructor(client: Testingariesmcp) {
    this._client = client;
  }
}
