## `retrieve_file(file_path: Path) -> str`

#### Description:
This method retrieves the content of a file from a Git repository. It belongs to the class `GitRetrieaver` and uses the `GitManager` class from the `git_tools.git_manager` module.

#### Parameters:
- `file_path` (`Path`): The path of the file to retrieve.

#### Returns:
- `str`: The content of the retrieved file.

#### Dependencies:
- `GitManager`: This class is used to access the Git repository.

#### Usage Cases:

```python
# Retrieve the content of a file
file_content = retrieve_file(Path("path/to/file.py"))
print(file_content)
```

#### How it Works:
1. Get the Git object of the file using the `get_file_git_object` method from the `GitRetrieaver` class.
2. Extract the Git ID of the file.
3. Retrieve the Git blob object of the file using the Git ID.
4. Get the binary data of the file from the Git blob.
5. Decode the binary data using UTF-8 encoding to obtain the file content.
6. Return the file content.