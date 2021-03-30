let app = require('express')();


const swaggerUi = require('swagger-ui-express');
const drsSwaggerDocument = require('./docs/device_registration/swagger.json');

// registrations
app.use('/drs/api-docs', swaggerUi.serve, swaggerUi.setup(drsSwaggerDocument));

var port = 8000;

app.listen(port, () => {
	console.log(`listening at ${port}`);
});