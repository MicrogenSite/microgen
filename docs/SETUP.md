
# Setup

#### 1. Clone the Repo
Clone the [MicroGen repo](https://github.com/pathfindertools/microgen) from GitHub. After cloning you will want to remove the git folder and run ```git init``` to start a fresh git repository. 

#### 2. Setup Tina Cloud to manage the CMS
- [Login](https://app.tina.io/signin) to Tina Cloud or [create a new account](https://app.tina.io/register).
- Go to [projects](https://app.tina.io/projects) and create a new Custom Project.
- Follow the steps to select your forked repo. (add http://localhost:3000 as the site URL)
- Click on your new project and save the client ID for later use.

#### 3. Set up a Fleek site
When you're ready you can setup a site on Fleek running off your repo. You will need to setup environment variables for Tina.

## Upgrading MicroGen

You can upgrade your project to the latest version of MicroGen by checking out the MicroGen [repo](https://github.com/filecoin-project/microgen-tina) and then merging it into your project. Be careful not to overwrite your projects ```/content/index.md``` file.
```
cd path/to/your-project
git remote add microgen-tina /path/to/microgen-tina
git fetch microgen-tina --tags
git merge --allow-unrelated-histories microgen-tina/main
git remote remove microgen-tina
```

## Tips and Tricks

- If you edit environment variables remember you must redeploy your project on Vercel for the new variables to take effect.
