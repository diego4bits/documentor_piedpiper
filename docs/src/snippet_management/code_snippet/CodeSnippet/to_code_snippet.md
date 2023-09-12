## `to_code_snippet(snippet_json: str) -> CodeSnippet`

#### Description:
This method takes a JSON string representation of a code snippet and returns a CodeSnippet object. It is used to convert a JSON string into a CodeSnippet object. This method belongs to the class CodeSnippet.

#### Parameters:
- `snippet_json` (`str`): A JSON string representation of a code snippet.

#### Returns:
- `CodeSnippet`: The CodeSnippet object created from the JSON string.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
snippet_json = '{"name": "example", "language": "Python", "code": "print(\'Hello, World!\')"}'
snippet = to_code_snippet(snippet_json)
print(snippet)

# Another use case (if applicable)
snippet_json = '{"name": "another_example", "language": "Java", "code": "System.out.println(\"Hello, World!\");"}'
snippet = to_code_snippet(snippet_json)
print(snippet)
```

#### How it Works:

The method takes a JSON string representation of a code snippet as input. It uses the `json.loads()` function to convert the JSON string into a Python dictionary. Then, it passes the dictionary as keyword arguments to the `CodeSnippet` constructor using the `**` syntax. This creates a new `CodeSnippet` object with the attributes specified in the JSON string. The method returns the newly created `CodeSnippet` object.

#### Dependencies:
- This method does not have any dependencies.