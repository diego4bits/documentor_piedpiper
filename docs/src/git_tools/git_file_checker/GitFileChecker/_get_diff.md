## `_get_diff(tail_commit: Commit, head_commit: Commit) -> Diff`

#### Description:
This method retrieves the diff between two commits in a git repository. It belongs to the class `GitFileChecker` and is used to compare the changes made in a file between two different commits.

#### Parameters:
- `tail_commit` (`Commit`): The older commit to compare.
- `head_commit` (`Commit`): The newer commit to compare.

#### Returns:
- `Diff`: The difference between the two commits.

#### Dependencies:
- `GitManager`: This class is used to interact with the git repository.
- `Commit` (from `pygit2`): Represents a commit in the git repository.
- `Diff` (from `pygit2`): Represents the difference between two commits.
- `GIT_DELTA_ADDED` (from `pygit2`): Represents a file that has been added.
- `GIT_DELTA_MODIFIED` (from `pygit2`): Represents a file that has been modified.
- `GIT_DELTA_DELETED` (from `pygit2`): Represents a file that has been deleted.
- `Path` (from `pathlib`): Represents a path to a file or directory.
- `List` (from `typing`): Represents a list of objects.

#### How it Works:
The method uses the `GitManager.project_repo()` to retrieve the git repository object. It then calls the `diff()` method on the repository object, passing in the `tail_commit` and `head_commit` as parameters. This returns the difference between the two commits as a `Diff` object, which is then returned by the method.