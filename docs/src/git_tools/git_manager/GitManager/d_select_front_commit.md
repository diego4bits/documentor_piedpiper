## `select_front_commit() -> None`

#### Description:
This method performs the selection of the front commit in a Git repository. It is used for retrieving the first commit made in a repository. This method belongs to the class `GitManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not have a return value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
select_front_commit()
```

#### How it Works:
The `select_front_commit()` method internally calls the `_select_front_commit()` method of the `GitManager` singleton instance.

#### Dependencies:
- `GitManager`: This class provides the functionality to manage a Git repository. It is a singleton class.
- `SingletonMeta`: This metaclass is used to implement the singleton pattern for the `GitManager` class.
- `Path`: This class represents the path of a file or directory in the file system.
- `pygit2.Repository`: This class represents a Git repository.
- `pygit2.Commit`: This class represents a Git commit object.
- `pygit2.Tree`: This class represents a Git tree object.
- `List`: This class represents a list of elements.