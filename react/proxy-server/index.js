const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const makeGqlRequest = async (req, res, isPreview) => {
    try {
        const { method, url, headers, body } = req;
    
        const contentfulResponse = await axios({
            method,
            url: `https://graphql.contentful.com/content/v1/spaces/sd0a7tn24wc2`, // Remplacez <SPACE_ID> par l'ID de votre espace Contentful
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${isPreview ? "OeMQAmQF7tFNJhzVLCWPY4BbpdSEZTDHhPvx-4lr4m0" : "hFuEQqeun545TwI7Ve9W0FHpKkPhr22TapA_MLM0EoA" }`,
            },
            data: body,
        });
    
        res.json(contentfulResponse.data);
    } catch (error) {
        //console.log("ERROR", error)
        res.status(500).json({ error: 'Une erreur est survenue lors de la requête' });
    }

}

app.all('/graphql', async (req, res) => {
    makeGqlRequest(req, res, false)
});
app.all('/preview', async (req, res) => {
    makeGqlRequest(req, res, true)
});

const port = 3100; // Choisissez le port sur lequel votre application sera exécutée
app.listen(port, () => {
  console.log(`Application en cours d'exécution sur le port ${port}`);
});