# Hello Client

### sanity client config
1. get api token from sanity manager
2. create .env
```
REACT_APP_SANITY_PROJECT_ID='SANITY_PROJECT_ID'
REACT_APP_SANITY_TOKEN='SANITY_TOKEN'
```

### call sanity api
```
import { client } from '../client'

const Example = () => {
  useEffect(() => {
    const query = '*[_type == "test"]'

    client.fetch(query).then((data) => {
      // action 
    })
  }, [])

  return <>...</>
}

export default Example
```