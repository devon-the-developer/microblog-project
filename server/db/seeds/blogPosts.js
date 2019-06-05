
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogPosts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogPosts').insert([
        {id: 1, name: 'How to use the grep command', tags: 'command line, post, tech', content: 'This is my first ever post blah blah blah blah blah blah '},
        {id: 2, name: 'A GREAT HUMAN SKILL', tags: 'post, human skills, non-tech', content: 'THis is my second blah blah blah blah blah blah '},
        {id: 3, name: 'EggHead is a great tutorial site', tags: 'website, javascript, react, redux', content: 'And this is my third blah blah blah blah blah blah '},
        {id: 4, name: 'How to add a shadow onto a element', tags: 'css, tip, tech', content: 'This is my first ever post blah blah blah blah blah blah '},
        {id: 5, name: 'Meditation Tip #1', tags: 'meditation, human skills, non-tech', content: 'This is a great mediatation tip... or it would be where I put one '},
        {id: 6, name: 'Remember SuperHi Tutorial Site', tags: 'website, javascript, learning, react, apis', content: 'And this is my third blah blah blah blah blah blah '}
      ]);
    });
};
