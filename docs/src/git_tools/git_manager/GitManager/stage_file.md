## `stage_file(file_path: Path) -> None`

#### Description:
This method performs the action of staging a file in the Git repository. It is used for adding changes to the index before committing them. This method belongs to the class GitManager.

#### Parameters:
- `file_path` (`Path`): The path to the file that needs to be staged.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
GitManager.stage_file('/path/to/file')
```

#### How it Works:

The method `stage_file` takes in a file path as input. It then calls the private method `_stage_file` of the GitManager instance to stage the specified file.

#### Dependencies:
- `GitManager`: The class to which this method belongs.
- `Path`: The class representing a file or directory path.