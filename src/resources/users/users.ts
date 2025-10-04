// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MeAPI from './me';
import {
  ApplicationResponse,
  Me,
  MeListAccountsResponse,
  MeRetrieveResponse,
  MeUpdateParams,
  MeUpdateResponse,
} from './me';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Users extends APIResource {
  me: MeAPI.Me = new MeAPI.Me(this._client);

  /**
   * Creates a new user account.
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/v1/users', { body, ...options });
  }
}

export interface UserCreateResponse {
  id?: number;

  auth?: UserCreateResponse.Auth;

  country?: string;

  created_at?: string;

  email?: string;

  updated_at?: string;
}

export namespace UserCreateResponse {
  export interface Auth {
    /**
     * JWT access token
     */
    access_token?: string;

    /**
     * JWT refresh token
     */
    refresh_token?: string;

    /**
     * User role
     */
    role?: string;
  }
}

export interface UserCreateParams {
  /**
   * Must be a valid 3-letter country code
   */
  country: string;

  /**
   * Must be a valid email address
   */
  email: string;

  /**
   * Must be a strong password
   */
  password: string;
}

Users.Me = Me;

export declare namespace Users {
  export { type UserCreateResponse as UserCreateResponse, type UserCreateParams as UserCreateParams };

  export {
    Me as Me,
    type ApplicationResponse as ApplicationResponse,
    type MeRetrieveResponse as MeRetrieveResponse,
    type MeUpdateResponse as MeUpdateResponse,
    type MeListAccountsResponse as MeListAccountsResponse,
    type MeUpdateParams as MeUpdateParams,
  };
}
