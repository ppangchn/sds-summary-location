const db = require('./data.json');
const express = require('express');

const app = express();
const port = 3000;

let result = {};

const locationSet = new Set();

for (const data of db) {
	locationSet.add(data.location);
}

const frontDoorNumM = db.filter(data => data.location === 'Front Door' && data.gender === 'Male')
	.length;
const frontDoorNumF = db.filter(data => data.location === 'Front Door' && data.gender === 'Female')
	.length;
const zoneANumM = db.filter(data => data.location === 'Zone A' && data.gender === 'Male').length;
const zoneANumF = db.filter(data => data.location === 'Zone A' && data.gender === 'Female').length;

result['Number Male at Front Door'] = frontDoorNumM;
result['Number Female at Front Door'] = frontDoorNumF;
result['Number Male at Zone A'] = zoneANumM;
result['Number Female at Zone A'] = zoneANumF;

app.get('/', (req, res) => res.send(result));

app.listen(port, () => console.log(`Server listening on port ${port}!`));
