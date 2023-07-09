const Subscribers = require('../model/Subscriber');
// const bcrypt = require('bcrypt');

const getAllSubscribers = async (req, res) => {
  
  //current page
  const page = req.query.p;
  // const usersPerPage = req.query.s;
  const usersPerPage = 5;
  
  const searchQuery = req.query.q ?? '';
  // if (!searchQuery) return res.sendStatus(200)
    

  const users = await Subscribers.find({ firstname: { '$regex': searchQuery, '$options': 'i' }}, {})
  .sort({ firstname: 1 })
  .skip(page * usersPerPage)
  .limit(usersPerPage);
  // console.log(users, req?.body, "19: subscribersCont...")
  
  if (!users) return res.status(204).json({ 'message': 'No users found.'});
  
  console.log(users,  "27: usersCont...")
 
  res.json(users); 
} 
 
// const getAllSubscribers = async (req, res) => {
  
//   //current page
//   const page = req.query.p;
//   // const usersPerPage = req.query.s;
//   const usersPerPage = 3;

//   let subscribers = [];
//   const users = await Subscribers.find()
//   .sort({ firstname: 1 })
//   .skip(page * usersPerPage)
//   .limit(usersPerPage);
//   console.log(users, subscribers, "21: usersCont...")
//   users.forEach((user) => subscribers.push(user))
//   if (!subscribers) return res.status(200).json(subscribers);
  
//   if (!users) return res.status(204).json({ 'message': 'No users found.'});
  
//   console.log(users, subscribers, "27: usersCont...")

//   res.json(users); 
// }
 
const searchSubscribers = async (req,res) => {
  const searchQuery = req.query.q;
  if (!searchQuery) return res.sendStatus(200) 
  const { firstname, lastname, username, email } = req?.body 
  let searchProp = firstname || username || lastname || email
  console.log(searchQuery, searchProp)
  const searchResult = Subscribers.find({ searchProp: { '$regex': searchQuery, '$options': '1' }}, {})
  if (!searchResult) return res.status(204).json({ 'message': 'No users found.'});
  res.json(searchResult) 
}   
      
const createNewSubscriber = async (req, res) => { 
  const { userName, email, firstName, lastName, imageUrl, bio, favorite } = req.body;
  console.log(userName, email, firstName, lastName, "34: subsCon...") 
  if (!userName || !email) return res.status(400).json({ 'message': 'Username and email are required.'});
  // check for duplicate usernames in the db
  const duplicateUsername = await Subscribers.findOne({ username: userName }).exec();
  const duplicateEmail = await Subscribers.findOne({ email }).exec();
  if (duplicateUsername) return res.status(409).json({ 'message': "username already in use." }); //conflict
  if (duplicateEmail) return res.status(409).json({ 'message': "Email already in use." }); //conflict

  try {
    const result = await Subscribers.create({  
      "username": userName,
      "email": email,
      "firstname": firstName,
      "lastname": lastName,
      "imageUrl": imageUrl,
      "bio": bio,
      "favorite": favorite
    });

    console.log(result, "ln:50 subscribersController: result");

    // res.status(201).json({ 'success': `New  user ${userName} created!`});
    res.status(201).json({ result: { userName, email, firstName, lastName } });
  } catch (err) {
    const body = req.body
    console.log( body, "56: subsCon..." )
    res.status(500).json({ body })
  } 
}

const updateSubscriber = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ 'message': 'ID parameter is required.'});
  }

  const user = await Subscribers.findOne({ _id: req.body.id }).exec();  
  if (!user) {
    return res.status(400).json({ "message": `No user matches ID ${req.body.id}.`});
  } 
  if (req.body?.userName) user.username = req.body.userName;
  if (req.body?.lastName) user.lastname = req.body.lastName;
  if (req.body?.firstName) user.firstname = req.body.firstName;
  if (req.body?.email) user.email = req.body.email;
  if (req.body?.imageUrl) user.imageUrl = req.body.imageUrl;
  if (req.body?.favorite) user.favorite = req.body.favorite;
  const result = await user.save();
  res.json(result);
} 
  
const deleteSubscriber = async (req, res) => {
  console.log( req?.body, req?.params)
  if (!req?.params?.id) { 
    return res.status(400).json({ 'message': 'User ID is required.'});
  }

  const user = await Subscribers.findOne({ _id: req.params.id }).exec();   
  if (!user) {
    return res.status(204).json({ "message": `No useer matches ID ${req.params.id}.`});
  }
  const result = await user.deleteOne({ _id: req.params.id });
  res.json(result);
}
 
const getSubscriber = async (req, res) => {
  if (!req?.params?.id) { 
    return res.status(400).json({ 'message': 'User ID is required.'});
  }

  const user = await Subscribers.findOne({ _id: req.params.id }).exec();  
  if (!user) { 
    return res.status(400).json({ "message": `No user matches ID ${req.params.id}.`});
  }
  res.status(200).json(user);
}
 
module.exports = {
  getAllSubscribers,
  createNewSubscriber,
  updateSubscriber,
  deleteSubscriber,
  getSubscriber
}