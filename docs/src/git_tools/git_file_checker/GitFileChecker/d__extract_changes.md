## `_extract_changes() -> None`

#### Description:
This method performs the extraction of changes from the GitFileChecker.files_diff attribute. It categorizes the changes into added, modified, and deleted files. This method belongs to the class GitFileChecker.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
checker = GitFileChecker()
checker._extract_changes()
```

#### How it Works:

The `_extract_changes` method iterates over each patch in the `GitFileChecker.files_diff` attribute. For each patch, it checks the status of the delta (change) and categorizes the file accordingly. If the status is `GIT_DELTA_ADDED`, the path of the new file is appended to the `GitFileChecker.added` list. If the status is `GIT_DELTA_MODIFIED`, the path of the new file is appended to the `GitFileChecker.modified` list. If the status is `GIT_DELTA_DELETED`, the path of the old file is appended to the `GitFileChecker.deleted` list.

#### Dependencies:
- `GitFileChecker.files_diff`: A list of patches representing the changes in the Git repository.