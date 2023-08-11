/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const context = github.context;

  // If the event that triggered your workflow run was a pull request,
  // you can get the username of the person who opened it with:
  const usernamePR = context.payload.pull_request.user.login;

  // If the event that triggered your workflow run was a push event,
  // you can get the username of the person who did the push with:
  const usernamePush = context.payload.pusher.name;

  console.log(usernamePR);  // Show username for PR event
  console.log(usernamePush); // Show username for push event
} catch (error) {
  core.setFailed(error.message);
}
