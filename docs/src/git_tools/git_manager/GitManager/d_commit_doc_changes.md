## `commit_doc_changes() -> None`

#### Description:
This method stages the `doc.log` file in the `docs` directory and commits the changes. This method belongs to the class `GitManager`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
commit_doc_changes()

# Another use case (if applicable)
commit_doc_changes()
```

#### How it Works:

This method first creates a `Path` object representing the `doc.log` file in the `docs` directory. Then, it stages the `doc.log` file using the `stage_file` method of the `GitManager` class. Finally, it commits the changes using the `commit` method of the `GitManager` class.

#### Dependencies:
- `Path`: Represents the path to a file or directory in the file system.
- `GitManager`: Class that provides methods for interacting with a Git repository.