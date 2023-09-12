## `_update_files_to_delete() -> None`

#### Description:
This method updates the list of files to be deleted. It belongs to the class DocumentationManager.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate the use of _update_files_to_delete()
documentation_manager = DocumentationManager()
documentation_manager._update_files_to_delete()
```

#### How it Works:
The method `_update_files_to_delete` updates the list of files to be deleted by assigning the value of `GitFileChecker.deleted` to the attribute `_files_to_delete`.

#### Dependencies:
- `GitFileChecker`: This class is used to check for deleted files in the Git repository.