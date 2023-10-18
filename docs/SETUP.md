# Setup

To get started using Microgen, fork the [repo](https://github.com/pathfindertools/microgen). To deploy your site on the internet, you must connect your repo to the free Tina CMS service and your choice of static webhost.

If you plan to add custom blocks to your site, you may want to consider cloning the repo instead. See the [Development](DEVELOPMENT.md) doc for more details.

## Connect to Tina

- [Login](https://app.tina.io/signin) to Tina Cloud or [create a new account](https://app.tina.io/register).
- Go to [projects](https://app.tina.io/projects) and create a new custom project.
- Follow the steps to select your repo (make sure to add <http://localhost:3000> as the site URL).
- Save the Client ID and Token of your newly created project for later use.

## Deploy to a static host

Microgen can be deployed to the static host of your choice. If you want your site to live on Web3, we recommend using [Fleek](https://fleek.co/).

### Fleek

- [Login](https://app.fleek.co/#/auth/sign-in) to Fleek or [create a new account](https://app.fleek.co/#/auth/sign-up).
- Choose **Add New Site** to create a new site and follow the steps to select your forked repo (select _"IPFS"_ as _"Hosting Service"_).
- Go to **Hosting** > **Settings** > **Advanced Build Settings** and add the 2 environment variables from Tina as shown in the Environment Variables section below.
- Go to **Configuration** on Tina Cloud and add the site URL created from Fleek (https://**_<replace-with-your_site-name>_**.on.fleek.co).
- Deploy your site by selecting **Deploy Site**.

### Environment Variables

```
NEXT_PUBLIC_TINA_CLIENT_ID=[YOUR CLIENT ID FROM TINA]
TINA_TOKEN=[YOUR READ ONLY TOKEN FROM TINA]
```

## Making Edits

Once your site has successfully deployed, you can make edits by adding `/admin` to the URL of your site. For example, `https://www.yoursite.com/admin`. Only sites added to the Site URLs section in Tina are allowed to make edits from the admin URL.

## Sync Media

If images are not showing up on your site, you may need to enable and sync media from Tina. Choose media from the sidebar on the Tina site and click "Enable Media", then click the "Sync Media" button.