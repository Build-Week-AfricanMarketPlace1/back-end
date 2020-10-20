
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {item_name: 'Eggs', image_url: 'https://cdn.pixabay.com/photo/2020/09/30/18/09/eggs-5616647_960_720.jpg', price: '$1.00/dozen', description: 'Farm Fresh Eggs', country: 'Kenya', city: 'Nairobi', address: '123 Market Street', zip_code: '00100', created_at: '', user_id: 1, category_id: 1},
        {item_name: 'Beef', image_url: 'https://cdn.pixabay.com/photo/2015/12/08/00/32/steak-1081819_960_720.jpg', price: '$2.99/lb', description: 'Grass Fed Beef', country: 'Nigeria', city: 'Abuja', address: '369 Farm Circle', zip_code: '900271', created_at: '', user_id: 2, category_id: 2},
        {item_name: 'Chicken', image_url: 'https://cdn.pixabay.com/photo/2018/03/09/17/41/chicken-3212144_960_720.jpg', price: '$0.99/lb', description: 'Free Range Chicken', country: 'South Africa', city: 'Cape Town  ', address: '159 Feather Lane', zip_code: '7100', created_at: '', user_id: 1, category_id: 3},
        {item_name: 'Apples', image_url: 'https://cdn.pixabay.com/photo/2016/11/30/15/00/orchard-1872997_960_720.jpg', price: '$0.89/lb', description: 'Fresh Picked Apples', country: 'Tanzania', city: 'Dodoma', address: '852 Orchard Grove', zip_code: '00000', created_at: '', user_id: 2, category_id: 8},
        {item_name: 'Coffee', image_url: 'https://cdn.pixabay.com/photo/2018/06/06/10/13/coffee-beans-3457587_960_720.jpg', price: '$4.00/lb', description: 'Fresh Ground Coffee', country: 'Morocco', city: 'Rabat', address: '216 Beanery Loop', zip_code: '10170', created_at: '', user_id: 1, category_id: 13},
        {item_name: 'Sweet Potatoes', image_url: 'https://cdn.pixabay.com/photo/2018/07/24/13/01/vegetable-3559112_960_720.jpg', price: '$0.88/ea', description: 'Farm Grown Sweet Potatoes', country: 'Ethiopia', city: 'Addis Ababa', address: '951 Sweet Pot Drive', zip_code: '1230', created_at: '', user_id: 2, category_id: 10},        
      ]);
    });
};

