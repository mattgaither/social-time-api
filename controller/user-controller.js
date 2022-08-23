const { User } = require('../models');

const UserController = {
  getallUser(req, res) {
  User.find({})
    .sort({_id: -1})
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      consloe.log(err);
      res.status(400).json(err);
    });
  },

  createUser({body}, res) {
    User.create(body)
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => res.status(400).json(err));
  },

  getUserByID({ params }, res ) {
    User.findOne({ _id: params.id })
    .then((dbUserData) => {
      if(dbUserData) {
        res.status(404).json({ message: 'User not found with this ID' });
      };
      res.json(dbUserData);
    })
    .catch((err) => { 
      concole.log(err);
      res.status(404).json(err);
    });
  },


  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {new: true})
    .then((dbUserData) => {
      if(dbUserData) {
        res.status(404).json({ message: 'User not founf with this ID'});
      };
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });
  },


  deleteUser({ params }, res) {
    User.findOneAndDestory({ _id: params.id })
    .then((dbUserData) => {
      if(dbUserData) {
        res.status(404).json({ message: 'User not found with this ID'});
        return;
      };
      res.json(dbUserData)
    })
    .catch((err ) => {
      console.log(err);
      res.status(400).json(err);
    });
  },
};

module.export = UserController;