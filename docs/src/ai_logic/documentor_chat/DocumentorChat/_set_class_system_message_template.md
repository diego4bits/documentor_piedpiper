## `_set_class_system_message_template() -> None`

#### Description:
This method sets the system message template for the DocumentorChat class.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Usage case for setting the class system message template
documentor_chat._set_class_system_message_template()
```

#### How it Works:
This method creates a prompt template for the system message of the DocumentorChat class. The template includes placeholders for the class identifier, file name, file dependencies, and class format. The prompt template is then assigned to the `self.system_message` attribute.

#### Dependencies:
- `PromptTemplate`: A class for creating templates for prompts.
- `SystemMessagePromptTemplate`: A class for creating templates specifically for system messages.