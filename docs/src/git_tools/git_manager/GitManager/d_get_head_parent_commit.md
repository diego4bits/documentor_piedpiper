## `get_head_parent_commit() -> Commit`

#### Description:
This method retrieves the parent commit of the current head commit. It is used to navigate the commit history and obtain information about the previous commit. This method belongs to the class `GitManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
- `Commit`: The parent commit of the current head commit.

#### Exceptions:
- `Exception`: This exception is raised when there is no parent commit for the current head commit.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = get_head_parent_commit()
print(result_case1)
```

#### How it Works:
The method first checks if the current head commit has a parent commit. If it does, it returns the parent commit. If it doesn't have a parent commit, it raises an exception indicating that there is no head parent commit.

#### Dependencies:
- `GitManager`: The class to which this method belongs.
- `Commit`: The class representing a commit in the Git repository.