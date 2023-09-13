## `_stage_file_list(files_paths: List[Path]) -> None`

#### Description:
This method stages a list of files for commit. It belongs to the class `GitManager`.

#### Parameters:
- `files_paths` (`List[Path]`): A list of `Path` objects representing the paths to the files that need to be staged.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
git_manager = GitManager()
files = [Path('file1.txt'), Path('file2.txt'), Path('file3.txt')]
git_manager._stage_file_list(files)
```

#### How it Works:

The `_stage_file_list` method iterates over the list of file paths provided as input. For each file path, it calls the `_stage_file` method to stage the file for commit.

#### Dependencies:
- This method does not have any dependencies.