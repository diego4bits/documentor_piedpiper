## `_set_class_current_chat_message()`

#### Description:
This method sets the value of the `current_chat_message` attribute in the `DocumentorChat` class. It performs a specific action related to generating a chat template for documentation purposes. This method belongs to the class `DocumentorChat`.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not have a return value.

#### Usage Cases:

```python
# Sample code to demonstrate the use of _set_class_current_chat_message()
chat._set_class_current_chat_message()
```

#### How it Works:
The method first creates a `ChatPromptTemplate` object called `chat_template` using the system message and the current document message. Then, it formats the chat template with the necessary values such as the code snippet identifier, file name, file dependencies, class implementation, and class format. The resulting formatted prompt is assigned to the `prompt_value` variable. Finally, the `current_chat_message` attribute is set to the value of `prompt_value`.

#### Dependencies:
- `ChatPromptTemplate`: This dependency is used to create and format the chat template.
- `self.system_message`: This attribute is used as part of the chat template.
- `self.current_doc_message`: This attribute is used as part of the chat template.
- `self.snippet_to_doc.code_snippet_identifier`: This attribute is used as part of the chat template.
- `self.snippet_to_doc.file_name`: This attribute is used as part of the chat template.
- `self.snippet_to_doc.dependencies`: This attribute is used as part of the chat template.
- `self.snippet_to_doc.implementation`: This attribute is used as part of the chat template.
- `CLASS_DOCUMENTATION_TEMPLATE`: This constant is used as part of the chat template.