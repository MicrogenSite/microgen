# Upgrade Microgen

1. Check to see if you have an upstream remote set using ```git remote -v```

2. If you don't see the Microgen upstream add it

    ```bash
    git remote add upstream git@github.com:MicrogenSite/microgen.git
    ```

3. Fetch the latest changes

    ```bash
    git fetch upstream
    ```

4. Check out your local main branch

    ```bash
    git checkout main
    ```

5. Merge the upstream branch into your local, be careful to maintain your content and customizations when resolving merge conflicts. Run `yarn install && yarn dev` after resolving conflicts to generate a new .tina-lock.json file based on the result of your merge.

    ```bash
    git merge upstream/main
    ```
