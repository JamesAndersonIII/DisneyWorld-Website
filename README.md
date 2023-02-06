# Disney World Planner
Welcome to the Disney World Vacation Planner! This website is designed to help you plan your perfect Disney World vacation. You can choose from one of the four Disney World Parks (Magic Kingdom, Epcot, Hollywood Studios, or Animal Kingdom) and purchase your tickets. You can also select your accommodation from a range of Disney World resorts. You can plan your itinerary by exploring different things to do and restaurants. Finally, you can purchase everything in a convenient and secure shopping cart.

# Features
- Choose from one of the four Disney World Parks and purchase tickets.
- Select your accommodation from a range of Disney World resorts.
- Plan your itinerary by exploring different things to do and restaurants.
- Purchase everything in a convenient and secure shopping cart.
- Requirements:
  - To use this website, you will need a modern web browser and an internet connection.

# Minimum Viable Product 
### MVP - User Stories
#### GENERAL USER
  - As a user I want to view whats available at Disney World Orlando
  - As a user I want to see suggested hotels
  - As a user I want to see suggested Things to Do
  - As a user I want to see suggested places to eat
  - As a user I want to see the weather for the Orlando area
  
  #### BASIC USER
  - As a user I want to sign-up for and login/out of my account
  - As a user I want to add tickets to my cart
  - As a user I want to add hotels to my cart
  - As a user I want to make sure the items in my cart are saved
  
# Getting Started
- Open the website in your web browser.
- Choose your Disney World Park and purchase your tickets.
- Select your accommodation from a range of Disney World resorts.
- Plan your itinerary by exploring different things to do and restaurants.
- Purchase everything in the shopping cart.

# Support
If you encounter any issues while using this website, please contact us at support@disneyworldvacationplanner.com. We will do our best to assist you.

# Team Git and GitHub Workflow
##### On Local Machine

- `git branch` lists all local branches

- `git remote -v` lists all remote branches (if want to see what branches are on remote)

- `git checkout -b <new branchName>` OR `git switch -c <new branchName>`
  - Creates a new local branch off of main and checks out that branch

- `git switch main` OR `git checkout main` moves you to main branch
  - Used when need to delete previous branch after pulling to main branch on local machine 


- `git branch -D <new branchName>` deletes the temporary branch
  - Ensure checkout to main branch and pull before deleting temporary branch   

- Implent a feature based on issue
  - Add new code once checked out on new temporary branch
- `git add .` adds all current changes and prepare for staging
- `git commit -m "message: what this commit does"` commits with message explaining what was done
- `git push origin <new branchName>` pushes from local branch to remote repo for pull requests
 
##### On GH
- Create a Project
- Create issues and assign
- Pull requests should be approved / reviewed by team member
