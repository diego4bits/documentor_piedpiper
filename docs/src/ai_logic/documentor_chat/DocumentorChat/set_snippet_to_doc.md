## `set_snippet_to_doc(snippet_to_doc: CodeSnippet)`

#### Description:
This method sets a code snippet to a document. It is used to associate a code snippet with a document. This method belongs to the class DocumentorChat.

#### Parameters:
- `snippet_to_doc` (`CodeSnippet`): The code snippet to be associated with the document.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Set a code snippet to a document
snippet = CodeSnippet("def add(a, b):\n    return a + b")
set_snippet_to_doc(snippet)
```

#### How it Works:
The method sets the provided code snippet to a document by calling the `_set_snippet_to_doc` method of the `DocumentorChat` instance.

#### Dependencies:
- `CodeSnippet`: Represents a code snippet to be associated with a document.