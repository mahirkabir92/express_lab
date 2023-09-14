const sneakers = [
    {sneaker: 'Jordan 1', done: true},
    {sneaker: 'Yeezy', done: false},
    {sneaker: 'New Balance', done: true}
  ];

  module.exports = {
    getAll: function() {
        return sneakers
    }
  }