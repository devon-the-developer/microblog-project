
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogPosts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogPosts').insert([
        {id: 1, name: 'How to use the grep command', tags: 'command line, post, tech', content: 'This is my first ever post blah blah blah blah blah blah '},
        {id: 2, name: 'A GREAT HUMAN SKILL', tags: 'post, human skills, non-tech', content: 'THis is my second blah blah blah blah blah blah '},
        {id: 3, name: 'SOMETHING SAD And complete', tags: 'post, javascript', content: 'And this is my third blah blah blah blah blah blah '}
      ]);
    });
};
