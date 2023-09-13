## `update_front_commit(front_commit_hash: str) -> None`

#### Description:
This method performs the update of the front commit hash in the GitManager instance. It is used for updating the front commit hash to a new value. This method belongs to the class GitManager.

#### Parameters:
- `front_commit_hash` (`str`): The new front commit hash to be updated.

#### Returns:
- `None`: This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
GitManager.update_front_commit('abcd1234')
```

#### How it Works:
The method 'update_front_commit' is a wrapper around the private method '_update_front_commit' of the GitManager instance. It takes a new front commit hash as a parameter and updates the front commit hash in the GitManager instance.

#### Dependencies:
- This method does not have any dependencies.