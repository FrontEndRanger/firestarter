/**
*
* FireStarter
* @version: 0.1.0
* @description: Require everything in the tasks folder
*
**/

require('require-dir')('./tasks', {
    recurse: true
});
