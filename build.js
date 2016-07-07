/* global cp, exec, mkdir, test */

require('shelljs/global')

if (!test('-d', '.build')) {
  mkdir('.build')
}

if (!test('-d', 'dist')) {
  mkdir('dist')
}

exec('browserify lib/dark-horse.js -t babelify --standalone DarkHorse > .build/dark-horse.js')
exec('vulcanize --inline-scripts --inline-css --strip-comments dark-horse.html > dist/dark-horse.html')
exec('vulcanize --inline-scripts --inline-css --strip-comments index.html > dist/index.html')
