# JavaScript GET Request

```
const axios = require("axios");

axios
  .get("http://ec2-34-203-42-249.compute-1.amazonaws.com/endpoint")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```
