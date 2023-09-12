## `update_changed_files() -> None`

#### Description:
This method performs the update of changed files in the Git repository. It belongs to the `GitFileChecker` class.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
GitFileChecker.update_changed_files()
```

#### How it Works:
1. Get the tail commit using the `tail_commit` method from the `GitManager` class.
2. Get the front commit using the `front_commit` method from the `GitManager` class.
3. Calculate the difference between the tail and front commits using the `_get_diff` method from the `GitFileChecker` class.
4. Extract the changes from the difference using the `_extract_changes` method from the `GitFileChecker` class.

#### Dependencies:
- `GitManager`: This class is responsible for managing Git operations and providing access to commit information.