## `update_changed_files() -> None`

#### Description:
This method performs the update of the changed files in the repository. It belongs to the class `GitFileChecker` and is used to track the changes made to the files in the Git repository.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
update_changed_files()
```

#### How it Works:
- The method first obtains the tail commit and front commit using the `GitManager.tail_commit()` and `GitManager.front_commit()` methods, respectively.
- Then, it assigns the difference between the tail commit and the front commit to the `GitFileChecker.files_diff` attribute using the `_get_diff()` method.
- Finally, it extracts the changes made to the files using the `_extract_changes()` method.

#### Dependencies:
- `GitManager`: This class is required to obtain the tail commit and front commit.
- `GitFileChecker`: This class is required to store the files difference and extract the changes made to the files.