var express = require('express');
var router = express.Router();
var framework = require('../framework/framework.js');
var admin = require("firebase-admin");
var serviceAccount = require(".././keys/key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://trackband-iot.firebaseio.com"
});
admin.database.enableLogging(true);



router.get('/:id', function (req, res, next) {
  var db = admin.database();

   var ref = db.ref();



  ref.once("value", function(snapshot) {

    console.log("got the value");
    var data=snapshot.val();
    console.log(data);
    var emails=[];
    for(d in data){
      emails.push(data[d].email);
      if(req.params.id==data[d].email){
        // framework.renderPage(res, "locations", { "dataTableHeaders" : emails });

      //  break;
      res.json(data[d].locations);
      break;
      }
    }

    res.end();

  });
  // console.log(req.params.id);
});

router.get('/', function (req, res, next) {
  var db = admin.database();

   var ref = db.ref();



  ref.once("value", function(snapshot) {

    console.log("got the value");
    var data=snapshot.val();
    console.log(data);
    var emails=[];
    for(d in data){
      emails.push(data[d].email);
      console.log(JSON.stringify(d.email));
    }
    framework.renderPage(res, "requests", { "dataTableHeaders" : emails });
    res.end();

  });



});



module.exports = router;
