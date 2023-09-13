## `_set_default_system_message_template() -> None`

#### Description:
This method sets the default system message template for the DocumentorChat class.

#### Parameters:
This method does not have any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:
This method is called internally and does not have any specific usage cases.

#### How it Works:
This method creates a PromptTemplate object with a specific template string and input variables. It then assigns this PromptTemplate object to the system_message attribute of the DocumentorChat class.

#### Dependencies:
- `PromptTemplate`: A class that represents a template for generating prompts.
- `SystemMessagePromptTemplate`: A class that represents a system message prompt template.