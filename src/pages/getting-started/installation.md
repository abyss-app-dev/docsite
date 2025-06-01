---
title: Installation Guide
description: Install Abyss on your system with these step-by-step instructions.
layout: ../../layouts/MainLayout.astro
---

# Installation Guide

Get Abyss up and running on your system in just a few minutes. Choose the installation method that works best for your platform and preferences.

## System Requirements

Before installing Abyss, ensure your system meets these minimum requirements:

- **Python 3.8+** (3.10+ recommended)
- **2GB RAM** (4GB+ recommended)
- **1GB disk space** for installation
- **Internet connection** for initial setup and cloud models

## Quick Install (Recommended)

The fastest way to get started with Abyss:

```bash
pip install abyss-ai
```

That's it! Abyss is now installed and ready to use.

## Platform-Specific Instructions

### macOS

#### Using Homebrew (Recommended)
```bash
# Install Python if not already installed
brew install python

# Install Abyss
pip3 install abyss-ai

# Verify installation
abyss --version
```

#### Using the macOS Installer
1. Download the [macOS installer](https://github.com/abyss-app-dev/abyss/releases)
2. Double-click the `.dmg` file
3. Drag Abyss to your Applications folder
4. Launch from Applications or run `abyss` in Terminal

### Windows

#### Using pip (Recommended)
```bash
# Ensure Python is installed (download from python.org if needed)
python -m pip install abyss-ai

# Verify installation
abyss --version
```

#### Using Windows Installer
1. Download the [Windows installer](https://github.com/abyss-app-dev/abyss/releases)
2. Run the `.exe` file as Administrator
3. Follow the installation wizard
4. Abyss will be available in Start Menu and Command Prompt

### Linux

#### Ubuntu/Debian
```bash
# Update package list
sudo apt update

# Install Python and pip if not installed
sudo apt install python3 python3-pip

# Install Abyss
pip3 install abyss-ai

# Add to PATH (if needed)
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### CentOS/RHEL/Fedora
```bash
# Install Python and pip
sudo dnf install python3 python3-pip  # Fedora
# OR
sudo yum install python3 python3-pip  # CentOS/RHEL

# Install Abyss
pip3 install abyss-ai
```

#### Arch Linux
```bash
# Install from AUR (if available)
yay -S abyss-ai

# OR install via pip
pip install abyss-ai
```

## Alternative Installation Methods

### Using Conda

If you prefer Conda for package management:

```bash
# Create a new environment (recommended)
conda create -n abyss python=3.10
conda activate abyss

# Install Abyss
pip install abyss-ai
```

### Using Poetry

For Python developers who use Poetry:

```bash
# Add to your project
poetry add abyss-ai

# Or install globally
pipx install abyss-ai
```

### Docker Installation

Run Abyss in a Docker container:

```bash
# Pull the official image
docker pull ghcr.io/abyss-app-dev/abyss:latest

# Run with volume mounting for persistence
docker run -it -v $(pwd):/workspace ghcr.io/abyss-app-dev/abyss:latest

# Or use docker-compose
curl -O https://raw.githubusercontent.com/abyss-app-dev/abyss/main/docker-compose.yml
docker-compose up
```

### Development Installation

To install from source for development:

```bash
# Clone the repository
git clone https://github.com/abyss-app-dev/abyss.git
cd abyss

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install in development mode
pip install -e .

# Install development dependencies
pip install -r requirements-dev.txt
```

## Verification

After installation, verify that Abyss is working correctly:

```bash
# Check version
abyss --version

# Test basic functionality
abyss chat "Hello, Abyss!"

# Check available commands
abyss --help
```

You should see output similar to:
```
Abyss v1.2.0
AI Launchpad - Accelerate your life with AI
```

## Configuration

### Initial Setup

Run the setup wizard to configure Abyss:

```bash
abyss setup
```

This will guide you through:
- API key configuration (for cloud models)
- Default model selection
- Workspace creation
- Plugin installation

### Configuration File

Abyss stores configuration in `~/.abyss/config.yaml`:

```yaml
# Example configuration
api_keys:
  openai: "your-openai-key"
  anthropic: "your-anthropic-key"

default_model: "gpt-4"
workspace_path: "~/abyss-workspace"

plugins:
  - code-completion
  - data-analyzer
  - writing-assistant
```

## Troubleshooting

### Common Issues

**"Command not found: abyss"**
- Ensure Python's scripts directory is in your PATH
- Try using `python -m abyss` instead of `abyss`

**Permission denied errors (Linux/macOS)**
- Use `pip install --user abyss-ai` for user-local installation
- Or create a virtual environment

**Python version errors**
- Upgrade Python: `python -m pip install --upgrade python`
- Use `python3` instead of `python` on some systems

**Import errors**
- Ensure all dependencies are installed: `pip install --upgrade abyss-ai`
- Check for conflicting packages: `pip check`

### Getting Help

If you encounter issues:

1. **Check the logs**: `abyss logs`
2. **Update to latest version**: `pip install --upgrade abyss-ai`
3. **Search existing issues**: [GitHub Issues](https://github.com/abyss-app-dev/abyss/issues)
4. **Ask for help**: [Discord Community](https://discord.gg/abyss)

## Next Steps

Now that Abyss is installed:

1. **[Quick Start Guide](/getting-started/quick-start)** - Take your first steps
2. **[Chat Interface](/features/chat)** - Start your first AI conversation
3. **[Workspaces](/advanced/workspaces)** - Organize your projects

---

*Ready to accelerate your productivity? Let's get started!* 