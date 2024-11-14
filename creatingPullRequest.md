# **Creating a Pull Request to JS Flashcards**

### Step 1: Fork the Repository

- [Navigate to the JS Flashcard Repo on GitHub.](https://github.com/cmdarcy/js-flashcards)
- Click the "Fork" button in the top-right corner of the page.
- Choose the account you want to fork the repository to (e.g., your personal GitHub account).

### Step 2: Clone the Forked Repository

- Go to your forked repository on GitHub.
- Click the "Code" button and copy the clone URL.
- Open your terminal/command prompt/IDE and navigate to the directory where you want to clone the repository.
- Run `git clone <clone-url>` to clone the repository.

### Step 3: Create a New Branch

- Navigate to the cloned repository on your local machine.
- Create a new branch using `git branch <branch-name>`. Replace `<branch-name>` with a descriptive name for your branch (e.g., `feature/new-array-flashcards`).
- Switch to the new branch using `git checkout <branch-name>`.

### Step 4: Make Changes and Commit

- Make the necessary changes to the code.
- Run `git add .` to stage all changes.
- Commit your changes using `git commit -m "<commit-message>"`. Replace `<commit-message>` with a brief description of your changes.

### Step 5: Push Your Branch to Your Fork

- Run `git push -u origin <branch-name>` to push your branch to your forked repository on GitHub. The `-u` flag sets the upstream tracking information.

### Step 6: Create a Pull Request

- Go to the original JS Flashcard Repo on Github.
- Click the "New pull request" button or just [ click here](https://github.com/cmdarcy/js-flashcards/compare) to begin a new pull request.
- Select your forked repository as the "head" repository.
- Choose the branch you pushed as the "head" branch.
- Choose the original repository's main branch as the "base" branch.
- Fill in the pull request title and description. This should include a brief summary of your changes and any relevant details.
- Click "Create pull request" to submit your request.

### Step 7: Wait for Review and Discussion

- Wait for Chris to review your pull request.

### Step 8: Get Your Pull Request Merged

- Once your pull request has been approved, Chris will merge it into the main branch.
- Congratulations! Your changes are now part of the original repository.
- You should see your new flashcards/decks added on the JS Flashcard Website.
