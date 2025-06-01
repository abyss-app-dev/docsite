# Common Issues

Solutions to frequently encountered problems with Abyss.

## :material-alert-circle: Installation Issues

### Python Version Compatibility

!!! error "Python Version Error"
    **Problem**: `ERROR: Abyss requires Python 3.8 or higher`
    
    **Solution**:
    ```bash
    # Check your Python version
    python --version
    
    # Install Python 3.8+ using homebrew (macOS)
    brew install python@3.11
    
    # Or download from python.org
    ```

### Permission Errors

!!! error "Permission Denied"
    **Problem**: `ERROR: Permission denied when installing packages`
    
    **Solution**:
    ```bash
    # Use virtual environment (recommended)
    python -m venv venv
    source venv/bin/activate
    pip install abyss-ai
    
    # Or install with --user flag
    pip install --user abyss-ai
    ```

## :material-api: API Issues

### Authentication Failures

!!! error "Authentication Error"
    **Problem**: `401 Unauthorized: Invalid API key`
    
    **Solutions**:
    
    1. **Check API Key**:
    ```bash
    # Verify your API key is set
    echo $ABYSS_API_KEY
    ```
    
    2. **Regenerate Key**:
    - Go to [Abyss Dashboard](https://dashboard.abyss.ai)
    - Navigate to API Keys section
    - Generate new key and update environment

### Rate Limiting

!!! warning "Rate Limit Exceeded"
    **Problem**: `429 Too Many Requests`
    
    **Solutions**:
    
    - **Wait and Retry**: Most limits reset within 1 minute
    - **Use Exponential Backoff**:
    ```python
    import time
    import random
    
    def retry_with_backoff(func, max_retries=3):
        for attempt in range(max_retries):
            try:
                return func()
            except RateLimitError:
                if attempt == max_retries - 1:
                    raise
                wait_time = (2 ** attempt) + random.uniform(0, 1)
                time.sleep(wait_time)
    ```

## :material-memory: Performance Issues

### Slow Response Times

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| All requests slow | Internet connection | Check network speed |
| Large file uploads timeout | File size limit | Split into smaller chunks |
| Complex queries slow | Model choice | Use faster model (GPT-3.5) |
| Local model slow | Hardware limitations | Enable GPU acceleration |

### Memory Issues

!!! error "Out of Memory"
    **Problem**: Process killed due to memory usage
    
    **Solutions**:
    
    1. **Reduce Batch Size**:
    ```python
    # Instead of processing all at once
    results = []
    for chunk in chunks(data, batch_size=10):
        results.extend(client.process(chunk))
    ```
    
    2. **Use Streaming**:
    ```python
    # Stream responses for large outputs
    for chunk in client.chat_stream(prompt):
        process_chunk(chunk)
    ```

## :material-network: Network Issues

### Connection Timeouts

!!! error "Connection Timeout"
    **Problem**: Requests timing out after 30 seconds
    
    **Solutions**:
    
    1. **Increase Timeout**:
    ```python
    client = abyss.Client(timeout=120)  # 2 minutes
    ```
    
    2. **Check Firewall/Proxy**:
    ```bash
    # Test connection
    curl -I https://api.abyss.ai/v1/health
    ```

### SSL Certificate Errors

!!! error "SSL Certificate Error"
    **Problem**: `SSL: CERTIFICATE_VERIFY_FAILED`
    
    **Solutions**:
    
    1. **Update Certificates**:
    ```bash
    # macOS
    /Applications/Python\ 3.11/Install\ Certificates.command
    
    # Ubuntu/Debian
    sudo apt-get update && sudo apt-get install ca-certificates
    ```

## :material-file-document: File Issues

### Upload Failures

!!! error "File Upload Failed"
    **Problem**: Cannot upload files to chat interface
    
    **Check List**:
    
    - [ ] File size under 100MB
    - [ ] Supported file format (PDF, TXT, CSV, JSON, etc.)
    - [ ] Valid file permissions
    - [ ] Stable internet connection

### Encoding Issues

!!! error "Unicode Decode Error"
    **Problem**: `UnicodeDecodeError` when processing files
    
    **Solutions**:
    
    ```python
    # Specify encoding explicitly
    with open('file.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Or detect encoding
    import chardet
    with open('file.txt', 'rb') as f:
        encoding = chardet.detect(f.read())['encoding']
    ```

## :material-help: Getting Additional Help

If these solutions don't resolve your issue:

1. **Search Documentation**: Use the search function above
2. **Check GitHub Issues**: [abyss-app-dev/docsite/issues](https://github.com/abyss-app-dev/docsite/issues)
3. **Community Discord**: Join our support channel
4. **Contact Support**: [Email our team](mailto:support@abyss.ai)

### When Reporting Issues

Please include:

- [ ] Abyss version (`abyss --version`)
- [ ] Operating system and version
- [ ] Python version
- [ ] Complete error message
- [ ] Steps to reproduce
- [ ] Expected vs actual behavior

!!! tip "Debug Mode"
    Enable verbose logging for detailed error information:
    ```bash
    abyss --verbose [command]
    ``` 