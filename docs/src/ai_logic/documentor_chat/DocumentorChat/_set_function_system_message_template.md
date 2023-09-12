## `_set_function_system_message_template() -> None`

#### Description:
This method sets the system message template for documenting a function. It generates a prompt template with placeholders for function-specific information such as the function identifier, file name, file dependencies, and function format. The generated prompt template is then assigned to the `system_message` attribute of the class `DocumentorChat`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Creating an instance of DocumentorChat
chat = DocumentorChat()

# Calling the _set_function_system_message_template method
chat._set_function_system_message_template()
```

#### How it Works:
The method creates a `PromptTemplate` object with a specific template string. The template string contains placeholders for function-specific information such as the function identifier, file name, file dependencies, and function format. The `PromptTemplate` object is then wrapped in a `SystemMessagePromptTemplate` object and assigned to the `system_message` attribute of the `DocumentorChat` class.

#### Dependencies:
- `PromptTemplate`: A class that represents a prompt template.
- `SystemMessagePromptTemplate`: A class that represents a system message prompt template.