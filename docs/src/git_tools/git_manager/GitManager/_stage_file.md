## `_stage_file(file_path: Path) -> None`

#### Description:
This method stages a file for commit in a Git repository. It belongs to the class `GitManager` and is used for adding a specific file to the staging area.

#### Parameters:
- `file_path` (`Path`): The path to the file that needs to be staged.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
- None: This method does not throw any exceptions.

#### Usage Cases:

```python
# Stage a file for commit
git_manager._stage_file(file_path)
```

#### How it Works:
This method takes the provided `file_path` and adds it to the staging area in the Git repository. It uses the Pygit2 library to access the repository, add the file to the index, and write the changes to the index.

#### Dependencies:
- `pygit2`: This method depends on the Pygit2 library to work with the Git repository.