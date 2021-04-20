const Client = require('../models/client');
exports.test = (req, res) => {
    res.send({message: 'client module'})
}

exports.client = (req, res) => {
    const client = new Client(req.body);


    client.save((err, client)=>{
        if(err) {
            return res.status(400).send(err)
        }
        res.send(client)
    })
}
exports.get = (req, res, next)=>{
    Client.find()
    .then(response => {res.json({response})
    })
    .catch(error =>{
        res.json({message:error})
    })
}