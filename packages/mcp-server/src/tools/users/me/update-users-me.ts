// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'testingariesmcp/filtering';
import { Metadata, asTextContentResult } from 'testingariesmcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Testingariesmcp from 'testingariesmcp';

export const metadata: Metadata = {
  resource: 'users.me',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/v1/users/me',
  operationId: 'updateMe',
};

export const tool: Tool = {
  name: 'update_users_me',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdates the currently authenticated user. Supports partial updates including account application data.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'integer'\n    },\n    account_application: {\n      $ref: '#/$defs/application_response'\n    },\n    country: {\n      type: 'string'\n    },\n    created_at: {\n      type: 'string',\n      format: 'date-time'\n    },\n    email: {\n      type: 'string'\n    },\n    plaid_status: {\n      type: 'string'\n    },\n    updated_at: {\n      type: 'string',\n      format: 'date-time'\n    }\n  },\n  $defs: {\n    application_response: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'integer'\n        },\n        can_submit: {\n          type: 'boolean'\n        },\n        missing_fields: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        plaid_link_token: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'CREATED',\n            'PENDING_ID_VERFICATION',\n            'PENDING_APPROVAL',\n            'APPROVED',\n            'REJECTED'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      account_application: {
        type: 'object',
        properties: {
          submit: {
            type: 'boolean',
            description: 'Set to true to finalize and submit the application',
          },
        },
      },
      plaid_status: {
        type: 'string',
        description: "Must be 'PENDING'",
        enum: ['PENDING'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Testingariesmcp, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.me.update(body)));
};

export default { metadata, tool, handler };
