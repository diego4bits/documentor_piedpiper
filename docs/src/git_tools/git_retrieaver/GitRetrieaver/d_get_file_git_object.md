## `get_file_git_object(file_path: Path) -> Blob`

#### Description:
This method retrieves the Git object for a specific file path. It belongs to the class `GitRetriever` and is used to get the Git Blob object corresponding to the file.

#### Parameters:
- `file_path` (`Path`): The path of the file for which the Git object needs to be retrieved.

#### Returns:
- `Blob`: The Git Blob object corresponding to the file.

#### Exceptions:
- `Exception`: This exception is thrown when no object is found in the Git tree for the given file path.

#### Usage Cases:

```python
# Retrieve the Git object for a file
result_case1 = get_file_git_object(Path("path/to/file.txt"))
print(result_case1)

# Another use case (if applicable)
result_case2 = get_file_git_object(Path("path/to/another_file.py"))
print(result_case2)
```

#### How it Works:
The method first splits the file path into individual components. It then traverses the Git tree starting from the selected commit, following the path components. If a path component is found in the current object, the method updates the current object to that path. If a path component is not found, an exception is raised. Finally, the method returns the current object, which is the Git Blob object for the file.

#### Dependencies:
- `git_manager.GitManager`: This class provides the `selected_commit_tree` method, which is used to get the current Git tree.
- `pathlib.Path`: This module is used to handle the file path.
- `pygit2.Blob`: This class represents a Git Blob object.