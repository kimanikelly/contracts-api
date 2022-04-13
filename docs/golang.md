# Golang GET Request

```
package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {

	res, err := http.Get("https://kimanikelly-contractapi.herokuapp.com/tokenContract")

	if err != nil {
		fmt.Println(err)
	}

	body, err := io.ReadAll(res.Body)

	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(string(body))
}
```
