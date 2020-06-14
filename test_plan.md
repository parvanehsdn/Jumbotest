**Uploads an image:**

- User should not be able to enter non integer for &quot;ID of pet to update&quot;
- Users should not be able to enter non string for &quot;Additional data to pass to server&quot;
- Users should not be able to execute without entering &quot;petId&quot;
- User enter integer for &quot;ID of pet to update&quot; and select a file for &quot;file to upload&quot; then execute, should get &quot;successful operation&quot; (code 200)
- User enter integer for &quot;ID of pet to update&quot;, enter string for &quot;Additional data to pass to server&quot; and select a file for &quot;file to upload&quot; then execute, should get &quot;successful operation&quot; (code 200)
- &quot;successful operation&quot; (code 200) response should be including code, type and message.
- User only enters integer for &quot;ID of pet to update&quot; and execute should get &quot;Error: Unsupported Media Type&quot; (code 415)
- User only enters integer for &quot;ID of pet to update&quot;, enter string for &quot;Additional data to pass to server&quot; and execute should get &quot;Error: Unsupported Media Type&quot; (code 415)

**Add a new pet to the store:**

- User should enter integer for &quot;id&quot;
- User should be able to add a new pet without &quot;name&quot;
- User should be able to add a new pet without &quot;status&quot;
- User should be able to add a new pet just with &quot;id&quot; then get code 200
- User should get &quot;Invalid input&quot; when enter non integer for &quot;id&quot; (code 405)
- User should not be able to add same data more than once for a pet

**Update an existing pet:**

- Users should not be able to execute with non-integer for &quot;id&quot;
- User should be able to update a pet with an empty &quot;name&quot; and get code 200
- User should be able to update a pet with an empty &quot;status&quot; and get code 200
- User should get &quot;Invalid ID supplied&quot; (code 400) when enter an invalid &quot;id&quot;, &quot;name&quot; or &quot;status&quot;
- Users should get &quot;Pet not found&quot; (code 404) when user enter incorrect &quot;id&quot;
- User should get &quot;Validation exception&quot; (code 405) response to confirm that the requested resource is valid, but the user request has used an unacceptable HTTP method

**Find pets by status:**

- User should not be able to execute without selecting any &quot;status&quot; and should get &quot;Invalid status value&quot; (code 400)
- Users should not be able to execute more than one &quot;status&quot; at the same time
- User should get &quot;successful operation&quot; (code 200) when searching with valid &quot;status&quot;
- User should be able to get all available pets when searching with available &quot;status&quot;
- User should be able to get all pending pets when searching with pending &quot;status&quot;
- User should be able to get all sold pets when searching with sold &quot;status&quot;

**Find pet by ID:**

- User should not be able to execute without &quot;ID of pet to return&quot; and should get &quot;Invalid ID supplied&quot; (code 400)
- User should get &quot;successful operation&quot; (code 200) when searching with valid &quot;ID&quot;
- Users should get &quot;Pet not found&quot; (code 404) when user enter incorrect &quot;id&quot;
- Response includes &quot;name&quot; and &quot;status&quot; when user enters valid &quot;ID&quot; with &quot;successful operation&quot; (code 200)
- User should enter only integer for &quot;petId&quot;

**Update a pet in the store with form data:**

- User should not be able to update a pet without entering the &quot;ID of pet that needs to be updated&quot; and should get &quot;Invalid input&quot; (code 405)
- Users should be able to update the pet when entering just the &quot;ID of pet that needs to be updated&quot; and get code 200
- Users should be able to update the pet when entering just the &quot;ID of pet that needs to be updated&quot; and &quot;Updated name of the pet&quot; and get code 200
- Users should be able to update the pet when entering just the &quot;ID of pet that needs to be updated&quot; and &quot;Updated status of the pet&quot; and get code 200
- Users should be able to update the pet when entering the &quot;ID of pet that needs to be updated&quot;, &quot;Updated name of the pet&quot; and &quot;Updated status of the pet&quot; and get code 200
- User should not be able to execute when entering non-integer for &quot;petId&quot;
- User should not be able to execute when entering non-string for &quot;name&quot; and &quot;status&quot;

**Delete a pet:**

- User should not be able to delete a pet without entering &quot;Pet id to delete&quot; and should get &quot;Invalid ID supplied&quot; (code 400)
- Users should not be able to delete a pet with incorrect &quot;Pet id to delete&quot; and should get &quot;Pet not found&quot; (code 404)
- User should be able to delete a pet when entering correct &quot;Pet id to delete&quot; and should get code 200
- User should not be able to delete a pet more than once
- User should not be able to execute when entering non-integer for &quot;petId&quot;
- If &quot;api\_key&quot; is supplied, must be string

**Place an order for a pet:**

- User should not be able to place an order without &quot;id&quot;
- User should not be able to place an order without &quot;petId&quot;
- User should not be able to place an order without providing at least &quot;id&quot; and &quot;petId&quot;
- User should not be able to place an order with invalid petId and should get &quot;Invalid order&quot; (code 400)
- User should not be able to place an order with a &quot;quantity&quot; bigger than availability
- User should not be able to place an order with negative &quot;quantity&quot;
- User should not be able to place an order with a &quot;shipDate&quot; smaller than current date and time
- User should get &quot;successful&quot; message when the order is complete
- User should not be able to place an order with less than 1 in &quot;quantity&quot; (code 400)
- &quot;id&quot; and &quot;petId&quot; should be integer

