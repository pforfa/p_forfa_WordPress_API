var WP_API = require('wordpress-rest-api');
const WP = new WP_API({
  endpoint: 'http://52.201.216.75/wp-json'
});

module.exports = {
  getPosts: function (){
    console.log('Inside getPosts().');

    return WP.posts().then(function (data){

      console.log('Successfully pinged the wordpress API and pulled posts.');

      //for(var i = 0; i < JSONposts.length; i++){
        // console.log(JSONposts[i]);
        // console.log(JSONposts[0].title.rendered);
        console.log('Finished Pulling JSON Data. Success.');
        console.log(data);
        console.log('About to return rendered data.');
        return data;
    }).catch(function(err) {
      console.log(err);
    });
  }
}
