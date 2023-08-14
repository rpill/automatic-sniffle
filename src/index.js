import core from '@actions/core';
import github from '@actions/github';

try {
  const context = github.context;
  const username = context.payload.pusher.name ? context.payload.pusher.name : context.payload.pull_request.user.login;

  console.log(username);
} catch (error) {
  core.setFailed(error.message);
}