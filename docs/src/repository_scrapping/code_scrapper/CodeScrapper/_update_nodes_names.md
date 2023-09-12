## `_update_nodes_names() -> None`

#### Description:
This method updates the names of the relevant and assignment nodes in the CodeScrapper class.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate usage
scrapper = CodeScrapper()
scrapper._update_nodes_names()
```

#### How it Works:
This method updates the names of the relevant and assignment nodes by assigning the values from the `LanguageNodes` enum to the corresponding variables in the CodeScrapper class.

#### Dependencies:
- `LanguageNodes`: An enum that contains the names of relevant and assignment nodes for different file extensions.