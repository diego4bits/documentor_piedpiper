## `GitFileChecker`

#### Description:
This class represents a Git file checker and provides functionalities for checking the status of files in a Git repository.

#### Attributes:
- `added` (`List[Path]`): A list of paths to files that have been added to the Git repository. Default: `[]`.
- `modified` (`List[Path]`): A list of paths to files that have been modified in the Git repository. Default: `[]`.
- `deleted` (`List[Path]`): A list of paths to files that have been deleted from the Git repository. Default: `[]`.
- `files_diff` (`Diff`): A Pygit2 Diff object representing the differences between two commits in the Git repository.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
instance = GitFileChecker()
# The rest of the example
```

#### How it Works:

The `GitFileChecker` class uses the `added`, `modified`, and `deleted` attributes to keep track of the files that have been added, modified, and deleted in a Git repository. The `files_diff` attribute contains the differences between two commits in the repository, which is used to update the lists of added, modified, and deleted files.

#### Dependencies:
- `git_tools.git_manager.GitManager`: This class is used to manage the Git repository and retrieve the differences between commits.
- `metaclasses.no_instanciable_meta.NoInstanciable`: This metaclass is used to make the `GitFileChecker` class non-instantiable.
- `pygit2.Diff`: This class is used to represent the differences between two commits in the Git repository.
- `pygit2.Commit`: This class is used to represent a commit in the Git repository.
- `pygit2.GIT_DELTA_ADDED`: A constant representing a file that has been added in the Git repository.
- `pygit2.GIT_DELTA_MODIFIED`: A constant representing a file that has been modified in the Git repository.
- `pygit2.GIT_DELTA_DELETED`: A constant representing a file that has been deleted from the Git repository.
- `pathlib.Path`: This class is used to represent file paths.
- `typing.List`: This class is used to represent a list of objects.