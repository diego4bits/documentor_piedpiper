## `_update_tail_commit(tail_commit_hash: str) -> None`

#### Description:
This method updates the tail commit of the GitManager instance based on the provided tail commit hash. It checks if the new tail commit is a descendant of the current front commit and updates the tail commit and tail commit tree accordingly. If the new tail commit is not a descendant of the current front commit, an exception is raised. This method belongs to the class GitManager.

#### Parameters:
- `tail_commit_hash` (`str`): The hash of the new tail commit.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- `Exception`: This exception is thrown when the new tail commit is not a descendant of the current front commit.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
git_manager._update_tail_commit('abcdef1234567890') # Update the tail commit
```

#### How it Works:
- Get the new tail commit object based on the provided tail commit hash.
- Check if the new tail commit is a descendant of the current front commit.
- If it is a descendant, update the tail commit and tail commit tree of the GitManager instance.
- If it is not a descendant, raise an exception indicating that the tail commit can't be next to the tail commit.

#### Dependencies:
- `GitManager.project_repo`: The Git repository object.
- `GitManager.front_commit`: The current front commit object.