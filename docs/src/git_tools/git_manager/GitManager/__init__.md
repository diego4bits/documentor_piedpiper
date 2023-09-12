## `__init__(repo_path: Path = Path.cwd())`

#### Description:
This method initializes an instance of the `GitManager` class. It sets up the necessary attributes and properties for managing a Git repository.

#### Parameters:
- `repo_path` (`Path`): The path to the Git repository directory. If not provided, the current working directory is used.

#### Returns:
This method does not return any value.

#### Exceptions:
- `Exception`: Raised when there is no head parent commit in the repository.

#### Usage Cases:

```python
# Initializing GitManager instance with default repository path
git_manager = GitManager()
print(git_manager)

# Initializing GitManager instance with a custom repository path
custom_path = Path('/path/to/repository')
git_manager = GitManager(repo_path=custom_path)
print(git_manager)
```

#### How it Works:
- The method takes an optional `repo_path` parameter, which specifies the path to the Git repository directory. If not provided, it defaults to the current working directory.
- The method initializes the `project_repo` attribute by creating a `Repository` object using the `repo_path`.
- It retrieves the head commit using `self.project_repo.head.peel(Commit)` and assigns it to the `head_commit` attribute.
- The `front_commit` attribute is set to the same value as `head_commit`.
- The `front_commit_tree` attribute is set to the tree associated with `front_commit`.
- If the head commit has a parent, the `tail_commit` attribute is set to the first parent commit. Otherwise, an exception is raised.
- The `tail_commit_tree` attribute is set to the tree associated with `tail_commit`.
- The `selected_commit` attribute is set to the `tail_commit`.
- The `selected_commit_tree` attribute is set to the tree associated with `tail_commit`.

#### Dependencies:
- `metaclasses.singleton_meta`: A metaclass used to create a singleton instance of the `GitManager` class.
- `pathlib.Path`: A class for representing file system paths.
- `pygit2.Repository`: A class for interacting with Git repositories.
- `pygit2.Commit`: A class representing a Git commit.
- `pygit2.Tree`: A class representing a Git tree.
- `typing.ClassVar`: A type hint for class-level variables.
- `typing.List`: A type hint for lists.