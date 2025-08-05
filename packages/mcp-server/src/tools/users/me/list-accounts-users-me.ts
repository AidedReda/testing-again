// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'ariesmcpsuperfinalfinal/filtering';
import { Metadata, asTextContentResult } from 'ariesmcpsuperfinalfinal/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Aries from 'ariestesting';

export const metadata: Metadata = {
  resource: 'users.me',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/users/me/accounts',
  operationId: 'getUserAccounts',
};

export const tool: Tool = {
  name: 'list_accounts_users_me',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGets the currently authenticated user's trading accounts.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    accounts: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'integer'\n          },\n          account_number: {\n            type: 'string'\n          },\n          status: {\n            type: 'string'\n          },\n          type: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Aries, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.me.listAccounts()));
};

export default { metadata, tool, handler };
