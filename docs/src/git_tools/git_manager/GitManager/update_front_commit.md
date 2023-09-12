## `update_front_commit(front_commit_hash: str)`

#### Description:
This method updates the front commit of the GitManager instance. It is used to set the front commit hash to a new value. This method belongs to the class GitManager.

#### Parameters:
- `front_commit_hash` (`str`): The new hash value for the front commit.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
GitManager.update_front_commit('new_hash_value')
```

#### How it Works:
This method calls the private method `_update_front_commit` of the GitManager instance, passing the new front commit hash value as a parameter.

#### Dependencies:
- This method does not have any dependencies.