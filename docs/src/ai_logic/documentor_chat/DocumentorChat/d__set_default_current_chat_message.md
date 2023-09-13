## `_set_default_current_chat_message()`

#### Description:
This method sets the default value for the current chat message in the DocumentorChat class.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate the usage of _set_default_current_chat_message()
documentor_chat = DocumentorChat()
documentor_chat._set_default_current_chat_message()
```

#### How it Works:
This method creates a chat template using the system message and the current documentation message. It then formats the prompt value using various properties of the DocumentorChat instance, such as the snippet identifier, file name, dependencies, snippet implementation, and default documentation template. The resulting prompt value is assigned to the current chat message property.

#### Dependencies:
- `ChatPromptTemplate`: A template used to format chat prompts.
- `self.system_message`: The system message used in the chat template.
- `self.current_doc_message`: The current documentation message used in the chat template.
- `self.snippet_to_doc`: An instance of the CodeSnippet class containing information about the code snippet to be documented.
- `DEFAULT_DOCUMENTATION_TEMPLATE`: The default format for documentation templates.