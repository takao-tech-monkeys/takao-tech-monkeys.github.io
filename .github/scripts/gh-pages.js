var ghpages = require('gh-pages');

console.log(process.env.GITHUB_REPOSITORY)

ghpages.publish('dist', {
    repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/' + process.env.GITHUB_REPOSITORY + '.git',
    dotfiles: true
}, function(err) { console.log(err) });
