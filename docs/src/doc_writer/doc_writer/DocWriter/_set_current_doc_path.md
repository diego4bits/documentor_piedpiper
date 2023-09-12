## `_set_current_doc_path()`

#### Description:
This method sets the current documentation path for the current snippet file. It belongs to the class `DocWriter`.

#### Parameters:
This method does not take any parameters.

#### Returns:
This method does not return any value.

#### Usage Cases:

```python
# Sample code to demonstrate the use of this method
doc_writer = DocWriter()
doc_writer._set_current_doc_path()
```

#### How it Works:
This method first gets the parent directory of the current snippet file and assigns it to the variable `file_path`. Then, it extracts the file name without the extension from the current snippet file and assigns it to the variable `file_name_without_extension`. 

Next, it creates a new `Path` object by concatenating `file_name_without_extension` with the ".md" extension and assigns it to the variable `file_doc`.

Then, it creates a new `Path` object by concatenating `self.doc_path`, `file_path`, and `file_doc` and assigns it to the variable `doc_file_path`.

Finally, it assigns `doc_file_path` to the `current_doc_path` attribute of the `DocWriter` instance.

#### Dependencies:
- `Path`: This method uses the `Path` class from the `pathlib` module to manipulate file paths.