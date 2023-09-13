## `_set_method_system_message_template() -> None`

#### Description:
This method sets the system message prompt template for documenting a specific method. It takes into consideration the method and class identifiers, the file name and its dependencies, and the required method format. The resulting documentation is outputted in markdown format.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Dependencies:
- `PromptTemplate`: Used to create the system message prompt template.

#### Usage Cases:

```python
# Sample code to demonstrate usage
documentor_chat = DocumentorChat()
documentor_chat._set_method_system_message_template()
```

#### How it Works:
The method creates a `PromptTemplate` object with a specific template for documenting a method. The template includes placeholders for the method identifier, class identifier, file name, file dependencies, and method format. These placeholders will be filled in with the actual values when generating the system message prompt template.

The `PromptTemplate` object is then used to create a `SystemMessagePromptTemplate` object, which is assigned to the `system_message` attribute of the `DocumentorChat` class.

Note: The actual implementation of the template and its placeholders is not provided in the code snippet.