**Find purchase order by ID:**

- User should get &quot;successful operation&quot; (code 200) when entering valid ID
- Response should include &quot;id&quot;, &quot;petId&quot;, &quot;quantity&quot;, &quot;shipDate&quot;, &quot;status&quot;, &quot;complete&quot; when searching by valid ID
- User should get &quot;Invalid ID supplied&quot; (code 400) when enter invalid ID (non-integer)
- User should get &quot;Order not found&quot; (code 404) when enter an incorrect ID
- User should not find any order without entering any ID

**Delete purchase order by ID:**

- User should get code 200 when entering valid ID
- User should get &quot;Invalid ID supplied&quot; (code 400) when enter invalid ID (non-integer)
- User should get &quot;Order not found&quot; (code 404) when enter an incorrect ID

- User should not be able to delete any order without entering any ID
- User should not be able to delete an order more than once

**Returns pet inventories by status:**

- User should be able to get the quantity of &quot;sold&quot; pets
- User should be able to get the quantity of &quot;nonavailable&quot; pets
- User should be able to get the quantity of &quot;available&quot; pets

**Create list of users with given input array (Array):**

- The array should include &quot;id&quot; in integer
- The array should include &quot;username&quot; in string
- The array should include &quot;firstName&quot; in string
- The array should include &quot;lastName&quot; in string
- The array should include &quot;email&quot; in string
- The array should include &quot;password&quot; in string
- The array should include &quot;phone&quot; in string
- The array should include &quot;userStatus&quot; in integer
- Default message should be &quot;Successful operation&quot; (code 200)

**Creates list of users with given input array (list):**

- The list array should include &quot;id&quot; in integer
- The list array should include &quot;username&quot; in string
- The list array should include &quot;firstName&quot; in string
- The list array should include &quot;lastName&quot; in string
- The list array should include &quot;email&quot; in string
- The list array should include &quot;password&quot; in string
- The list array should include &quot;phone&quot; in string
- The list array should include &quot;userStatus&quot; in integer
- Default message should be &quot;Successful operation&quot; (code 200)

**Get user by username:**

- User should get &quot;id&quot;, &quot;username&quot;, firstName&quot;, &quot;lastName&quot;, &quot;email&quot;, &quot;password&quot;, &quot;phone&quot; and &quot;userStatus&quot; when entering valid &quot;username&quot; in string (code 200)
- User should not get any result without entering &quot;username&quot; and should get &quot;Invalid username supplied&quot; (code 400)
- user should get &quot;Invalid username supplied&quot; when entering non string &quot;username&quot; (code 400)
- user should get &quot;User not found&quot; (code 404) when entering invalid &quot;username&quot;

**Update User:**

- user should be able to update &quot;id&quot; integer when providing a valid &quot;username&quot;
- user should be able to update &quot;username&quot; string when providing a valid &quot;username&quot;
- user should be able to update &quot;firstName&quot; string when providing a valid &quot;username&quot;
- user should be able to update &quot;lastName&quot; string when providing a valid &quot;username&quot;
- user should be able to update &quot;email&quot; string when providing a valid &quot;username&quot;
- user should be able to update &quot;password&quot; string when providing a valid &quot;username&quot;
- user should be able to update &quot;phone&quot; string when providing a valid &quot;username&quot;
- user should be able to update &quot;status&quot; integer when providing a valid &quot;username&quot;
- user should not be able update any value without entering any &quot;username&quot; (code 400)
- user should not be able to update any value when entering an invalid &quot;username&quot; (code 404)

**Delete user:**

- user should be able to delete a user when entering a valid &quot;username&quot; (code 200)
- user should not be able delete a user more than once
- user should not be able delete anything without entering any &quot;username&quot; (code 400)
- user should not be able to delete anything when entering an invalid &quot;username&quot; (code 404)
- &quot;username&quot; must be string

**Logs user into the system:**

- user must enter a valid &quot;username&quot; and a valid &quot;password&quot; to login successfully (code 200)
- user should not be able to login without entering &quot;username&quot; (code 400)
- user should not be able to login without entering &quot;password&quot; (code 400)
- user should not be able to login with incorrect &quot;username&quot; (code 400)
- user should not be able to login with incorrect &quot;password&quot; (code 400)
- token should expire after 3 hours
- when token is expired, user should be logged out
- user should not be able login with more than one &quot;username&quot; in the same browser
- &quot;username&quot; and &quot;password&quot; must be string

**Logs out current logged in user session:**

- only logged in user should be able to logout
- only users with a valid token should be able to log out

**Create user:**

- to successfully create a new user (code 200), user must provide id&quot; integer, &quot;username&quot; string, &quot;firstName&quot; string, &quot;lastName&quot; string, &quot;email&quot; string, &quot;password&quot; string, &quot;phone&quot; string and &quot;userStatus&quot; integer
- if body of &quot;create user&quot; is incomplete, user should not be able to submit create new user request