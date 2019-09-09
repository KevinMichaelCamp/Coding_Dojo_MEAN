module.exports = {

  details_function: function(req, res){
    res.render('details')
  },

  details_function1: function(req, res){
    const cat1 = {
      name: 'Mr. Pibb',
      color: 'Tiger Stripe',
      temperment: 'One cool cat',
      sleeping_spots: ["under the bed", "sunbeam", "on yo' face"],
    }
    const cat2 = {
      name: 'Mew',
      color: 'Striped Awesomely',
      temperment: 'Derpy',
      sleeping_spots: ['your bed', 'everywhere else']
    }
    res.render('details', {cat: cat1})
  }

}
