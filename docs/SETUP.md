
# Setup

#### 1. Clone the Repository
- Clone the [MicroGen repo](https://github.com/pathfindertools/microgen) from GitHub. 
- Navigate to the cloned folder and remove the hidden git folder using the command ```ls -la``` to reveal the hidden files and ```rm -rf .git```. 
- Initialize a fresh git repository with the command ```git init```.
- Add your changes with ```git add .``` and then ```git commit -m 'initial commit’```.

#### 2. Push Existing Repository to Github 
- Create a new repo on your GitHub and follow the steps to _“push an existing repository from the command line”_

#### 3. Setting up Tina Cloud to Manage the CMS
- [Login](https://app.tina.io/signin) to Tina Cloud or [create a new account](https://app.tina.io/register).
- Go to [projects](https://app.tina.io/projects) and create a new custom project. 
- Follow the steps to select your forked repo. (make sure to add http://localhost:3000 as the site URL).
    - Save the client ID of your newly created project for later use.

#### 4. Setting up a Fleek Site
- [Login](https://app.fleek.co/#/auth/sign-in?method=Git+Provider) to Fleek or [create a new account](https://app.fleek.co/#/auth/sign-up?method=Git+Provider).
- Choose **Add New Site** to make a new site and follow the steps to select your forked repo (select _"IPFS"_ as _"Hosting Service"_).
- Deploy your site by selecting **Deploy Site**.
    - _Note: The build may be unsuccessful_.

#### 5. Setting up Environment Variables 

Setting up local environment 
- Install dependencies in your cloned folder using ```npm install```.
- Locate the **_.env.example_** template file and rename the file to **_.env_**.
- In your __*_.env_*__ file, replace *** with the correct variables from Tina Cloud (find the *client_id* under __Overview__, the *token* under __Tokens__ > __Content (Readonly)__, and set the _branch_ to _main_).
- For deployment, use ```npm run dev``` and visit http://localhost:3000 (to edit locally, visit http://localhost:3000/admin).

Setting up Fleek environment 
- Go to **Hosting** > **Settings** > **Advanced Build Settings** and add the 3 environment variables (located in your **_.env_** file) to Fleek.

#### 6. Configure Tina Cloud and Fleek
- Go to **Configuration** on Tina Cloud and add the site URL created from Fleek (https://**_<replace-with-your_site-name>_**.on.fleek.co).
- Retrigger the deployment on Fleek by going to **Hosting** > **Deploys** and selecting **Trigger Deploy**.

#### 7. Edit Content Through the Website
- Log in to Tina Cloud through your created website, visit (https://**_<replace-with-your_site-name>_**.on.fleek.co/admin), and follow the steps.
    - _Note: Any saved changes will be automatically added by Tina_

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
