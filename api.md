# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserCreateResponse</a></code>

Methods:

- <code title="post /v1/users">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>

## Me

Types:

- <code><a href="./src/resources/users/me.ts">ApplicationResponse</a></code>
- <code><a href="./src/resources/users/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/users/me.ts">MeUpdateResponse</a></code>
- <code><a href="./src/resources/users/me.ts">MeListAccountsResponse</a></code>

Methods:

- <code title="get /v1/users/me">client.users.me.<a href="./src/resources/users/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="patch /v1/users/me">client.users.me.<a href="./src/resources/users/me.ts">update</a>({ ...params }) -> MeUpdateResponse</code>
- <code title="get /v1/users/me/accounts">client.users.me.<a href="./src/resources/users/me.ts">listAccounts</a>() -> MeListAccountsResponse</code>

# Health

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> void</code>
