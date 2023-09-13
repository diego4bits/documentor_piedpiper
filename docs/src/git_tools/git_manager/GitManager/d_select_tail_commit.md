## `select_tail_commit() -> None`

#### Description:
This method performs the selection of the tail commit in a Git repository. It is used to retrieve the most recent commit in a repository. This method belongs to the class `GitManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything (`None`).

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
GitManager.instance.select_tail_commit()
```

#### How it Works:
This method calls the private method `_select_tail_commit()` of the `GitManager` class instance.

#### Dependencies:
- `GitManager`: The class to which this method belongs.
- `SingletonMeta`: A metaclass used to enforce the singleton pattern for the `GitManager` class.
- `Path`: A class from the `pathlib` module used for working with file system paths.
- `Repository`: A class from the `pygit2` module used to interact with a Git repository.
- `Commit`: A class from the `pygit2` module that represents a Git commit object.
- `Tree`: A class from the `pygit2` module that represents a Git tree object.
- `List`: A type hint used to indicate a list data structure.