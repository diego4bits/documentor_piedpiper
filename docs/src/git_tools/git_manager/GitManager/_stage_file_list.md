## `_stage_file_list(files_paths: List[Path]) -> None`

#### Description:
This method performs staging of a list of files. It belongs to the class GitManager.

#### Parameters:
- `files_paths` (`List[Path]`): A list of file paths to be staged.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
- This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
files = [Path("file1.txt"), Path("file2.txt")]
git_manager._stage_file_list(files)

# Another use case (if applicable)
files = [Path("file3.txt"), Path("file4.txt")]
git_manager._stage_file_list(files)
```

#### How it Works:
The `_stage_file_list` method takes a list of file paths as input. It loops through each file path in the list and calls the `_stage_file` method to stage the file.

#### Dependencies:
- This method does not have any dependencies.