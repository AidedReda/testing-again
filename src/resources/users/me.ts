// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Me extends APIResource {
  /**
   * Gets the currently authenticated user's information.
   */
  retrieve(options?: RequestOptions): APIPromise<MeRetrieveResponse> {
    return this._client.get('/v1/users/me', options);
  }

  /**
   * Updates the currently authenticated user. Supports partial updates including
   * account application data.
   */
  update(body: MeUpdateParams, options?: RequestOptions): APIPromise<MeUpdateResponse> {
    return this._client.patch('/v1/users/me', { body, ...options });
  }

  /**
   * Gets the currently authenticated user's trading accounts.
   */
  listAccounts(options?: RequestOptions): APIPromise<MeListAccountsResponse> {
    return this._client.get('/v1/users/me/accounts', options);
  }
}

export interface ApplicationResponse {
  id?: number;

  can_submit?: boolean;

  missing_fields?: Array<string>;

  plaid_link_token?: string | null;

  status?: 'CREATED' | 'PENDING_ID_VERFICATION' | 'PENDING_APPROVAL' | 'APPROVED' | 'REJECTED';
}

export interface MeRetrieveResponse {
  id?: number;

  account_application?: ApplicationResponse;

  country?: string;

  created_at?: string;

  email?: string;

  plaid_status?: string;

  updated_at?: string;
}

export interface MeUpdateResponse {
  id?: number;

  account_application?: ApplicationResponse;

  country?: string;

  created_at?: string;

  email?: string;

  plaid_status?: string;

  updated_at?: string;
}

export interface MeListAccountsResponse {
  accounts?: Array<MeListAccountsResponse.Account>;
}

export namespace MeListAccountsResponse {
  export interface Account {
    id?: number;

    account_number?: string;

    status?: string;

    type?: string;
  }
}

export interface MeUpdateParams {
  account_application?: MeUpdateParams.AccountApplication;

  /**
   * Must be 'PENDING'
   */
  plaid_status?: 'PENDING';
}

export namespace MeUpdateParams {
  export interface AccountApplication {
    /**
     * Set to true to finalize and submit the application
     */
    submit?: boolean;
  }
}

export declare namespace Me {
  export {
    type ApplicationResponse as ApplicationResponse,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeListAccountsResponse as MeListAccountsResponse,
    type MeUpdateParams as MeUpdateParams,
  };
}
