# Golang GET Request

```
package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {

	res, err := http.Get("http://ec2-34-203-42-249.compute-1.amazonaws.com/endpoint")

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
