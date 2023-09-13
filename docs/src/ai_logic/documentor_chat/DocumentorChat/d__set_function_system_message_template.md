## `_set_function_system_message_template() -> None`

#### Description:
This method sets the system message prompt template for documenting a function. It generates a template that prompts the user to document a given function. The template includes placeholders for the function identifier, file name, file dependencies, and function format. The generated prompt is in markdown format.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Example usage of the method
documentor_chat = DocumentorChat()
documentor_chat._set_function_system_message_template()
```

#### How it Works:
The method creates a `PromptTemplate` object with a template string. The template string includes placeholders for the function identifier, file name, file dependencies, and function format. The `PromptTemplate` object is then used to create a `SystemMessagePromptTemplate` object, which is assigned to the `system_message` attribute of the `DocumentorChat` instance.

#### Dependencies:
This method depends on the following:
- `PromptTemplate` from `langchain.prompts`: Used to create the system message prompt template.
- `SystemMessagePromptTemplate` from `langchain.prompts`: Used to assign the generated prompt template to the `system_message` attribute.