// // User requesting shortened URL, params are the shortID of the url
Router.route('/:_id([a-zA-Z0-9]{6})', {where: 'server'}).get(function() {
  var id = String(this.params._id);

  try {
    var record = URLs.findOne({"shortId": id});
    var shortId = record.longURL;
  } catch (e) {
    this.render('Home');
  }
  this.response.writeHead(302, {
    'Location': String(record.longURL)
  });

  this.response.end();
});

Router.route('/:_id', function() {
  this.render('Home');
});

Router.route('/', function() {
  this.render('Home');
});


// Router.map(function () {
//   // Supplied potentially valid id
//   this.route('/:shortUrl([a-zA-Z0-9]{6})').get(function() {
//     console.log(this.params.shortUrl);
//
//     var id = String(this.params.shortUrl);
//     var record = URLs.findOne({"shortId": id});
//
//     if (record == NULL) {
//       this.render('Home');
//     } else {
//       this.response.writeHead(302, {
//         'Location': String(record.longURL)
//       });
//       this.response.end();
//     }
//   });
//
//   // Supplied potentially valid id
//   this.route('/:shortUrl', {
//     data: function() {
//       console.log(this.params.shortUrl);
//     },
//     template: 'Home'
//   });
//
//   this.route('/', {
//       template: 'Home'
//   });
// });
