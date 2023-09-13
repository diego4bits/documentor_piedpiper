## `update_tail_commit(tail_commit_hash: str) -> None`

#### Description:
This method updates the tail commit of the GitManager instance. It calls the private method `_update_tail_commit` to perform the update. This method belongs to the class `GitManager`.

#### Parameters:
- `tail_commit_hash` (`str`): The hash of the commit that will be set as the new tail commit.

#### Returns:
- `None`: This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Updating the tail commit with a specific commit hash
GitManager.update_tail_commit("f5d2a2c")

# Updating the tail commit with another commit hash
GitManager.update_tail_commit("a8c6b4f")
```

#### How it Works:
This method takes a commit hash as input and calls the private method `_update_tail_commit` to update the tail commit of the GitManager instance. The private method `_update_tail_commit` handles the logic to update the tail commit.

#### Dependencies:
This method does not have any dependencies.