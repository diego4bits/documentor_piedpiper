## `_update_nodes_names() -> None`

#### Description:
This method updates the names of relevant and assignment nodes based on the file extension of the input file. This method belongs to the class `CodeScrapper`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value (`None`).

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
scrapper = CodeScrapper()
scrapper._update_nodes_names()
```

#### How it Works:
The method `_update_nodes_names` updates the names of relevant and assignment nodes based on the file extension of the input file. It retrieves the relevant and assignment nodes from the `LanguageNodes` enum using the file extension of the input file. The updated names are stored in the instance variables `_relevant_nodes_names` and `_assignment_nodes_names`.

#### Dependencies:
- `LanguageNodes`: Enum that contains the names of relevant and assignment nodes for different file extensions.
- `self._input_file`: Instance variable of type `FileHandler`, represents the input file.