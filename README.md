takes
========

rip apart arrays or hashes into new, exciting forms


```js
var takes = require('takes');

//Take your desired properties inline
var some = take('property').from(array);

//or set up a Takes function to call later
var takesprop = takes('property');
takesprop(array);
```
## Take as many or as few properties as you want

```js
triplets: [
    {name: 'Joe', age: 20}
 ,  {name: 'Josie', age: 20}
 ,  {name: 'Johnny', age: 20}
]

takes('name').from(triplets);
// ['Joe', 'Josie', 'Johnny'];
```

## License
MIT