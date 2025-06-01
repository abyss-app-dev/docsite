# Installation

This guide covers all the ways to install and set up Abyss on your system.

## System Requirements

### Minimum Requirements

- **OS**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space
- **Python**: 3.8 or higher
- **Internet**: Required for initial setup and cloud models

### Recommended Requirements

- **OS**: Latest stable version
- **RAM**: 16GB or more for local AI models
- **Storage**: 10GB+ for full offline capabilities
- **GPU**: NVIDIA GPU with CUDA support (optional, for acceleration)

## Installation Methods

### Method 1: pip (Recommended)

The easiest way to install Abyss is using pip:

```bash
pip install abyss-ai
```

For the latest development version:

```bash
pip install git+https://github.com/abyss-ai/abyss.git
```

### Method 2: conda

If you prefer conda package management:

```bash
conda install -c abyss abyss-ai
```

### Method 3: Docker

Run Abyss in a containerized environment:

```bash
docker run -it abyss/abyss:latest
```

For persistent data:

```bash
docker run -it -v $(pwd):/workspace abyss/abyss:latest
```

### Method 4: From Source

For developers and advanced users:

```bash
git clone https://github.com/abyss-ai/abyss.git
cd abyss
pip install -e .
```

## Platform-Specific Instructions

### Windows

1. **Install Python** from [python.org](https://python.org) or Microsoft Store
2. **Open Command Prompt** or PowerShell as Administrator
3. **Install Abyss**:
   ```cmd
   pip install abyss-ai
   ```

#### Windows Subsystem for Linux (WSL)

For better performance on Windows, consider using WSL2:

```bash
# In WSL2 terminal
pip3 install abyss-ai
```

### macOS

1. **Install Python** using Homebrew:
   ```bash
   brew install python
   ```

2. **Install Abyss**:
   ```bash
   pip3 install abyss-ai
   ```

#### Apple Silicon (M1/M2) Macs

For optimal performance on Apple Silicon:

```bash
# Use conda-forge for better ARM64 support
conda install -c conda-forge abyss-ai
```

### Linux

#### Ubuntu/Debian

```bash
# Update package list
sudo apt update

# Install Python and pip
sudo apt install python3 python3-pip

# Install Abyss
pip3 install abyss-ai
```

#### CentOS/RHEL/Fedora

```bash
# Install Python and pip
sudo dnf install python3 python3-pip

# Install Abyss
pip3 install abyss-ai
```

#### Arch Linux

```bash
# Install from AUR
yay -S abyss-ai

# Or using pip
pip install abyss-ai
```

## GPU Acceleration (Optional)

For faster AI model inference, install GPU support:

### NVIDIA GPUs

```bash
# Install CUDA toolkit first
# Then install GPU-enabled version
pip install abyss-ai[gpu]
```

### Apple Metal (M1/M2 Macs)

```bash
# Metal acceleration comes pre-configured
pip install abyss-ai[metal]
```

## Post-Installation Setup

### 1. Verify Installation

```bash
abyss --version
```

### 2. Initialize Workspace

```bash
abyss init
```

This creates:
- Configuration directory (`~/.abyss/`)
- Default workspace
- Downloads core AI models

### 3. Authentication (Optional)

For cloud features, authenticate with your account:

```bash
abyss auth login
```

### 4. Install Plugins

Install additional plugins based on your needs:

```bash
# Development tools
abyss plugin install code-completion

# Content creation
abyss plugin install writing-assistant

# Data analysis
abyss plugin install data-analyzer
```

## Configuration

### Basic Configuration

Edit your config file at `~/.abyss/config.yml`:

```yaml
# Core settings
default_model: "gpt-4"
temperature: 0.7
max_tokens: 2048

# Plugin settings
plugins:
  enabled:
    - code-completion
    - writing-assistant
  
# Model preferences
models:
  local_only: false
  gpu_acceleration: true

# Privacy settings
telemetry: false
cloud_sync: true
```

### Advanced Configuration

For power users, additional settings:

```yaml
# Performance tuning
performance:
  cache_size: "2GB"
  max_workers: 4
  async_processing: true

# Custom model endpoints
endpoints:
  custom_api: "https://api.example.com/v1"
  
# Security settings
security:
  require_auth: true
  session_timeout: 3600
```

## Troubleshooting

### Common Issues

#### Permission Errors

On Unix systems, use `--user` flag:

```bash
pip install --user abyss-ai
```

#### Python Version Issues

Ensure you're using Python 3.8+:

```bash
python --version
# or
python3 --version
```

#### Module Not Found

Add Python packages to PATH:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

#### GPU Not Detected

Verify CUDA installation:

```bash
nvidia-smi
nvcc --version
```

### Getting Help

If you encounter issues:

1. **Check logs**: `abyss logs --verbose`
2. **Update Abyss**: `pip install --upgrade abyss-ai`
3. **Reset config**: `abyss reset --config`
4. **Report bugs**: [GitHub Issues](https://github.com/abyss-ai/abyss/issues)

## Uninstallation

To remove Abyss:

```bash
# Remove package
pip uninstall abyss-ai

# Remove configuration (optional)
rm -rf ~/.abyss/
```

---

!!! tip "Next Steps"
    Now that Abyss is installed, check out the [Getting Started guide](getting-started.md) to begin your AI-powered journey! 