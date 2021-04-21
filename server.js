let app = require('express')();


const swaggerUi = require('swagger-ui-express');
// const drsSwaggerDocument = require('./docs/device_registration/swagger.json');
const iotSwaggerDocument = require('./docs/iot_access_layer/swagger.json');
// registrations
// app.use('/drs/api-docs', swaggerUi.serve, swaggerUi.setup(drsSwaggerDocument));

app.use('/iot/api-docs', swaggerUi.serve, swaggerUi.setup(iotSwaggerDocument));

// var port = 8000;
var port = 9000;

app.listen(port, () => {
	console.log(`listening at ${port}`);
});