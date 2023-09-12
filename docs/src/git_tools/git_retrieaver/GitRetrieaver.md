## `GitRetrieaver`

#### Description:
This class represents a Git retriever and provides functionalities for retrieving data from a Git repository.

#### Attributes:
- `git_manager` (`GitManager`): A GitManager object that handles the interactions with the Git repository.
- `path` (`Path`): The path to the Git repository.
- `blob` (`Blob`): A Pygit2 Blob object representing the data retrieved from the repository.

#### Usage Cases:

```python
# Import the necessary modules
from git_tools.git_manager import GitManager
from metaclasses.no_instanciable_meta import NoInstanciable
from pathlib import Path
from pygit2 import Blob

# Instantiate the GitRetrieaver class
git_retrieaver = GitRetrieaver()

# The rest of the code...
```

#### How it Works:
The GitRetrieaver class works by utilizing a GitManager object to interact with a Git repository. It retrieves data from the repository using the provided path and stores it in a Pygit2 Blob object.

#### Dependencies:
- `GitManager`: A class that handles the interactions with a Git repository.
- `Path`: A class from the pathlib module that represents a file or directory path.
- `Blob`: A class from the pygit2 module that represents a blob object in a Git repository.