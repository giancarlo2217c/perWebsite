const contactModel = require('../models/contactModel')

const createContact = (req, res) => {
    const body = req.body
    console.log(body);
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must include your information',
        })
    }

    const newContact = new contactModel(body)

    newContact.save().then(() => { //the callback of then is called when save finishes
        return res.status(201).json({
            success: true,
            id: newContact._id,
            message: "contact added!",
        })
    })
    .catch(error => {
        return res.status(400).json({
        error,
        message: 'Contact not created',
        })
    })
    console.log('saved: ', res)
}

const updateContact = async (req, res) => {
    const body = req.body
    if(!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }


    contactModel.findOne({_id: req.params.id }, (err, contact) => {
        if(err) {
            return res.status(404).json({
                err, message: 'contact not found',
            })
        }
        contact.title = body.title
        contact.content = body.content

        contact.save().then( () => {
            return res.status(200).json({
                success: true,
                id: contact._id,
                message: "Contact updated"
            })
        }).catch(error => { // if save fails, then catch will get the error from save and use in this callback
            return res.status(404).json({
            error: error,
            message: 'contact not updated',
            })
        })
    })

}

const deleteContact = async (req, res) => {
    await contactModel.findOneAndDelete({_id: req.params.id}, (err, contact) => {
        if(err) {
            return res.status(400).json({ success: false, error: err} )
        } 

        if (!Contact) {
            return res. status(404).json({success: false, error: 'contact not found'})
        }

        return res.status(200).json({success: true, data: contact})
    }).catch(err => console.log(err))
}

const getContactById = async (req, res) => {
    await contactModel.findOne({ _id: req.params.id }, (err, contact) => {
        if (err) {
            return res.status(400).json({succes: false, error: err})
        }

        if(!contact) {
            return res.status(404).json({success: false, error: 'contact not found'})
        }

        return res.status(200).json({success: true, data: contact})
    }).catch(err => console.log(err))
}

const getContacts = async (req, res) => {
    await contactModel.find({}, (err, Contacts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!Contacts.length) {
            return res
                .status(404)
                .json({ success: false, error: `Contacts not found` })
        }
        return res.status(200).json({ success: true, data: Contacts })
    }).catch(err => console.log(err))
}

module.exports = {
    createContact,
    updateContact,
    deleteContact,
    getContacts,
    getContactById,
}
