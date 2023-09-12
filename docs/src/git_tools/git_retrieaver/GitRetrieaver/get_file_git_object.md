## `get_file_git_object(file_path: Path) -> Blob`

#### Description:
This method retrieves a git object for a given file path. It belongs to the class `GitRetriaver`.

#### Parameters:
- `file_path` (`Path`): The path of the file for which the git object needs to be retrieved.

#### Returns:
- `Blob`: The git object (Blob) corresponding to the given file path.

#### Exceptions:
- `Exception`: This exception is thrown when no object is found in the git tree for the given file path.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = get_file_git_object(file_path)
print(result_case1)

# Another use case (if applicable)
result_case2 = get_file_git_object(file_path)
print(result_case2)
```

#### How it Works:
- The method starts by splitting the given file path using "\\" as a delimiter and storing it in the `path_way` variable.
- It then retrieves the current git commit tree using the `selected_commit_tree()` method from the `GitManager` class.
- The method iterates over each path in `path_way` and checks if it exists in the current object.
- If the path exists, it updates the current object to the corresponding sub-object.
- If the path does not exist, it throws an exception indicating that no object is found in the git tree for the given file path.
- Finally, it returns the current object, which represents the git object (Blob) for the given file path.

#### Dependencies:
- `GitManager`: This class is used to retrieve the current git commit tree.
- `Path`: This class is used to represent the file path.