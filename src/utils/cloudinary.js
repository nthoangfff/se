require('dotenv').config();
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name:"dzjabxktk",
  api_key:"468786694491982",
  api_secret: "giDa-QS-zzvel4JZfBEfU8sOTeY",
});

module.exports = { cloudinary };