## `_stage_file(file_path: Path) -> None`

#### Description:
This method stages a file in the Git repository. It adds the specified file to the index and writes the changes to the repository. This method belongs to the class `GitManager`.

#### Parameters:
- `file_path` (`Path`): The path of the file to be staged.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Stage a file in the Git repository
git_manager._stage_file(file_path)
```

#### How it Works:
The method first retrieves the Git repository object from the `project_repo` attribute of the `GitManager` instance. It then adds the specified file to the index using the `add()` method of the repository's index. Finally, it writes the changes to the repository by calling the `write()` method of the index.

#### Dependencies:
- `Repository`: Represents a Git repository.
- `Path`: Represents a file or directory path.