---
title: YAML Reference
description: Available properties in Watchtower's YAML files
date: "2019-05-21"
---

Here is a list of all available properties in Watchtower's YAML files.

```yaml
version: 1 # Required, only version currently supported

variables: # Variables to use below
  baseUrl: https://www.example.com
  email: <$#fake$>internet.email<$/fake$> # Generate fake data each test run with faker.js (https://github.com/marak/Faker.js/)

merge: # Optional YAML merge keys (https://yaml.org/type/merge.html)
  - &OK
    jsonPath: response.status
    equal: 200

checks: # Required, checks to run
  example1: # Required, name of check
    request: # Required, request information, follows HAR 1.2 Spec (http://www.softwareishard.com/blog/har-12-spec/)
      url: <$ baseUrl $>/ # Required, URL to call using variable from above
      headers: # List of headers
        - name: Content-Type
          value: application/json
      method: POST # Defaults to GET
      postData: # Data to post
        mimeType: application/json # Required, mime type of posted data
        text: # Required unless params provided, data to post
          email: <$ email $>
        params: # Required unless text provided, URL encoded data to post
          - name: email
            value: <$ email $>
      queryString: # List of query parameters
        - name: limit
          value: 10
    auth: # HTTP Basic auth credentials
      basic:
        username: john
        password: root
    assertions: # Assertions to run on response, follows HAR 1.2 Spec (http://www.softwareishard.com/blog/har-12-spec/)
      - <<: *OK # Using merge key from above
      - jsonPath: time
        lessThan: 12000 # Also supports greaterThan
      - jsonPath: response.content.text.access_token
        type: [string] # Also supports boolean, object, array, number, null
        regex: ^[a-zA-Z0-9]{50}$
      - jsonPath: response.headers.location
        type: [string]

  example2:
    request:
      url: <$ example1.response.content.text.links.self $> # Use value in previous request's response

  example3:
    request:
      url: <$#jsonPath$>example1.response.content.text.items[0].links.self<$/jsonPath$> # Use JSONPath to extract value from first item of list in previous request's response
```
