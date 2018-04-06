module.exports = {
    getAll: (req, res) => {
        req.app.get('db').read_products().then(products => {
            res.status(200).send(products)
        })
    },

    getOne: (req, res) => {
        req.app.get('db').read_one([req.params.id]).then(product => {
            res.status(200).send(product)
        })
    },

    addProduct: (req, res) => {
        req.app.get('db').add_product([req.body.name, req.body.price, req.body.img]).then(results => {
            res.status(200).send({message: "Success! Item Added"})
        })
    },

    updateProduct: (req, res) => {
        req.app.get('db').update_product([req.params.id, req.body.name, req.body.price, req.body.img]).then(results => {
            res.status(200).send({message: "Success! Item Updated"})
        }).catch(err => {
            res.status(500).send("WHAT ARE YOU DOINGGG!!!")
        })
    },

    deleteProduct: (req, res) => {
        req.app.get('db').delete_product([req.params.id]).then(results => {
            res.status(200).send({message: "Success! Item Deleted"})
        })
    }
}