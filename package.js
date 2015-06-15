Package.describe({
	name: 'pindakaas',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'A Dutch natural language parser written in JavaScript.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/simplyGits/pindakaas.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.2');

	api.addFiles('bundle.js');
	api.export('pindakaas');
});
