const mix = require('laravel-mix');

mix
    .setPublicPath('./dist')
    .browserSync('http://punch-clock.test/')
    .version();

mix.js('resources/scripts/app.js', 'js');
mix.sass('resources/styles/app.scss', 'css');
