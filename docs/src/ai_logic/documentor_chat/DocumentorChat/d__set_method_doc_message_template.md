## `_set_method_doc_message_template() -> None`

#### Description:
This method sets the document message template for the `_set_method_doc_message_template` method. It defines a template that will be used to generate the documentation message for the method. 

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Exceptions:
This method does not throw any exceptions.

#### Usage Cases:

```python
# Sample code to demonstrate usage of the method
method._set_method_doc_message_template()
```

#### How it Works:
This method creates a `PromptTemplate` object and assigns it to the `current_doc_message` attribute of the class. The `PromptTemplate` object defines a template for the documentation message, which includes placeholders for the method identifier and implementation. The template is then used to generate the documentation message by replacing the placeholders with the actual values.

#### Dependencies:
- `PromptTemplate`: This class is imported from the `langchain.prompts` module and is used to define the template for the documentation message.