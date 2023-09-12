## `_extract_changes() -> None`

#### Description:
This method iterates over the patches in the `GitFileChecker.files_diff` list and extracts the changes made to the files. It categorizes the changes into three lists: `GitFileChecker.added`, `GitFileChecker.modified`, and `GitFileChecker.deleted`. This method belongs to the class `GitFileChecker`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value. It updates the `GitFileChecker.added`, `GitFileChecker.modified`, and `GitFileChecker.deleted` lists.

#### Exceptions:
This method does not raise any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
GitFileChecker._extract_changes()
print(GitFileChecker.added)
print(GitFileChecker.modified)
print(GitFileChecker.deleted)
```

#### How it Works:
1. Iterate over each `patch` in the `GitFileChecker.files_diff` list.
2. Check the status of the `patch` using `patch.delta.status`.
3. If the status is `GIT_DELTA_ADDED`, add the path of the new file to the `GitFileChecker.added` list.
4. If the status is `GIT_DELTA_MODIFIED`, add the path of the new file to the `GitFileChecker.modified` list.
5. If the status is `GIT_DELTA_DELETED`, add the path of the old file to the `GitFileChecker.deleted` list.

#### Dependencies:
- `GitFileChecker.files_diff`: A list of patches representing the differences between two commits.