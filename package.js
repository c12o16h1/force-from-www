Package.describe({
  name: 'c12o16h1:force-from-www',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'force-from-www)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/c12o16h1/force-from-www',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('webapp', 'server');
  api.use('ecmascript');
  api.mainModule('index.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.mainModule('index-tests.js');
});
