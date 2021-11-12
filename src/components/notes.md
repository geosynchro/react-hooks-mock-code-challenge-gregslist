## Deliverables
as a user i can:
1[x] see all listings
2[x] favorite and unfavorite any listing
3[] remove a listing from a page by clicking icon, shoudl persist on refresh
4[] Search for listings by their name


## Data

URL = `http://localhost:6001`

object data 

{
    "id": 1,
    "description": "heater",
    "image": "./images/heater.jpg",
    "location": "BROOKLYN"
  }


  for # delete request

  URL + `/listings/:id`

    ```json
    {}
    ```

# advanced deliverables
1[] sort listings alphabetically by location
2[] create a new listing by submitting a form, persist changes to the backend.

# POST Request data

``js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "description": "heater",
  "image": "./images/heater.jpg",
  "location": "BROOKLYN"
}
```

Example response:

```json
{
  "id": 1,
  "description": "heater",
  "image": "./images/heater.jpg",
  "location": "BROOKLYN"
}

