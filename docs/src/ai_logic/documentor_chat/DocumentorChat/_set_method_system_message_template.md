## `_set_method_system_message_template() -> None`

#### Description:
This method sets the system message template for documenting a method. It takes into consideration the method's identifier, class's identifier, file name, file dependencies, and method format. The resulting system message template is used to generate the method's documentation in markdown format.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Calling the method to set the system message template
method_object._set_method_system_message_template()
```

#### How it Works:
This method creates a `PromptTemplate` object with a predefined template string. The template string includes placeholders for the method's identifier, class's identifier, file name, file dependencies, and method format. These placeholders will be replaced with the actual values when generating the system message template.

#### Dependencies:
This method depends on the following modules and classes:
- `PromptTemplate` from `langchain.prompts`: Used to create the system message template.