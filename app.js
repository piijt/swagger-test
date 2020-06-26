const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 5000;

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Cavea_test API',
      description: 'Cavea_test API Description',
      contact: {
        name: 'Peter Jespersen'
      },
      servers: [`http://localhost:5000`],
    }
  },
  // [´routes/arbitraryAPI.js´]
  apis: [`app.js`]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Routes
/**
* @swagger
* /team:
*   get:
*     description: request team information
*     responses:
*       '200':
*         description: A sucessful response
*/
app.get('/team', async (req,res) => {
  res.send('team result')
});

/**
* @swagger
* /team:
*   put:
*     description: update team information
*     responses:
*       '201':
*         description: A sucessful response
*/
app.put('/team', async (req,res) => {
  res.send('team result')
});

/**
* @swagger
* /team:
*   post:
*     description: create team information
*     responses:
*       '201':
*         description: A sucessful response
*/
app.post('/team', async (req,res) => {
  res.send('team result')
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
