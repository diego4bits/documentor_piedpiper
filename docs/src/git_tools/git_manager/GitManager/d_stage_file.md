## `stage_file(file_path: Path) -> None`

#### Description:
This method performs the staging of a file in Git and is used to prepare the file to be committed. This method belongs to the class `GitManager`.

#### Parameters:
- `file_path` (`Path`): The path of the file to be staged.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
- None

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
GitManager.stage_file(file_path)
```

#### How it Works:
This method calls the private method `_stage_file` from the `GitManager` instance to perform the staging of the specified file in Git.

#### Dependencies:
- `GitManager`: This method belongs to the `GitManager` class.
- `Path`: The parameter `file_path` should be of type `Path`.