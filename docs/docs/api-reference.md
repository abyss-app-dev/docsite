# API Reference

Complete API documentation for developers building with Abyss.

## Overview

The Abyss API provides programmatic access to all AI capabilities, allowing you to integrate advanced AI features into your applications, scripts, and workflows.

## Authentication

### API Keys

Get your API key from the [Abyss Dashboard](https://dashboard.abyss.ai):

```python
import abyss

# Initialize client with API key
client = abyss.Client(api_key="your-api-key-here")

# Or use environment variable
# export ABYSS_API_KEY="your-api-key-here"
client = abyss.Client()
```

### Authentication Headers

For direct HTTP requests:

```bash
curl -H "Authorization: Bearer your-api-key-here" \
     -H "Content-Type: application/json" \
     https://api.abyss.ai/v1/chat
```

---

## Core Client

### Client Initialization

```python
import abyss

# Basic initialization
client = abyss.Client(api_key="your-key")

# Advanced configuration
client = abyss.Client(
    api_key="your-key",
    base_url="https://api.abyss.ai/v1",
    timeout=30,
    max_retries=3,
    model="gpt-4"
)
```

#### Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `api_key` | str | None | Your Abyss API key |
| `base_url` | str | `https://api.abyss.ai/v1` | API base URL |
| `timeout` | int | 30 | Request timeout in seconds |
| `max_retries` | int | 3 | Maximum retry attempts |
| `model` | str | "gpt-4" | Default AI model to use |

---

## Chat API

### Simple Chat

```python
# Basic chat completion
response = client.chat("Hello, can you help me with Python?")
print(response.content)
```

### Advanced Chat

```python
# Multi-turn conversation with options
conversation = client.chat_conversation()

response1 = conversation.send(
    message="Write a Python function to calculate fibonacci numbers",
    model="gpt-4",
    temperature=0.7,
    max_tokens=1000
)

response2 = conversation.send(
    message="Now add error handling and type hints",
    temperature=0.5
)

# Get full conversation history
history = conversation.history
```

#### ChatResponse Object

```python
class ChatResponse:
    content: str           # Response text
    model: str            # Model used
    tokens_used: int      # Tokens consumed
    finish_reason: str    # Why generation stopped
    timestamp: datetime   # Response timestamp
    metadata: dict        # Additional information
```

### Streaming Chat

```python
# Stream responses for real-time applications
for chunk in client.chat_stream("Explain quantum computing"):
    print(chunk.content, end="", flush=True)
```

---

## Code Generation API

### Generate Functions

```python
# Generate a specific function
code = client.generate.function(
    name="fibonacci",
    language="python",
    description="Calculate nth fibonacci number recursively",
    parameters=["n: int"],
    return_type="int",
    include_tests=True
)

print(code.implementation)
print(code.tests)
```

### Generate Classes

```python
# Generate class with methods
user_class = client.generate.class_definition(
    name="User",
    language="python",
    attributes=["name: str", "email: str", "age: int"],
    methods=["validate_email", "is_adult"],
    framework="pydantic"
)
```

### Generate from Natural Language

```python
# Generate code from description
api_code = client.generate.from_prompt(
    prompt="Create a FastAPI endpoint for user registration with email validation",
    language="python",
    framework="fastapi",
    include_dependencies=True
)
```

#### CodeResponse Object

```python
class CodeResponse:
    implementation: str    # Generated code
    tests: str            # Test code (if requested)
    dependencies: List[str] # Required packages
    documentation: str    # Code documentation
    language: str         # Programming language
    framework: str        # Framework used
```

---

## Content Creation API

### Write Blog Posts

```python
# Generate blog content
blog_post = client.write.blog_post(
    topic="The Future of AI in Healthcare",
    length=1500,
    style="professional",
    target_audience="healthcare professionals",
    include_outline=True,
    seo_keywords=["AI", "healthcare", "medical technology"]
)

print(blog_post.title)
print(blog_post.outline)
print(blog_post.content)
```

### Technical Documentation

```python
# Generate documentation from code
docs = client.write.documentation(
    codebase_path="./src",
    format="markdown",
    include_api_reference=True,
    include_examples=True
)
```

### Social Media Content

```python
# Generate social media posts
tweets = client.write.social_media(
    platform="twitter",
    topic="productivity tips for developers",
    count=5,
    style="engaging",
    include_hashtags=True
)

for tweet in tweets:
    print(f"{tweet.content} {' '.join(tweet.hashtags)}")
```

#### ContentResponse Object

```python
class ContentResponse:
    title: str            # Content title
    content: str          # Main content
    outline: List[str]    # Content outline
    metadata: dict        # SEO and other metadata
    word_count: int       # Content length
    reading_time: int     # Estimated reading time
```

---

## Data Analysis API

### Analyze Files

```python
# Analyze CSV data
analysis = client.analyze.file(
    file_path="sales_data.csv",
    questions=[
        "What are the top selling products?",
        "What is the seasonal trend?",
        "Are there any anomalies in the data?"
    ]
)

print(analysis.summary)
print(analysis.insights)
print(analysis.recommendations)
```

### Statistical Analysis

```python
# Perform statistical analysis
stats = client.analyze.statistics(
    data=df,  # pandas DataFrame
    variables=["revenue", "customers", "conversion_rate"],
    analysis_type="descriptive"
)

print(stats.descriptive_stats)
print(stats.correlations)
```

### Generate Visualizations

```python
# Create data visualizations
chart = client.visualize.create(
    data=df,
    chart_type="line",
    x_axis="date",
    y_axis="revenue",
    title="Revenue Over Time",
    style="professional"
)

chart.save("revenue_chart.png")
```

#### AnalysisResponse Object

```python
class AnalysisResponse:
    summary: str              # Executive summary
    insights: List[str]       # Key insights
    recommendations: List[str] # Actionable recommendations
    statistics: dict          # Statistical measures
    visualizations: List[str] # Generated chart URLs
    raw_data: dict           # Processed data
```

---

## Model Management API

### List Available Models

```python
# Get available models
models = client.models.list()

for model in models:
    print(f"{model.name}: {model.description}")
    print(f"Context: {model.context_length} tokens")
    print(f"Cost: ${model.cost_per_token}")
```

### Model Information

```python
# Get detailed model info
gpt4_info = client.models.get("gpt-4")
print(gpt4_info.capabilities)
print(gpt4_info.limitations)
```

### Download Local Models

```python
# Download model for local inference
download_status = client.models.download("llama-2-7b")
print(f"Download progress: {download_status.progress}%")
```

---

## Plugin API

### List Plugins

```python
# Get available plugins
plugins = client.plugins.list()

for plugin in plugins:
    print(f"{plugin.name}: {plugin.description}")
```

### Install Plugins

```python
# Install a plugin
installation = client.plugins.install("code-completion")
print(f"Status: {installation.status}")
```

### Use Plugin Functions

```python
# Use plugin functionality
code_completion = client.plugins.use("code-completion")
suggestions = code_completion.complete(
    code="def fibonacci(n):",
    cursor_position=15,
    language="python"
)
```

---

## Workspace API

### Create Workspace

```python
# Create new workspace
workspace = client.workspaces.create(
    name="my-project",
    description="AI-powered web development",
    template="web-development"
)
```

### Workspace Operations

```python
# List workspaces
workspaces = client.workspaces.list()

# Switch workspace
client.workspaces.use("my-project")

# Get current workspace
current = client.workspaces.current()

# Update workspace settings
client.workspaces.update(
    workspace_id=workspace.id,
    settings={"default_model": "claude-3"}
)
```

---

## Error Handling

### Exception Types

```python
import abyss

try:
    response = client.chat("Hello")
except abyss.APIError as e:
    print(f"API Error: {e.message}")
    print(f"Status Code: {e.status_code}")
except abyss.AuthenticationError as e:
    print(f"Authentication failed: {e.message}")
except abyss.RateLimitError as e:
    print(f"Rate limit exceeded: {e.message}")
    print(f"Retry after: {e.retry_after} seconds")
except abyss.ModelNotFoundError as e:
    print(f"Model not available: {e.message}")
```

### Exception Hierarchy

```
AbyssError
├── APIError
├── AuthenticationError
├── RateLimitError
├── ModelNotFoundError
├── ValidationError
└── TimeoutError
```

---

## HTTP API Endpoints

### Base URL

```
https://api.abyss.ai/v1
```

### Chat Endpoints

```bash
# Create chat completion
POST /chat/completions
Content-Type: application/json
Authorization: Bearer your-api-key

{
  "model": "gpt-4",
  "messages": [
    {"role": "user", "content": "Hello!"}
  ],
  "temperature": 0.7,
  "max_tokens": 1000
}
```

### Generation Endpoints

```bash
# Generate code
POST /generate/code
{
  "prompt": "Create a REST API endpoint",
  "language": "python",
  "framework": "fastapi"
}

# Generate content
POST /generate/content
{
  "type": "blog_post",
  "topic": "AI in Healthcare",
  "length": 1500
}
```

### Analysis Endpoints

```bash
# Analyze file
POST /analyze/file
Content-Type: multipart/form-data

file: [uploaded file]
questions: ["What are the trends?"]
```

---

## Rate Limits

### Default Limits

| Tier | Requests/minute | Tokens/day | Concurrent |
|------|----------------|------------|------------|
| Free | 60 | 100,000 | 1 |
| Pro | 3,000 | 1,000,000 | 5 |
| Enterprise | Custom | Custom | Custom |

### Handling Rate Limits

```python
import time
from abyss import RateLimitError

def retry_with_backoff(func, max_retries=3):
    for attempt in range(max_retries):
        try:
            return func()
        except RateLimitError as e:
            if attempt == max_retries - 1:
                raise
            time.sleep(e.retry_after)
```

---

## Best Practices

### Error Handling

```python
# Robust error handling
def safe_api_call():
    try:
        return client.chat("Hello")
    except abyss.RateLimitError as e:
        # Implement exponential backoff
        time.sleep(e.retry_after)
        return safe_api_call()
    except abyss.APIError as e:
        # Log error and provide fallback
        logger.error(f"API error: {e}")
        return fallback_response()
```

### Efficient Token Usage

```python
# Monitor token usage
response = client.chat("Explain quantum computing")
print(f"Tokens used: {response.tokens_used}")

# Use appropriate models for tasks
light_response = client.chat("Hello", model="gpt-3.5-turbo")
complex_response = client.chat("Explain quantum physics", model="gpt-4")
```

### Async Operations

```python
import asyncio
import abyss

async def main():
    async_client = abyss.AsyncClient(api_key="your-key")
    
    # Concurrent requests
    tasks = [
        async_client.chat("Question 1"),
        async_client.chat("Question 2"),
        async_client.chat("Question 3")
    ]
    
    responses = await asyncio.gather(*tasks)
    return responses

# Run async operations
responses = asyncio.run(main())
```

---

## SDK Examples

### Complete Examples

#### Code Review Assistant

```python
import abyss

def code_review_assistant(file_path):
    client = abyss.Client()
    
    with open(file_path, 'r') as f:
        code = f.read()
    
    review = client.analyze.code(
        code=code,
        language="python",
        focus_areas=["security", "performance", "style"]
    )
    
    return {
        "score": review.score,
        "issues": review.issues,
        "suggestions": review.suggestions
    }

# Usage
review = code_review_assistant("main.py")
print(f"Code quality score: {review['score']}/10")
```

#### Content Pipeline

```python
def content_creation_pipeline(topic, target_audience):
    client = abyss.Client()
    
    # Generate outline
    outline = client.write.outline(
        topic=topic,
        target_audience=target_audience
    )
    
    # Generate full content
    content = client.write.blog_post(
        topic=topic,
        outline=outline.sections,
        length=2000
    )
    
    # SEO optimization
    seo_content = client.optimize.seo(
        content=content.content,
        target_keywords=["AI", "technology"]
    )
    
    return seo_content

# Usage
article = content_creation_pipeline(
    topic="Future of AI",
    target_audience="tech professionals"
)
```

---

!!! info "API Versioning"
    The Abyss API uses semantic versioning. Current version is v1. 
    Breaking changes will increment the major version number.

!!! tip "Need Help?"
    - 📖 Check our [User Guide](user-guide.md) for usage examples
    - 💬 Join our Discord for community support  
    - 📧 Email api-support@abyss.ai for technical questions
    - 🐛 Report issues on [GitHub](https://github.com/abyss-ai/abyss/issues) 