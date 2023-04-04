// fetching from db.json
const url = "http://localhost:3000/Cars"
fetch(url)
.then(res=> res.json())
.then(data => data.forEach(car => renderCars(car)))