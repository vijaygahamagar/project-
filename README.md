# Portfolio site

This is built using html, css and javscript.

Git Commands:

> Step 1, 2, and 3 is needed only at the beginning of the project setup. Step 4, 5 and 6 are frequently used at the time of development.

## Step 1: Initialize the project and change branch name

```sh
git init
```

```sh
git branch -M main
```

## Step 2: Setup the configuration

### Setup your username

```sh
git config user.name "<your github username>"
```

### Setup your email

```sh
git config user.email "<your github email>"
```

## Step 3: Add the remote

> The origin url can be obtained from github.

```sh
git remote add origin <origin url>
```

## Step 4: Add all the files to staging

```sh
git add .
```

## Step 5: Commit the staged files

```sh
git commit -m "<commit message>"
```

> Note: The commit message should be according to the task that you have done.

For e.g. if you have created a **contact us form**, the message can be "create contact us form"

## Step 6: Push the changes to github

```sh
git push -u origin <branch name>
```

## Step 7: Check branch

```sh
git branch
```

## Step 8: Change branch

> We should create new branch when we start working on new feature.

```sh
git checkout -b <branch name>
```

# Submit your project

```bash
curl -X POST -H "Content-Type: application/json" -d '{"githubLink":"https://github.com/baijanathTharu", "name": "Baijanath Tharu", "key": "test"}' https://nhc-submissions.onrender.com/submit/h1
```
