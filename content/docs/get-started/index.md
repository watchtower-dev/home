---
title: Get Started
description: Getting Started with Watchtower
date: "2019-05-20"
---

Welcome to Watchtower! Validate your APIs return expected responses in seconds,

1. Head to [watchtower.dev/app](https://www.watchtower.dev/app) to create an account. It's free while in Beta!
2. Once logged in, select "API Keys"
3. Copy your ID and Secret into the following command to get an API token,

> ```shell
> curl -X POST https://watchtower-test.auth0.com/oauth/token \
>   -H 'Content-Type: application/json' \
>   -d '{
>     "audience": "https://api.watchtower.dev/",
>     "client_id": "<YOUR_ID>",
>     "client_secret": "<YOUR_SECRET>",
>     "grant_type": "client_credentials"
>   }'
> ```

4. To test your API, you'll create a `monitor` with various checks. Here's a simple example asserting a `200` status,

> ```yaml
> checks:
>   getExample:
>     request:
>       url: https://www.example.com
>     assertions:
>       - jsonPath: response.status
>         equal: 200
> ```

> Watchtower's API takes the `base64` encoding of this `yaml`. Copy the `access_token` from the previous response into the following command to create a monitor,

> ```shell
> curl -X POST https://api.watchtower.dev/monitors \
>   -H 'Authorization: Bearer <YOUR_TOKEN>' \
>   -H 'Content-Type: application/json' \
>   -d '{
>     "content": "dmVyc2lvbjogMQpjaGVja3M6CiAgZ2V0RXhhbXBsZToKICAgIHJlcXVlc3Q6CiAgICAgIHVybDogaHR0cHM6Ly93d3cuZXhhbXBsZS5jb20KICAgIGFzc2VydGlvbnM6CiAgICAgIC0ganNvblBhdGg6IHJlc3BvbnNlLn> N0YXR1cwogICAgICAgIGVxdWFsOiAyMDA=",
>     "name": "Get Started Example",
>     "schedule": 60
>   }'
> ```

5. To run the monitor on demand,

> ```shell
> curl -X POST https://api.watchtower.dev/monitors/<YOUR_MONITOR>/runs \
>   -H 'Authorization: Bearer <YOUR_TOKEN>'
> ```

6. [The App](https://www.watchtower.dev/app) now shows your new monitor scheduled to run every 60 minutes!
