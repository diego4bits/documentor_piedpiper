## `_update_front_commit(front_commit_hash: str) -> None`

#### Description:
This method updates the front commit of the GitManager class with the commit specified by the given front_commit_hash. It checks if the new front commit is a descendant of the tail commit, and if so, updates the front commit and its associated tree. If the new front commit is not a descendant of the tail commit, an exception is raised. This method belongs to the class GitManager.

#### Parameters:
- `front_commit_hash` (`str`): The hash of the commit that will become the new front commit.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
- `Exception`: This exception is raised if the front commit cannot be previous to the tail commit.

#### Usage Cases:

```python
# Update the front commit with the commit specified by the hash
git_manager_instance._update_front_commit(front_commit_hash)
```

#### How it Works:
First, the method retrieves the commit with the specified front_commit_hash from the project repository. It then checks if this commit is a descendant of the tail commit using the `descendant_of()` method. If it is, the front commit and its associated tree are updated. If it is not, an exception is raised indicating that the front commit cannot be previous to the tail commit.

#### Dependencies:
- `self.project_repo`: The Git repository object that contains the commits and trees.
- `self.tail_commit`: The tail commit of the GitManager instance.