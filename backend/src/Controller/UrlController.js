const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const shortUrl = await connection('url').select('*');

        return res.json(shortUrl);
    },

    async indexUrl(req, res){
        const {url} = req.params;
        
        const  shortUrl = await connection('url')
        .where('url', url)
        .select('shortUrl')
        .first();

        return res.json(shortUrl);
    },

    async create(req, res){
        const {hits, url, shortUrl} = req.body;
 
        const [id] = await connection('url').insert({
            hits,
            url,
            shortUrl
        });

        return res.json({id});

    }
}