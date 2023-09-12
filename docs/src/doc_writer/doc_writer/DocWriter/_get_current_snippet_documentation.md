## `_get_current_snippet_documentation() -> None`

#### Description:
This method sets the current snippet to be documented, asks for documentation input from the user, and retrieves the documentation answer. This method belongs to the class `DocWriter`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate how to use the method
doc_writer = DocWriter()
doc_writer._get_current_snippet_documentation()
```

#### How it Works:
1. The method sets the current snippet to be documented using the `set_snippet_to_doc()` method from the `DocumentorChat` class.
2. It asks for documentation input from the user using the `ask_documentation()` method from the `DocumentorChat` class.
3. It retrieves the documentation answer using the `get_documentation_answer()` method from the `DocumentorChat` class.
4. The retrieved documentation is stored in the `snippet_documentation` attribute of the `DocWriter` class.

#### Dependencies:
- `DocumentorChat`: This class is responsible for interacting with the user to gather documentation input.