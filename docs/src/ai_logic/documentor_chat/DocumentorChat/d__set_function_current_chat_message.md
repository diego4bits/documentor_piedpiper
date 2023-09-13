## `_set_function_current_chat_message()`

#### Description:
This method sets the value of the `current_chat_message` attribute in the `DocumentorChat` class. It performs a specific action related to creating a chat prompt template and formatting it with specific values. This method belongs to the class `DocumentorChat`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate the use of _set_function_current_chat_message()
documentor_chat = DocumentorChat()
documentor_chat._set_function_current_chat_message()
```

#### How it Works:
The method first creates a `ChatPromptTemplate` object using the `system_message` and `current_doc_message` attributes of the `DocumentorChat` instance. It then formats the chat template prompt with the following values:
- `function_identifier`: The identifier of the code snippet's function.
- `file_name`: The name of the file containing the code snippet.
- `file_dependencies`: The dependencies of the code snippet.
- `function_implementation`: The implementation of the code snippet's function.
- `function_format`: The template for documenting a function.

The resulting formatted prompt is then assigned to the `current_chat_message` attribute of the `DocumentorChat` instance.

#### Dependencies:
- `ChatPromptTemplate`: A class for creating chat prompt templates.
- `system_message`: An attribute that represents a system message in the chat.
- `current_doc_message`: An attribute that represents the current documentation message in the chat.
- `snippet_to_doc`: An instance of the `CodeSnippet` class that contains the code snippet to be documented.