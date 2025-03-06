# TGxAUCA-Git-learning-session
## Topics to Cover:
1️⃣ Branching & workflow – Creating feature branches, PRs and ensuring no direct push to dev or main.

2️⃣ Merge conflict resolution – Understanding how conflicts arise and how to resolve them properly.

3️⃣ Pull Requests & code reviews – The importance of PRs, reviewing code, and making improvements.

4️⃣ Rebasing vs. merging – When to use rebase and when to merge to keep a clean Git history.

5️⃣ Hotfix handling – Creating hotfix branches to fix urgent issues without disrupting the main workflow.

6️⃣ Managing .gitignore & Large Files – Preventing unnecessary files from being committed and handling mistakes.

## 1. Branching & workflow
### 📌 Scenario: Each trainee creates a feature branch and works on their assigned task. They must never push directly to dev or main but create PRs.

Task Assignments:

Trainee 1: Creates and publish the three branches i.e. main, staging and dev. **dev as the default file.** 

Trainee 2: Create `feature/add-task` branch, add a function to add a task.

Trainee 3: Create `feature/delete-task` branch, add a function to delete a task.

Trainee 4: Create `feature/complete-task` branch, allow marking tasks as completed.


## 2. Merge Conflict Resolution
### 📌 Scenario: Two trainees modify the same section in script.js. When merging, Git will detect a conflict.

Conflict Simulation:

Trainee 5 adds an alert when adding a task.

Trainee 6 adds a console log in the same function.

When both try to merge into dev, a conflict appears.


## 3. Pull Requests & Code Reviews
### 📌 Scenario: One trainee makes a PR but includes a bug (e.g., missing trim()). Another trainee reviews and requests a fix.


## 4. Rebasing vs. Merging – This depends on the company's workflow or methodology:

Some teams rebase to keep a clean history with no unnecessary commits.

Others merge to preserve every commit, making debugging easier.


### 📌 Scenario:
We will have two feature branches with changes.

One branch will rebase onto dev.

The other branch will merge into dev.

We'll compare the commit history and discuss the advantages of each approach.


## 5. Hotfix Handling – Hotfix branches are used for urgent bug fixes and follow the hotfix/[name-of-branch] naming convention.

Hotfix branches are usually merged into both main and dev to ensure the fix is included in future development.

### 📌 Scenario:

We will simulate a critical bug on main.

A trainee will create a hotfix/[bug-name] branch, fix the issue, and merge it into main.

Then, we’ll merge the same hotfix into dev to keep all branches aligned.


## 6. Managing .gitignore & Large Files – Preventing unnecessary files from being committed and handling mistakes.
