# geospacecity

This is a little html making tool. It is clunky and weird and serves little to no practical purpose. It was fun to make and fun to play with, or at least I think so.

## Installation for Programmers

I had bigger plans for features that would include a database and so I used Python Flask. This is still a requirement, even though nothing is persisted and all the real action happens in javascript in the browser. I utilized Flask templating for a lot of stuff that would need some careful reworking to be fully client side, which isn't something I am ready to take on yet. That said, it can be run pretty easily from a terminal on your computer.

> git clone https://github.com/chrisduesing/geospacecity.git

> cd geospacecity

If you have Python, but not Flask installed then

> pip install flask

Once you have Python + Flask

> flask run

## Installation for My Classmates

If you don't have Python/Flask at all, and you are a bit bewildered, chances are you are a student in my Internet Artware class. I will try to make instructions direct and clear. Since I believe we all have Macs, the following makes that assumption.

First, you will want to install a program called Conda. It isn't strictly speaking necessary, but it will save you a lot of trouble later. It basically allows you to install all of the stuff you need for each Python app separately, so if two apps need different code libraries they don't clash with one another.

If you have a M1/M2 mac download:

> https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-arm64.sh

Otherwise if you have an older mac download:

> https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-x86_64.sh

In Finder, *move this file from Downloads to your home directory*. Your home directory will be named with your username and a little house icon, it should be on the left pane under Favorites. (If not down under Locations click on the computer name then on the right panel choose MacintoshHD > your username.) In a moment you will run this file here,but for now just move the file here, next we will go in to the terminal.

Everything from here on out will take place in the terminal aka Terminal.app. just search for it in Spotlight or Launchpad and run it.

In the terminal you should by default be in your home directory. If not, or you ever need to get back, there is a shortcut command, just type:

> cd ~

From here you will be able to see the file you downloaded and moved here by using the ls command

> ls

You can then run it with the sh command

> sh Miniforge3-MacOSX-arm64.sh

or 

> sh Miniforge3-MacOSX-x86_64.sh

depending on which you downloaded.

Now you want to grab the project itself. When you download the project it will create its own directory. You can do that right here in your home directory if you want, I personally have a projects directory I like to put my code in.

> mkdir projects

> cd projects

Now you want to get the code. You should have git, as we installed it in class if I am not mistaken. So type the following

> git clone https://github.com/chrisduesing/geospacecity.git

This will create a subdirectory called geospacecity, go in to that directory

> cd geospacecity

Now, back to conda, we need to install Flask, a Python web server. Before we do that we want to set up our conda environment, so type

> conda create --name geospacecity python=3.10

This will spew a whole bunch of stuff on your terminal, just hit enter when it asks if it is ok to install things. Once it is done you can activate the conda environment with

> conda activate geospacecity

Any time you close the terminal and come back here to run the app you will need to type that command again!

Now you should be able to use conda to install Flask

> conda install flask

Assuming everything has gone properly you should now be able to run the Flask server and finally see the web app in action

> flask run

That should print a couple lines about the startup of the Flask server and it should print the url you need to see the app, you can copy it in to your browser

> http://127.0.0.1:5000

If you have any problems just email me: chris.duesing at gmail

