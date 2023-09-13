## `_update_files_to_delete() -> None`

#### Description:
This method updates the list of files to be deleted. It belongs to the class DocumentationManager.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample usage of the method
manager = DocumentationManager()
manager._update_files_to_delete()
```

#### How it Works:
This method updates the internal list `_files_to_delete` of the DocumentationManager class by assigning it the value of `GitFileChecker.deleted`. This list contains the files that have been marked for deletion in the Git repository.

#### Dependencies:
- `GitFileChecker`: This class is responsible for checking the status of files in the Git repository.