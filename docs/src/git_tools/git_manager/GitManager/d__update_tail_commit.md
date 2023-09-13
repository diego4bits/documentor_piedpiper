## `_update_tail_commit(tail_commit_hash: str) -> None`

#### Description:
This method updates the tail commit of the GitManager object to the commit specified by the given commit hash. It is used to ensure that the tail commit is always the most recent commit in the project. This method belongs to the class GitManager.

#### Parameters:
- `tail_commit_hash` (`str`): The hash of the commit to set as the new tail commit.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- `Exception`: This exception is thrown when the specified tail commit is not a descendant of the current front commit.

#### Usage Cases:

```python
# Example usage case 1:
git_manager = GitManager()
git_manager._update_tail_commit('a3b4c5d6e7f8')
print(git_manager.tail_commit)  # Output: Commit object with hash 'a3b4c5d6e7f8'

# Example usage case 2:
git_manager._update_tail_commit('b9a8b7c6d5e4')
print(git_manager.tail_commit)  # Output: Commit object with hash 'b9a8b7c6d5e4'
```

#### How it Works:
The method first retrieves the commit object associated with the given commit hash from the project repository. It then checks if the new tail commit is a descendant of the current front commit. If it is, the tail commit and its associated tree are updated accordingly. If not, an exception is raised indicating that the tail commit cannot be set next to the tail commit.

#### Dependencies:
- `project_repo`: An instance of the pygit2.Repository class representing the Git repository.
- `front_commit`: An instance of the pygit2.Commit class representing the current front commit.
- `tail_commit`: An instance of the pygit2.Commit class representing the current tail commit.
- `tail_commit_tree`: An instance of the pygit2.Tree class representing the tree associated with the current tail commit.