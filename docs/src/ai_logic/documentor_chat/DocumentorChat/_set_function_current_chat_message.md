## `_set_function_current_chat_message()`

#### Description:
This method sets the current chat message for the function documentation. This method belongs to the class `DocumentorChat`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate a common use case
documentor_chat._set_function_current_chat_message()
```

#### How it Works:
This method creates a chat template using the system message and the current document message. It then formats the chat template by replacing placeholders with actual values such as function identifier, file name, file dependencies, function implementation, and function format. The resulting formatted prompt is set as the current chat message.

#### Dependencies:
- `ChatPromptTemplate`: A template for generating chat prompts.
- `self.system_message`: The system message for the chat.
- `self.current_doc_message`: The current document message for the chat.
- `self.snippet_to_doc.code_snippet_identifier`: Identifier of the code snippet to document.
- `self.snippet_to_doc.file_name`: Name of the file containing the code snippet.
- `self.snippet_to_doc.dependencies`: Dependencies required by the code snippet.
- `self.snippet_to_doc.implementation`: Implementation of the code snippet.
- `FUNCTION_DOCUMENTATION_TEMPLATE`: Template for formatting the function documentation.