## `_update_front_commit(front_commit_hash: str) -> None`

#### Description:
This method updates the front commit of the GitManager object based on the given front commit hash. It checks if the new front commit is a descendant of the tail commit, and if so, updates the front commit and its associated tree. If the new front commit is not a descendant of the tail commit, it raises an exception. This method belongs to the class GitManager.

#### Parameters:
- `front_commit_hash` (`str`): The hash of the new front commit that will be updated.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
- `Exception`: Raised when the new front commit is not a descendant of the tail commit.

#### Usage Cases:

```python
# Updating the front commit
git_manager._update_front_commit("abcd1234")

# Another usage case (if applicable)
git_manager._update_front_commit("efgh5678")
```

#### How it Works:
The method takes a front commit hash as input. It retrieves the commit object corresponding to the given hash from the project repository. It then checks if the new front commit is a descendant of the tail commit by using the `descendant_of` method of the project repository, passing the ids of the tail commit and the new front commit as arguments. If the new front commit is a descendant, it updates the front commit and its associated tree. If the new front commit is not a descendant, it raises an exception indicating that the front commit can't be previous to the tail commit.

#### Dependencies:
- `self.project_repo`: An instance variable of the GitManager class representing the project repository. It is used to retrieve the commit object corresponding to the front commit hash.
- `self.tail_commit`: An instance variable of the GitManager class representing the tail commit. It is used to check if the new front commit is a descendant of the tail commit.