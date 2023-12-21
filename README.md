# Campaign Game

This is an ionic/angular app, made using the ionic tabs default.  

Can be displayed as a web app using the command 'ionic serve' in a terminal pointed to the campaign folder

Based on an idea from Jonas Linde, Copyright 2022 all rights reserved.

Code for the app pages is found in the src/app folder and is organized by which page it belonngs to. main gameplay is sorted by which tab it belongs to, and others by the name of the page. The votes store (a ts file) is where data about game state/score is held and populated. Text service (also ts file) also serves up some of that. each type of event also has its own file where the events are stored. most other text Is stored in the HTML files. 


Workflow for Pull Requests: clone repo, make a new branch, and check it out. Make your edits, then Commit and push changes to the branch. 

clone/download repo command: 'git clone https://github.com/jeremymlewis/campaign.git'

This can be done with 'git checkout -b "NAME_OF_YOUR_BRANCH"' to get a new branch. 'git add .' 'git commit -m "message"' 'git push' to get the changed posted to the repo