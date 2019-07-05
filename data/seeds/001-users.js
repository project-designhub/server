exports.seed = function(knex) {
  return knex('users')
    .del()
    .then(function() {
      return knex('users').insert([
        {
          email: 'testing1@gmail.com',

          profile_picture:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          username: 'testing1'
        },
        {
          email: 'testing2@gmail.com',
          profile_picture:
            'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
          username: 'testing2',
          full_name: 'rice doe',
          bio: 'this is a biography about myself. Im here to design stuff'
        }
      ]);
    });
};
