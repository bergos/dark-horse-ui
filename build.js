/* global cp, exec, mkdir, test */

require('shelljs/global')

if (!test('-d', 'dist')) {
  mkdir('dist')
}

exec('browserify lib/dark-horse.js --standalone DarkHorse > dist/dark-horse.js')

exec('vulcanize --inline-scripts --inline-css --strip-comments dark-horse-dist.html > dist/dark-horse.html')

cp('index.html', 'dist/index.html')
cp('node_modules/webcomponents.js/webcomponents.js', 'dist/webcomponents.js')
