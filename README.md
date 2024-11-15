# DocuMentor

## Installation

1. Create a secret in your GitHub repository named `OPENAI_API_KEY`. This key is necessary for generating documentation for your code.

2. Enable `ACTIONS` to make changes to your repository. You can configure this in your repository settings.

3. Add the `deploy_docu.yml` file to your workflows. You can find this YAML file in the DocuMentor repository.

4. Configure the `deploy_docu.yml` workflow to specify when the documentation process should run. By default, it uses `workflow_dispatch`, allowing you to trigger it manually.

5. Create a `.docignore` file and list, line by line, the names of files or folders that DocuMentor should ignore. Even if it’s empty, you must create this file.

6. When DocuMentor runs for the first time, enable GitHub Pages from the `gh-pages` branch to display the generated documentation.

7. Enjoy a well-organized and beautifully updated documentation!

---

### **IMPORTANT**
- Do not delete the `docs` folder or the `doc.log` file. These are critical for tracking the documentation history.
- If the `doc.log` file is missing, DocuMentor will treat the execution as if it's the first run and document everything.

---

## Getting Started

### Prerequisites

Before using DocuMentor, ensure the following:

1. You have a valid OpenAI API key.
2. GitHub Actions is enabled for your repository.
3. You have administrative rights to configure GitHub workflows and GitHub Pages.

### Quick Setup

1. **Set Up Your Repository**  
   - Add your OpenAI API key as a secret named `OPENAI_API_KEY` in your GitHub repository settings.  
   - Enable write permissions for `ACTIONS` under repository settings.

2. **Add DocuMentor Workflow**  
   - Download the `deploy_docu.yml` file from the DocuMentor repository and place it in your `.github/workflows` folder.

3. **Ignore Files**  
   - Create a `.docignore` file in the root of your repository. List any files or directories you want to exclude from documentation. Even if you have no exclusions, this file must exist.

4. **Deploy GitHub Pages**  
   - Run the workflow manually for the first time by triggering it via `workflow_dispatch`.
   - Go to your repository settings and enable GitHub Pages using the `gh-pages` branch to display the documentation.

5. **Update Documentation**  
   - Each time the workflow runs, your documentation will be updated automatically based on your latest changes.

### Features

- **Automatic Updates**: Keep your documentation up to date with minimal effort.
- **Customization**: Use the `.docignore` file to control what gets documented.
- **GitHub Pages Integration**: Publish your documentation effortlessly.

With DocuMentor, documenting your code has never been easier!
