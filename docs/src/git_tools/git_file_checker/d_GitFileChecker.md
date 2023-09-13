## `GitFileChecker`

#### Description:
This class represents a Git file checker and provides functionalities for detecting added, modified, and deleted files in a Git repository.

#### Attributes:
- `added` (`List[Path]`): A list of `Path` objects representing the added files in the Git repository. Default: `[]`.
- `modified` (`List[Path]`): A list of `Path` objects representing the modified files in the Git repository. Default: `[]`.
- `deleted` (`List[Path]`): A list of `Path` objects representing the deleted files in the Git repository. Default: `[]`.
- `files_diff` (`Diff`): The Git diff object containing the file changes. Default: `None`.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case of instantiating and using the class
instance = GitFileChecker()
# The rest of the example
```

#### How it Works:

The `GitFileChecker` class uses the `GitManager` class from the `git_tools.git_manager` module to interact with a Git repository. It utilizes the `pygit2` library to retrieve the diff information between commits.

The class provides methods to detect added, modified, and deleted files in the Git repository. The `added`, `modified`, and `deleted` attributes are lists that store the `Path` objects representing the respective file changes.

The `files_diff` attribute holds the Git diff object, which contains information about the file changes in the repository.

#### Dependencies:
- `GitManager`: Provides the necessary methods to interact with a Git repository.
- `pygit2`: A Python library for interacting with Git repositories.
- `Diff`: A class from the `pygit2` library that represents the diff between two commits.
- `Commit`: A class from the `pygit2` library that represents a Git commit.
- `GIT_DELTA_ADDED`, `GIT_DELTA_MODIFIED`, `GIT_DELTA_DELETED`: Constants from the `pygit2` library representing different types of file changes in a diff.
- `Path`: A class from the `pathlib` module that represents a file or directory path in the file system.