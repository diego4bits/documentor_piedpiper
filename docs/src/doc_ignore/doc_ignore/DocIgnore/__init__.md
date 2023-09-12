## `__init__(self, root_path: Path = None) -> None`

#### Description:
This method initializes an instance of the `DocIgnore` class. It sets the `ignore` attribute based on the contents of the `.docignore` file located at the root path of the project.

#### Parameters:
- `root_path` (`Path`, optional): The root path of the project. If not provided, the current directory is considered as the root path.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
- `Exception`: Raised when the `.docignore` file is not found at the root directory of the project.

#### Usage Cases:

```python
# Initialize DocIgnore instance with default root path
doc_ignore = DocIgnore()
print(doc_ignore.ignore)

# Initialize DocIgnore instance with custom root path
doc_ignore = DocIgnore(Path("/path/to/project"))
print(doc_ignore.ignore)
```

#### How it Works:
- If the `root_path` parameter is provided, it is assigned to the `project_root` variable. Otherwise, the current directory is used as the root path.
- The `.docignore` file path is constructed by appending "/.docignore" to the `project_root` path.
- If the `.docignore` file exists, the front commit is selected using `GitManager.select_front_commit()`.
- The contents of the `.docignore` file are retrieved using `GitRetrieaver.retrieve_file(doc_ignore_path)`.
- The lines of the file are split and stored in the `doc_lines` list.
- The `doc_set` is created by converting `doc_lines` into a set.
- Leading and trailing whitespaces are removed from each line in `doc_set` and stored in `clean_doc_set`.
- The `clean_doc_set` is assigned to the `ignore` attribute of the instance.
- The tail commit is selected using `GitManager.select_tail_commit()`.
- If the `.docignore` file does not exist, an exception is raised indicating that the file is not found.

#### Dependencies:
- `SingletonMeta` from `metaclasses.singleton_meta`: A metaclass used to create a singleton instance of the class.
- `GitRetrieaver` from `git_tools.git_retrieaver`: A class used to retrieve files from a Git repository.
- `GitManager` from `git_tools.git_manager`: A class used to manage Git operations.
- `Path` from `pathlib`: A class representing file system paths.
- `ClassVar` from `typing`: A type hint used to define class-level variables.
[In case of no dependencies display] This method does not have any dependencies.