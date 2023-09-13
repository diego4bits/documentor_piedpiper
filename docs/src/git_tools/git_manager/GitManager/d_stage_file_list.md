## `stage_file_list(files_paths: List[Path])`

#### Description:
This method performs the staging of a list of files in a Git repository. It is used for adding files to the staging area before committing them. This method belongs to the class `GitManager`.

#### Parameters:
- `files_paths` (`List[Path]`): A list of `Path` objects representing the paths of the files to be staged.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
files_to_stage = [Path("file1.txt"), Path("file2.txt")]
GitManager.stage_file_list(files_to_stage)

# Another use case (if applicable)
files_to_stage = [Path("dir/file3.txt"), Path("dir/file4.txt")]
GitManager.stage_file_list(files_to_stage)
```

#### How it Works:
The `stage_file_list` method delegates the actual staging of the files to the `_stage_file_list` method of the `GitManager.instance` object.

#### Dependencies:
- `GitManager`: The class to which the `stage_file_list` method belongs.
- `List` and `Path` from the `typing` module: The types used for the `files_paths` parameter.