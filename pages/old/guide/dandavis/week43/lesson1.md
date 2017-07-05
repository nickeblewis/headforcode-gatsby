---
title: Lesson 1 - Cloning a project
layout: Doc
---

# Lesson 1 - Cloning a project

## What is cloning?

Once a project has been added to Github and it is available for you to create a copy of it, you can, as that is all part of it's purpose. You can either **clone** or **fork** the project and we shall start with the former.

Cloning takes a copy of the project from the server as a compressed file, unpacks it and adds the contents to a new folder based on the name of the repository file.

## How to go about it?

Launch Git Bash via the Windows Start Menu and then change directory to the "Proj" folder that you created in last weeks lessons.

```Bash
$ cd /c/proj
```

Next we want to take a copy of the HeadForCode project from Github and doing this is really quick and easy. Go back to your **Bash Terminal** and I shall now refer to it simply as **Terminal** for now on.
We shall use the **git clone** command to achieve this, as follows:

```Bash
$ git clone https://github.com/nickeblewis/headforcode.git
```

Sit back and watch as Git downloads the .git file, which is effectively a Zip file, creates a new folder called **headforcode** and unpacks it's contents into it for you. You will see a whole 
load of status messages come up on the Terminal screen and after a short period of time, you will once again see the Bash prompt awaiting your next command.

The next command is to change directories, as we want to jump into the new **headforcode** folder (directory) and see what we now have.

```Bash
$ cd headforcode
```

You will recall from your CodeAcademy course and our previous lessons that to show the contents of a folder, you need to:

```Bash
$ ls
```

You should see a number of files present and one of them is called **Package.json**, we don't need to open it yet or look at it much for the moment, I just want to make you aware of it for now. It's purpose 
is important because it is required for the next command we are about to issue to work.

There are two things to learn about later on in another lesson and that is what is package.json and secondly what is JSON? What is a .json file? We shall come back to this....

For now, issue the following command via your Terminal:

```Bash
$ npm install
```

This can take a few minutes to complete and you will see a whole load of messages come up before you. NPM (the Node package manager) is installing a number of files for us, all of wich are listed 
in our package.json file. It saves us all a lot of time sinc you don't need to worry about what it is installing at the beginning because you just want to get the site up and running for the moment. 
The details can wait until later.

Once the command prompt (also called bash prompt) appears once again, that is it, the site is installed and if you type:

```Bash
$ ls
```

You will notice the addition of a new folder called "node_modules" and it is in here where Node has installed all of the NPM packages required by our website to run and that is precisely what we can 
do next, launch the site:

```Bash
$ npm Start
```

This launches the website in a new browser window and we can now start to play with the site. 

You can navigate around the site in the same way you can when accessing it via [headforcode.netlify.com](https://headforcode.netlify.com)

To stop the site from running, go back to the Terminal and press CTRL+C at the same time, this kills the process and you can start it up again by running **npm start** once again etc etc.

NOTE: At the time of writing this, comments are broken, so we shall fix that