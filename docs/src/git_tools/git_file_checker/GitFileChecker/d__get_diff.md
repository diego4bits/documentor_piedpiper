## `_get_diff(tail_commit: Commit, head_commit: Commit) -> Diff`

#### Description:
This method retrieves the difference between two commits and returns a Diff object. It belongs to the class GitFileChecker.

#### Parameters:
- `tail_commit` (`Commit`): The older commit to compare.
- `head_commit` (`Commit`): The newer commit to compare.

#### Returns:
- `Diff`: The difference between the two commits.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Retrieving the difference between two commits
diff = _get_diff(tail_commit, head_commit)
print(diff)
```

#### How it Works:
The `_get_diff` method uses the `diff` function from the `GitManager.project_repo()` object to obtain the difference between the `tail_commit` and `head_commit` commits. It returns a `Diff` object that represents the difference between the two commits.

#### Dependencies:
- `GitManager`: Provides access to the project repository and its diff function.
- `Commit`: Represents a commit in the Git repository.
- `Diff`: Represents the difference between two commits.