
# Setup

#### 1. Fork the Repo
Fork the [MicroGen repo](https://github.com/filecoin-project/microgen-tina) from GitHub.

#### 2. Setup Tina Cloud to manage the CMS
- [Login](https://app.tina.io/signin) to Tina Cloud or [create a new account](https://app.tina.io/register).
- Go to [projects](https://app.tina.io/projects) and create a new Custom Project.
- Follow the steps to select your forked repo. (add http://localhost:3000 as the site URL)
- Click on your new project and save the client ID for later use.
 
#### 3. Setup Cloudinary to host images
- [Login](https://cloudinary.com/users/login) to Cloudinary or [create a new account](https://cloudinary.com/users/register/free)
- Go to your Cloudinary Dashboard and save these values for later use.
```
    Cloud Name: xxxxx  
    API Key: xxxxx  
    API Secret: xxxxx
```

#### 4. Setup a Vercel Account as your staging site
- [Login](https://vercel.com/login) to Vercel or [create a new account](https://vercel.com/signup).
- Create a new project by importing your GitHub repo, use the Next.js preset and don't adjust build settings.
- Add environment variables using the values you saved from Cloudinary and Tina Cloud.
```
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=xxxxx
    NEXT_PUBLIC_CLOUDINARY_API_KEY=xxxxx
    CLOUDINARY_API_SECRET=xxxxx
    NEXT_PUBLIC_TINA_CLIENT_ID=xxxxx
```
- Press the Deploy button. Once the build is complete visit the Vercel domain and confirm the site built.

#### 5. Add the Vercel URL to Tina Cloud
Under the Tina Cloud configuration for your project add the Vercel URL to "Site URLS".

```
http://localhost:3000,https://your-project.vercel.app
``` 
 To test that Tina is allowing edits go back to your Vercel site and add /admin to the end of your URL.

```
https://your-project.vercel.app/admin
```
 
You will be asked to login to Tina Cloud. After logging in click the pencil in the lower left of your site to expand the sidebar. Make some edits and confirm you can save them and they make it to your repo.

#### Set up a Fleek production site
When you're ready you can setup a production site on Fleek running off the "production" branch of your repo. You will not be making Tina edits from here so this is a standard Fleek site setup.
- [Login](https://app.fleek.co/#/auth/sign-in) to Fleek or [create a new account](https://app.fleek.co/#/auth/sign-up).
- Add a new site and follow the steps, connect the production branch of your repo.
- Add the environment variable ```SERVER_ENV="prod"``` to hide draft posts.

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
