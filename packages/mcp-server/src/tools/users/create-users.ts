// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'ariesmcpsuperfinalfinal/filtering';
import { Metadata, asTextContentResult } from 'ariesmcpsuperfinalfinal/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Aries from 'ariestestingmcp';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/users',
  operationId: 'createUser',
};

export const tool: Tool = {
  name: 'create_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new user account.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'integer'\n    },\n    auth: {\n      type: 'object',\n      properties: {\n        access_token: {\n          type: 'string',\n          description: 'JWT access token'\n        },\n        refresh_token: {\n          type: 'string',\n          description: 'JWT refresh token'\n        },\n        role: {\n          type: 'string',\n          description: 'User role'\n        }\n      }\n    },\n    country: {\n      type: 'string'\n    },\n    created_at: {\n      type: 'string',\n      format: 'date-time'\n    },\n    email: {\n      type: 'string'\n    },\n    updated_at: {\n      type: 'string',\n      format: 'date-time'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      country: {
        type: 'string',
        description: 'Must be a valid 3-letter country code',
      },
      email: {
        type: 'string',
        description: 'Must be a valid email address',
      },
      password: {
        type: 'string',
        description: 'Must be a strong password',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['country', 'email', 'password'],
  },
  annotations: {},
};

export const handler = async (client: Aries, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.create(body)));
};

export default { metadata, tool, handler };
