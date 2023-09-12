## `_set_current_snippet(snippet_to_doc: CodeSnippet)`

#### Description:
This method sets the current snippet to the provided CodeSnippet. This method belongs to the class DocWriter.

#### Parameters:
- `snippet_to_doc` (`CodeSnippet`): The CodeSnippet object that will be set as the current snippet.

#### Returns:
This method does not return anything.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Set a CodeSnippet as the current snippet
snippet = CodeSnippet(...)
doc_writer._set_current_snippet(snippet)
```

#### How it Works:
This method sets the current snippet of the DocWriter instance to the CodeSnippet provided as the parameter.

#### Dependencies:
- `CodeSnippet`: This method depends on the CodeSnippet class, which represents a code snippet.