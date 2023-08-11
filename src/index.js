import core from '@actions/core';
import github from '@actions/github';

try {
  const context = github.context;

  // If the event that triggered your workflow run was a pull request,
  // you can get the username of the person who opened it with:
  // const usernamePR = context.payload.pull_request.user.login;

  // If the event that triggered your workflow run was a push event,
  // you can get the username of the person who did the push with:
  const usernamePush = context.payload.pusher.name;

  console.log(usernamePush); // Show username for push event
} catch (error) {
  core.setFailed(error.message);
}