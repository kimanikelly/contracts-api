# JavaScript GET Request

```
const axios = require("axios");

axios
  .get("https://kimanikelly-contractapi.herokuapp.com/tokenContract")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```
