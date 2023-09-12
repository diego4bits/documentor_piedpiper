## `stage_file_list(files_paths: List[Path]) -> None`

#### Description:
This method performs the staging of a list of files in a Git repository. It is used for adding files to the staging area before committing them. This method belongs to the class `GitManager`.

#### Parameters:
- `files_paths` (`List[Path]`): A list of file paths to be staged.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
- None

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
file_paths = [Path('/path/to/file1.txt'), Path('/path/to/file2.txt')]
GitManager.stage_file_list(file_paths)
```

#### How it Works:
The method `stage_file_list` is a wrapper method that calls the private method `_stage_file_list` of the `GitManager` instance. The private method `_stage_file_list` is responsible for the actual staging of the files in the Git repository.

#### Dependencies:
- `GitManager`: The class to which this method belongs.
- `List` and `Path` from `typing`: The required types for the `files_paths` parameter.