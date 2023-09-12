## `commit_doc_changes() -> None`

#### Description:
This method stages and commits the changes made to the 'docs' directory. It belongs to the class 'GitManager'.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
commit_doc_changes()
```

#### How it Works:
This method stages the 'doc.log' file and then performs the commit using the 'GitManager' class.

#### Dependencies:
- `Path` from the 'pathlib' module: This module provides classes to manipulate paths and their components.
- `GitManager`: This class provides methods for managing Git repositories.