## `get_head_parent_commit() -> Commit`

#### Description:
This method returns the parent commit of the current head commit. It belongs to the class GitManager.

#### Parameters:
This method does not have any parameters.

#### Returns:
- `Commit`: The parent commit of the current head commit.

#### Exceptions:
- `Exception`: This exception is thrown when there is no parent commit for the current head commit.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
result_case1 = get_head_parent_commit()
print(result_case1)
```

#### How it Works:
The method checks if the current head commit has a parent commit. If it does, it returns the parent commit. If there is no parent commit, it throws an exception indicating that there is no head parent commit.

#### Dependencies:
- `GitManager`: The class to which this method belongs.