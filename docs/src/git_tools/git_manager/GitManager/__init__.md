## `__init__(repo_path: Path = Path.cwd()) -> None`

#### Description:
This method initializes an instance of the GitManager class. It sets up the necessary attributes for managing a git repository.

#### Parameters:
- `repo_path` (`Path`): The path to the git repository. If not provided, the current working directory is used.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
- `Exception`: This exception is raised if there is no head parent commit in the repository.

#### Usage Cases:

```python
# Initialize GitManager with default repo path
git_manager = GitManager()
print(git_manager)

# Initialize GitManager with custom repo path
git_manager = GitManager(repo_path='/path/to/repo')
print(git_manager)
```

#### How it Works:
1. The method takes an optional argument `repo_path`, which defaults to the current working directory if not provided.
2. The repository at the given `repo_path` is opened using the `Repository` class from the `pygit2` module, and assigned to the `project_repo` attribute.
3. The head commit of the repository is obtained using `project_repo.head.peel(Commit)`, and assigned to the `head_commit` attribute.
4. The front commit is set to be the same as the head commit initially.
5. The tree associated with the front commit is assigned to the `front_commit_tree` attribute.
6. If the head commit has a parent commit, the tail commit is set to be the head commit's parent. Otherwise, an exception is raised.
7. The tree associated with the tail commit is assigned to the `tail_commit_tree` attribute.
8. The selected commit is initially set to be the tail commit, and the tree associated with it is assigned to the `selected_commit_tree` attribute.

#### Dependencies:
- `Path` from the `pathlib` module: Represents a filesystem path.
- `Repository`, `Commit`, and `Tree` from the `pygit2` module: Used for interacting with git repositories.