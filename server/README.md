# Hello server

## setup

### 1. install sanity (for first time)

```
npm install -g @sanity/cli
```

### 2. login sanity 
```
sanity login
```

### 3. init (for create new project sanity)
```
sanity init
```

## Sanity Schema

```
export default {
  name: 'contact', // table name
  title: 'Contact', // table title
  type: 'document', // type to record
  fields: [ // fields in table
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text'
    }
  ]
}
```

### add schema for create schema

schema.js

1. import schema you created

```
import about from './about'
import contact from './contact'
import experiences from './experiences'
import skills from './skills'
import workExperience from './workExperience'
import works from './works'
```

2. add schema you import in createSchema()
```
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    about,
    contact,
    experiences,
    skills,
    workExperience,
    works
  ]),
})
```

3. npm start, sanity will build schema you created auto
```
npm start
```
