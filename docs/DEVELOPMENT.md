# Local Development

Install the project's dependencies

```
yarn install
```

Run the project locally

```
yarn dev
```

## Local URLs

- <http://localhost:3000> : browse the website
- <http://localhost:3000/admin> : connect to Tina Cloud and go in edit mode
- <http://localhost:3000/exit-admin> : log out of Tina Cloud
- <http://localhost:4001/altair/> : GraphQL playground to test queries and browse the API documentation

## Clone vs. Fork

If you will be making code changes to Microgen that you don't plan to merge into the original project you may want to clone the repo instead so  your PRs never point back to it. If you have already forked the repo you can request that github detach the fork.

### Cloning

1. Clone the [MicroGen repo](https://github.com/pathfindertools/microgen) from GitHub.

2. Navigate to the cloned folder and remove the hidden git folder using the command ```ls -la``` to reveal the hidden files and ```rm -rf .git``` to remove the folder.

3. Initialize a fresh git repository with the command ```git init```.

4. Add your changes with ```git add .``` and then ```git commit -m 'initial commit’```.

### Detach Fork

1. Go to [support.github.com/request](support.github.com/request) (or go to [GitHub.com](GitHub.com) and click Contact GitHub in the footer).

2. Click Attach, detach or reroute forks.

3. In the Subject field, typ 'Unfork'. A blue banner should appear with 'Our virtual assistant can help'. Click the banner.

4. A chat should appear on screen with the Virtual Assistant. Paste the URL of the repository.
_Note: make sure to paste the URL to the forked repository, so not the original repository. It should look like github.com/username/forked-repo-name.

5. Specify what should be done with Child forks:
  If username/forked-repo-name has child forks, what should we do with these?
Commonly you'll want to bring the child forks along with you when detaching your fork from the upstream repository.

    - Bring the child forks with the repository
    - Leave the child forks behind

6. Select one of the options and send the form.

7. Within a few minutes to half an hour you should get a confirmation in your e-mail.

## Future Topics

- Add Custom Blocks
- Add Custom Fonts
- Add Custom Icons

## Getting Help

- Visit the [Tina Documentation](https://tina.io/docs/) to learn about Tina.
- [Join the Tina Discord](https://discord.gg/zumN63Ybpf) to share feedback.
- [Search or open an issue](https://github.com/tinacms/tinacms/issues) if something is not working.
