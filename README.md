# [Disney World Planner](http://www.jamesandersoniii.us/DisneyWorld-Website/)
Welcome to the Disney World Vacation Planner! This website is designed to help you plan your perfect Disney World vacation. You can choose from one of the four Disney World Parks (Magic Kingdom, Epcot, Hollywood Studios, or Animal Kingdom) and purchase your tickets. You can also select your accommodation from a range of Disney World resorts. You can plan your itinerary by exploring different things to do and restaurants. Finally, you can purchase everything in a convenient and secure shopping cart.
<br>
    *** Support: If you encounter any issues while using this website, please contact us at support@disneyworldvacationplanner.com. We will do our best to assist you.

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
  
# Wireframes

   ### Landing Page
   <img width="758" alt="LandingPage" src="https://user-images.githubusercontent.com/66242273/217104994-61677ef3-f791-406f-a4a2-69bc011f18d3.png">
   
   ### Sign-up Page
   <img width="764" alt="Sign-up Page" src="https://user-images.githubusercontent.com/66242273/217104993-4a320808-d771-4326-bd2c-455738e4368c.png">
   
   
   ### Login Page
   <img width="682" alt="Login Page" src="https://user-images.githubusercontent.com/66242273/217104990-3412275c-43bb-4038-a55a-c5f9bd61d3f5.png">
   
   
   ### Parks & Tickets
   <img width="764" alt="Parks   Tickets" src="https://user-images.githubusercontent.com/66242273/217104987-6e8d9dd6-5efa-44bf-96fb-20ca3e9d3d8b.png">

   
   ### Places To Stay
   ![Theme Park-Places To Stay](https://user-images.githubusercontent.com/66242273/217111270-d0378613-a4b6-4415-a3ee-de509af5d47f.jpg)
   
   ### Things To Do
   <img width="763" alt="Things To Do" src="https://user-images.githubusercontent.com/66242273/217104986-733a9b08-0eff-4122-bb86-5414d5e1ebfb.png">
   
   
   ### Restaurants
   <img width="764" alt="Restaurants" src="https://user-images.githubusercontent.com/66242273/217104985-7a47630c-689f-4e12-99db-11de72b9f225.png">
   
   
   ### Cart (Populated)
   <img width="650" alt="Cart (Populated)" src="https://user-images.githubusercontent.com/66242273/217104983-31a0e569-92ee-4fdb-96e2-717ea99e1e65.png">
   
   
   ### Cart (Empty)
   <img width="764" alt="Cart (Empty)" src="https://user-images.githubusercontent.com/66242273/217104980-f0fb78fe-6543-43cc-bc87-7590176ae3be.png">

  
# Getting Started
- Open the website in your web browser.
- Choose your Disney World Park and purchase your tickets.
- Select your accommodation from a range of Disney World resorts.
- Plan your itinerary by exploring different things to do and restaurants.
- Purchase everything in the shopping cart.


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
