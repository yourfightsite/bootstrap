const { exec } = require('child_process');
const mix = require('laravel-mix');

mix.extend('publish', () => {
  exec('php artisan vendor:publish --force --tag=public');
});
