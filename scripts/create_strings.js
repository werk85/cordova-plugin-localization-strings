var android_script = require('./create_android_strings');
var ios_script = require('./create_ios_strings');
var q = require('q')
var util = require('cordova-lib/src/cordova/util');

module.exports = function(context) {
    var platforms = util.listPlatforms(context.opts.projectRoot);

    var promises = [];

    if (platforms.indexOf('ios') >= 0) {
        promises.push(ios_script(context));
    }

    if (platforms.indexOf('android') >= 0) {
        promises.push(android_script(context));
    }

    return q.all(promises);
};
