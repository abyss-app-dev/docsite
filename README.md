# Abyss Documentation Site

> **Accelerate your life with an AI launchpad** 🚀

This repository contains the documentation website for Abyss, built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## 🌟 Features

- **Modern Design**: Built with Material Design principles
- **Responsive**: Works perfectly on all devices
- **Fast Search**: Instant search across all documentation
- **Dark/Light Mode**: Automatic theme switching
- **Code Highlighting**: Syntax highlighting for 100+ languages
- **Interactive Elements**: Tabs, admonitions, and more

## 🚀 Quick Start

### Prerequisites

- Python 3.8 or higher
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/abyss-docsite.git
   cd abyss-docsite
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

## 📁 Project Structure

```
abyss-docsite/
├── docs/                          # Documentation source files
│   ├── index.md                   # Homepage
│   ├── docs/                      # Documentation pages
│   │   ├── getting-started.md     # Getting started guide
│   │   ├── installation.md        # Installation instructions
│   │   ├── user-guide.md          # Complete user guide
│   │   └── api-reference.md       # API documentation
│   └── release-log.md             # Version history
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions deployment
├── mkdocs.yml                     # MkDocs configuration
├── requirements.txt               # Python dependencies
└── README.md                      # This file
```

## 🎨 Customization

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

### Markdown Extensions

The site supports advanced Markdown features:

- **Code Blocks**: Syntax highlighting with line numbers
- **Admonitions**: Info, warning, tip boxes
- **Tabs**: Content organization
- **Tables**: Enhanced table formatting
- **Emoji**: Material Design emoji support
- **Math**: LaTeX math rendering

## 🚀 Deployment

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

## 🔧 Development

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

## 📦 Dependencies

- **mkdocs-material**: Material Design theme
- **mkdocs-git-revision-date-localized-plugin**: Git-based page dates
- **mkdocs-minify-plugin**: HTML/CSS/JS minification
- **mkdocs-redirects**: URL redirection support

## 🤝 Contributing

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

## 📄 License

This documentation is licensed under the MIT License. See the main Abyss project for software licensing.

## 🔗 Links

- **Live Site**: [https://your-username.github.io/abyss-docsite/](https://your-username.github.io/abyss-docsite/)
- **MkDocs Material**: [https://squidfunk.github.io/mkdocs-material/](https://squidfunk.github.io/mkdocs-material/)
- **Abyss Project**: [https://github.com/your-username/abyss](https://github.com/your-username/abyss)

---

*Built with ❤️ using MkDocs Material* 