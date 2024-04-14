<div>
    <h1 style="color: skyblue">MAIN TECHNOLOGY USED</h1>
    <ul style="list-style:'🔗  '">
        <li><a href="https://nextjs.org">NEXT JS</a></li>
        <li><a href="https://tailwindcss.com">TAILWIND CSS</a></li>
        <li><a href="https://www.mysql.com">MySQL</a></li>
    </ul>
</div>
<div style="margin-top: 2rem">
    <h1 style="color: skyblue">DEVELOPMENT ENVIRONMENT</h1>
    <ul style="list-style:'➡️ '">
        <li>Use NEXT.JS framework documentation in building your application.</li>
        <li>API also uses NEXT.JS </li>
        <li>Encrypt strings before uploading to database.</li>
    </ul>
</div>
<div style="margin-top: 2rem">
    <h1 style="color: skyblue">SERVER PREBUILT DATABASE QUERY FUNCTIONS</h1>
    <ul style="list-style:'⚫ '">
    <h2>Development Database tables</h2>
        <li>
            <h3>Creating and Dropping tables function</h3>
            <p>To create tables, add a new file in the <u>dev/migration/tables</u> folder.</p>
            <p>Add properties array then add createTable and dropTable function.</p>
            <p>Make sure to add the new tables create function to <u>migrate.ts</u> and drop function to <u>droptables.ts</u></p>
            <p>Or you can edit this example code below.</p>

```typescript
    import createTable from "../_components/createTable";
    import dropTable from "../_components/dropTable";

    const properties = [
        "name VARCHAR(50) UNIQUE NOT NULL",
        "details TEXT NOT NULL",
        "tag TEXT"
    ];

    const table = "items"

    export function createItems() {
        createTable(table, properties);
    };

    export function dropItems() {
        dropTable(table);
    };
```
</li>

<li>
    <h3>Migrating and Dropping</h3>
    <p>Migrate database tables by accessing path /api/database/createtables in browser of any fetch tools.</p>
    <p>Drop database tables by accessing path /api/database/droptables in browser of any fetch tools.</p>
    <p>Use this for now since I don`t know how to add ts scripts with next.js yet. You can create the script for creating and dropping tables if you know how to.</p>
</li>
    <li style="list-style:'📌 '"><strong style="color: orangered">Note: it is better to add dev and api/database folder to gitignore and make this accessible only in dev environment.</strong></li>
    </br>
    <h2>Preset query functions</h2>
        <li>
            <h3>select</h3>
            <p>Query the database to get all rows from a given table.</p>
            <p>Returns with an array of objects.</p>
            
```typescript
    select({ table:"table_name", where:{key="value"}})
```
</li>
    <li>
        <h3>find</h3>
        <p>Query the database to get a specific row from a given table.</p>
        <p>Returns with a single object.</p>

```typescript
    find({table:"table_name",id:"item_id"})
```
</li>
    <li>
    <h3>insert</h3>
    <p>Sends data to the server to insert a row to the database.</p>
    <p>Returns with a single object.</p>

```typescript
    insert({table:"table_name",data: {key:"value"}})
```
</li>
    <li>
        <h3>update</h3>
        <p>Sends data to the server to update a row from the database.</p>
        <p>Returns with the updated object.</p>

```typescript
    update({table:"table_name",data: {key:"value"},id:"item_id"})
```
</li>
        <li>
            <h3>remove</h3>
            <p>Deletes a row from the database.</p>
            <p>Returns with a single object.</p>

```typescript
    remove({table:"table_name",id:"item_id"})
```
</li>
</ul>

</div>
<div style="margin-top: 2rem">
    <h1 style="color: skyblue">DATA FETCHING</h1>
    <ul style="list-style:'⚫ '">
    <h2>Preset fetch functions</h2>
    <li>
        <h3>get</h3>
        <p>method = GET</p>

```typescript
    get("endpoint")
```
</li>
    <li>
        <h3>post</h3>
        <p>method = POST</p>

```typescript
    post("endpoint", {key:"value"})
```
</li>
    <li>
        <h3>put</h3>
        <p>method = PUT</p>

```typescript
    put("endpoint?id=item_id", {key:"value"})
```
</li>
    <li>
        <h3>del</h3>
        <p>method = DELETE</p>

```typescript
    del("endpoint?id=item_id")
```
</li>
</ul>
</div>

<div style="margin-top: 2rem">
    <h1 style="color: skyblue">MIDDLEWARES</h1>
    <ul style="list-style:'⚫ '">
    <h2>Set up requirements before proceeding some operations.</h2>
    <li>
        <h3>Authentication</h3>
        <p>Checks for header Access_key and Authorization before allowing api calls.</p>
        <p>

```typescript    
    import authentication from "relative_path_to/middleware/authentication";

    authentication(req,res);
```
</li>
    <li>
        <h3>Encryption</h3>
        <p>Checks for header Access_key and Authorization before allowing api calls.</p>

```typescript    
     //hashing
    import hashString from "relative_path_to/middleware/encryption";

    const hash = await hashString("plain_text");
    return hash;

    //comparing hash
    import compareHash from "relative_path_to/middleware/encryption";
    
    const unhash = await hashString("plain_text", "hashedString");
    return unhash;

```
</li>
</ul>
</div>

<style>
p {
    color: powderblue
}
</style>
