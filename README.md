# Abyss Documentation Site

> **Accelerate your life with an AI launchpad** :material-rocket-launch:

This repository contains the documentation website for Abyss, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## :material-sparkles: Features

- **Modern Design**: Built with Material Design principles
- **Responsive**: Works perfectly on all devices
- **Fast Search**: Instant search across all documentation
- **Dark/Light Mode**: Automatic theme switching
- **Code Highlighting**: Syntax highlighting for 100+ languages
- **Interactive Elements**: Tabs, admonitions, and more
- **Icon Pack**: Material Design icons throughout (no emoji dependency)

## :material-rocket: Quick Start

### Prerequisites

- Python 3.8 or higher
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/abyss-app-dev/docsite.git
   cd docsite
   ```

2. **Create virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Serve locally**
   ```bash
   mkdocs serve
   ```

5. **Open in browser**
   Navigate to `http://localhost:8000`

### Building for Production

```bash
mkdocs build
```

The built site will be in the `site/` directory.

## :material-folder: Project Structure

```
docsite/
├── docs/                          # Documentation source files
│   ├── index.md                   # Homepage
│   ├── docs/                      # Documentation pages
│   │   ├── getting-started.md     # Getting started guide
│   │   ├── installation.md        # Installation instructions
│   │   ├── user-guide.md          # Complete user guide
│   │   ├── api-reference.md       # API documentation
│   │   ├── features/              # Feature-specific docs
│   │   │   ├── chat.md           # Chat interface
│   │   │   ├── code-generation.md # Code generation
│   │   │   ├── content-creation.md # Content creation
│   │   │   └── data-analysis.md   # Data analysis
│   │   ├── advanced/              # Advanced topics
│   │   │   ├── workspaces.md     # Workspace management
│   │   │   ├── plugins.md        # Plugin system
│   │   │   └── automation.md     # Automation features
│   │   └── troubleshooting/       # Help and support
│   │       ├── common-issues.md  # Common problems
│   │       ├── performance.md    # Performance tips
│   │       └── support.md        # Getting help
│   └── release-log.md             # Version history
├── .github/
│   └── workflows/
│       ├── deploy.yml             # GitHub Actions deployment
│       └── deploy-simple.yml     # Alternative deployment
├── mkdocs.yml                     # MkDocs configuration
├── requirements.txt               # Python dependencies
└── README.md                      # This file
```

## :material-palette: Customization

### Theme Configuration

The site uses MkDocs Material with custom configuration in `mkdocs.yml`:

- **Colors**: Deep purple primary with purple accent
- **Fonts**: Roboto for text, Roboto Mono for code
- **Icons**: Material Design icons with rocket logo
- **Features**: Navigation tabs, search highlighting, code copying

### Adding Content

1. **New Pages**: Add `.md` files in the `docs/` directory
2. **Navigation**: Update the `nav` section in `mkdocs.yml`
3. **Styling**: Use Material Design components and extensions

### Nested Navigation Example

The site demonstrates deep navigation hierarchies:

```yaml
nav:
  - Documentation:
    - User Guide: 
      - Overview: docs/user-guide.md
      - Core Features:
        - Chat Interface: docs/features/chat.md
        - Code Generation: docs/features/code-generation.md
      - Advanced Usage:
        - Workspaces: docs/advanced/workspaces.md
        - Plugins: docs/advanced/plugins.md
```

### Markdown Extensions

The site supports advanced Markdown features:

- **Code Blocks**: Syntax highlighting with line numbers
- **Admonitions**: Info, warning, tip boxes
- **Tabs**: Content organization
- **Tables**: Enhanced table formatting
- **Icons**: Material Design icon support
- **Math**: LaTeX math rendering

## :material-cloud-upload: Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch:

1. **Enable GitHub Pages** in repository settings
2. **Set source** to "GitHub Actions"
3. **Push changes** to `main` branch
4. **Site deploys** automatically via GitHub Actions

### Manual Deployment

```bash
# Build the site
mkdocs build

# Deploy to GitHub Pages
mkdocs gh-deploy
```

## :material-wrench: Development

### Adding New Documentation

1. Create new `.md` file in appropriate directory
2. Add to navigation in `mkdocs.yml`
3. Use consistent formatting and style
4. Test locally before committing

### Code Examples

Use fenced code blocks with language specification:

````markdown
```python
def hello_world():
    print("Hello, Abyss!")
```
````

### Admonitions

Use admonitions for important information:

```markdown
!!! tip "Pro Tip"
    This is a helpful tip for users.

!!! warning "Important"
    This is important information to note.
```

### Using Icons

Replace emojis with Material Design icons:

```markdown
# Instead of 🚀
:material-rocket:

# Instead of ✨  
:material-sparkles:

# Instead of 💡
:material-lightbulb:
```

## :material-package-variant: Dependencies

- **mkdocs-material**: Material Design theme
- **mkdocs-git-revision-date-localized-plugin**: Git-based page dates
- **mkdocs-minify-plugin**: HTML/CSS/JS minification
- **mkdocs-redirects**: URL redirection support

## :material-account-group: Contributing

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Test** locally with `mkdocs serve`
5. **Submit** a pull request

### Writing Guidelines

- Use clear, concise language
- Include code examples where helpful
- Follow the existing structure and style
- Test all links and references
- Use Material Design icons instead of emojis

## :material-license: License

This documentation is licensed under the MIT License. See the main Abyss project for software licensing.

## :material-link: Links

- **Live Site**: [https://abyss-app-dev.github.io/docsite/](https://abyss-app-dev.github.io/docsite/)
- **MkDocs Material**: [https://squidfunk.github.io/mkdocs-material/](https://squidfunk.github.io/mkdocs-material/)
- **Abyss Project**: [https://github.com/abyss-app-dev](https://github.com/abyss-app-dev)

---

*Built with :material-heart: using MkDocs Material* 