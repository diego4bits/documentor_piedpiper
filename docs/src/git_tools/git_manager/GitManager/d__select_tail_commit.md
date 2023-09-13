## `_select_tail_commit() -> None`

#### Description:
This method assigns the tail commit and its corresponding tree to the class variables `selected_commit` and `selected_commit_tree` respectively. This method belongs to the class `GitManager`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not raise any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
git_manager = GitManager()
git_manager._select_tail_commit()
```

#### How it Works:
The `_select_tail_commit` method assigns the tail commit and its corresponding tree to the class variables `selected_commit` and `selected_commit_tree` respectively. The tail commit represents the latest commit in the repository.

#### Dependencies:
- `GitManager`: The class to which this method belongs.
- `selected_commit`: A class variable that represents the selected commit.
- `selected_commit_tree`: A class variable that represents the tree of the selected commit.