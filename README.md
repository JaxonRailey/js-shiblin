# Shiblin.js Documentation

A lightweight JavaScript library that extends DOM prototypes to provide a more concise and chainable API for DOM manipulation, element selection, storage management, and HTTP requests.

## Table of Contents

- [Installation](#installation)
- [Global Selection Utilities](#global-selection-utilities)
- [DOM Manipulation](#dom-manipulation)
- [NodeList Operations](#nodelist-operations)
- [Element Creation](#element-creation)
- [Storage Management](#storage-management)
- [HTTP Requests](#http-requests)
- [AI Agent Guidelines](#ai-agent-guidelines)
- [Complete Examples](#complete-examples)

## Installation

Simply include the library in your HTML file:

```html
<script src="assets/shiblin.js"></script>
```

## DOM Manipulation

### Class Management

#### `addClass(className)`
Adds a CSS class to an element.

**Vanilla JavaScript:**
```javascript
const element = document.getElementById('myElement');
element.classList.add('active');
```

**Shiblin:**
```javascript
const element = document.getElementById('myElement');
element.addClass('active');
```

#### `removeClass(className)`
Removes a CSS class from an element.

**Vanilla JavaScript:**
```javascript
const element = document.getElementById('myElement');
element.classList.remove('active');
```

**Shiblin:**
```javascript
const element = document.getElementById('myElement');
element.removeClass('active');
```

#### `toggleClass(className)`
Toggles a CSS class on an element.

**Vanilla JavaScript:**
```javascript
const element = document.getElementById('myElement');
element.classList.toggle('active');
```

**Shiblin:**
```javascript
const element = document.getElementById('myElement');
element.toggleClass('active');
```

### Content Management

#### `html([content])`
Gets or sets the HTML content of an element.

**Vanilla JavaScript:**
```javascript
// Get
const content = element.innerHTML;
// Set
element.innerHTML = '<p>New content</p>';
```

**Shiblin:**
```javascript
// Get
const content = element.html();
// Set
element.html('<p>New content</p>');
```

#### `text([content])`
Gets or sets the text content of an element.

**Vanilla JavaScript:**
```javascript
// Get
const text = element.textContent;
// Set
element.textContent = 'New text';
```

**Shiblin:**
```javascript
// Get
const text = element.text();
// Set
element.text('New text');
```

#### `class([className])`
Gets or sets the class attribute of an element.

**Vanilla JavaScript:**
```javascript
// Get
const classes = element.className;
// Set
element.className = 'class1 class2';
```

**Shiblin:**
```javascript
// Get
const classes = element.class();
// Set
element.class('class1 class2');
```

### Attribute Management

#### `attr(name, [value])`
Gets or sets an attribute value.

**Vanilla JavaScript:**
```javascript
// Get
const value = element.getAttribute('data-id');
// Set
element.setAttribute('data-id', '123');
```

**Shiblin:**
```javascript
// Get
const value = element.attr('data-id');
// Set
element.attr('data-id', '123');
```

#### `removeAttr(name)`
Removes an attribute from an element.

**Vanilla JavaScript:**
```javascript
element.removeAttribute('data-id');
```

**Shiblin:**
```javascript
element.removeAttr('data-id');
```

#### `toggleAttr(name, value)`
Toggles an attribute on an element.

**Vanilla JavaScript:**
```javascript
if (element.hasAttribute('data-active')) {
    element.removeAttribute('data-active');
} else {
    element.setAttribute('data-active', 'true');
}
```

**Shiblin:**
```javascript
element.toggleAttr('data-active', 'true');
```

### Element Selection

#### `find(selector)`
Finds the first element matching a selector within the current element.

**Vanilla JavaScript:**
```javascript
const child = element.querySelector('.child');
```

**Shiblin:**
```javascript
const child = element.find('.child');
```

### Event Handling

#### `event(type, callback)`
Adds an event listener to an element.

**Vanilla JavaScript:**
```javascript
element.addEventListener('click', handleClick);
```

**Shiblin:**
```javascript
element.event('click', handleClick);
```

## NodeList Operations

All DOM manipulation methods are also available on NodeList objects, allowing you to perform operations on multiple elements at once.

### Class Operations on NodeList

```javascript
// Add class to all elements
document.querySelectorAll('.items').addClass('active');

// Remove class from all elements
document.querySelectorAll('.items').removeClass('active');

// Toggle class on all elements
document.querySelectorAll('.items').toggleClass('active');
```

### Content Operations on NodeList

```javascript
// Set HTML content for all elements
document.querySelectorAll('.items').html('<span>Updated</span>');

// Set text content for all elements
document.querySelectorAll('.items').text('Updated text');

// Get content from first element
const content = document.querySelectorAll('.items').html();
```

### Attribute Operations on NodeList

```javascript
// Set attribute on all elements
document.querySelectorAll('.items').attr('data-status', 'active');

// Remove attribute from all elements
document.querySelectorAll('.items').removeAttr('data-status');

// Toggle attribute on all elements
document.querySelectorAll('.items').toggleAttr('data-active', 'true');
```

### Event Handling on NodeList

```javascript
// Add event listener to all elements
document.querySelectorAll('.items').event('click', handleClick);
```

### Element Selection in NodeList

#### `find(selector)`
Finds elements matching a selector within each element of the NodeList.

**Vanilla JavaScript:**
```javascript
const results = [];
document.querySelectorAll('.parents').forEach(parent => {
    const child = parent.querySelector('.child');
    if (child) results.push(child);
});
```

**Shiblin:**
```javascript
const results = document.querySelectorAll('.parents').find('.child');
```

## Global Selection Utilities

Shiblin.js provides two essential global utility functions for element selection that work anywhere in your code without requiring an element context.

### `$one(selector)`
Selects the first element matching a selector from the entire document.

**Parameters:**
- `selector` (string): CSS selector to match

**Returns:** Node | null - The first matching element or null if not found

**Vanilla JavaScript:**
```javascript
const element = document.querySelector('.my-class');
const elementById = document.getElementById('myId');
const elementByTag = document.querySelector('div');
```

**Shiblin:**
```javascript
const element = $one('.my-class');
const elementById = $one('#myId');
const elementByTag = $one('div');
```

**Common Use Cases:**
```javascript
// Get form elements
const form = $one('#login-form');
const submitBtn = $one('[type="submit"]');
const errorDiv = $one('.error-message');

// Get navigation elements
const nav = $one('nav');
const activeLink = $one('.nav-link.active');

// Get content containers
const main = $one('main');
const sidebar = $one('.sidebar');
```

### `$all(selector)`
Selects all elements matching a selector from the entire document.

**Parameters:**
- `selector` (string): CSS selector to match

**Returns:** NodeList - A NodeList of all matching elements

**Vanilla JavaScript:**
```javascript
const elements = document.querySelectorAll('.item');
const buttons = document.querySelectorAll('button');
const inputs = document.querySelectorAll('input[type="text"]');
```

**Shiblin:**
```javascript
const elements = $all('.item');
const buttons = $all('button');
const inputs = $all('input[type="text"]');
```

**Common Use Cases:**
```javascript
// Get all items in a list
const todoItems = $all('.todo-item');
todoItems.addClass('loaded');

// Get all form inputs
const formInputs = $all('input, textarea, select');
formInputs.event('focus', handleFocus);

// Get all navigation links
const navLinks = $all('.nav-link');
navLinks.event('click', handleNavigation);

// Get all cards for batch operations
const cards = $all('.card');
cards.addClass('fade-in').html('<div class="content">Loaded</div>');
```

**Important Notes:**
- `$one()` is equivalent to `document.querySelector()`
- `$all()` is equivalent to `document.querySelectorAll()`
- Both functions work globally and don't require an element context
- `$all()` returns a NodeList that supports all shiblin.js methods for batch operations
- Use `$one()` when you expect a single element, `$all()` when you expect multiple elements

## Element Creation

### `$create(tagName, [attributes], [children])`
Creates a new HTML element with optional attributes and children. This is the primary utility for programmatically building DOM structures.

**Parameters:**
- `tagName` (string): The HTML tag name (e.g., 'div', 'span', 'button')
- `attributes` (object, optional): Key-value pairs of attributes to set on the element
- `children` (Array|string, optional): Child elements to append or HTML string for innerHTML

**Returns:** HTMLElement - The created element

**Basic Usage:**
```javascript
// Simple element
const div = $create('div');

// Element with attributes
const button = $create('button', {
    class: 'btn btn-primary',
    'data-id': '123',
    type: 'submit',
    disabled: false
});

// Element with text content
const heading = $create('h1', { class: 'title' }, 'Hello World');

// Element with HTML content
const content = $create('div', { class: 'content' }, '<p>Rich HTML content</p>');
```

**Advanced Usage with Children:**
```javascript
// Complex nested structure
const card = $create('div', { class: 'card' }, [
    $create('div', { class: 'card-header' }, [
        $create('h3', { class: 'card-title' }, 'Card Title'),
        $create('button', { class: 'close-btn' }, '×')
    ]),
    $create('div', { class: 'card-body' }, [
        $create('p', {}, 'Card content goes here'),
        $create('button', { class: 'btn btn-primary' }, 'Action')
    ])
]);

// Append to document
document.body.appendChild(card);
```

**Special Attribute Handling:**
```javascript
// innerHTML attribute is handled specially
const element = $create('div', {
    innerHTML: '<p>Content with <strong>HTML</strong></p>',
    class: 'content-wrapper'
});

// Regular attributes work normally
const form = $create('form', {
    action: '/submit',
    method: 'POST',
    class: 'my-form'
});
```

**Best Practices:**
- Use `$create()` for building complex DOM structures programmatically
- Combine with `$one()` and `$all()` for efficient DOM manipulation
- Chain shiblin.js methods on created elements for immediate configuration
- Use the children array for complex nested structures

## Storage Management

The `storage` object provides a simple interface for localStorage operations with automatic JSON serialization.

### Basic Operations

```javascript
// Store data
storage.set('user', { name: 'John', age: 30 });

// Retrieve data
const user = storage.get('user');

// Remove data
storage.remove('user');

// Clear all data
storage.clear();
```

## HTTP Requests

The `request` object provides a comprehensive interface for making HTTP requests with built-in JSON handling and global configuration.

### Basic Usage

```javascript
// GET request
const data = await request.async({
    url: '/api/users',
    method: 'GET'
});

// POST request
const result = await request.async({
    url: '/api/users',
    method: 'POST',
    data: { name: 'John', email: 'john@example.com' }
});
```

### Global Configuration

```javascript
// Set global headers
request.setGlobalHeaders({
    'Authorization': 'Bearer token123',
    'Content-Type': 'application/json'
});

// Set request hooks
request.beforeRequest(() => {
    console.log('Starting request...');
});

request.afterRequest(() => {
    console.log('Request completed');
});
```

### Different Response Types

```javascript
// JSON response (default)
const jsonData = await request.async({
    url: '/api/data',
    responseType: 'json'
});

// Text response
const textData = await request.async({
    url: '/api/text',
    responseType: 'text'
});

// Blob response
const blobData = await request.async({
    url: '/api/file',
    responseType: 'blob'
});
```

## AI Agent Guidelines

### Pattern Recognition

When working with shiblin.js, AI agents should recognize these key patterns:

1. **Method Chaining**: Most methods return the element/NodeList for chaining
2. **Dual Behavior**: Methods like `html()`, `text()`, `attr()` can act as getters or setters
3. **Consistent API**: Similar method signatures across Node, NodeList, and Document prototypes
4. **Automatic JSON Handling**: Storage and HTTP modules handle JSON serialization automatically

### Best Practices for AI Agents

1. **Prefer Chaining**: Use method chaining to create more readable code
   ```javascript
   // Good
   $one('.button')
       .addClass('active')
       .text('Click me')
       .event('click', handleClick);

   // Instead of
   const button = $one('.button');
   button.addClass('active');
   button.text('Click me');
   button.event('click', handleClick);
   ```

2. **Use Appropriate Selection Methods**:
   - `$one()` for single elements
   - `$all()` for multiple elements
   - `.find()` for scoped selection within elements

3. **Leverage NodeList Operations**: When working with multiple elements, use NodeList methods instead of loops
   ```javascript
   // Good
   $all('.items').addClass('processed').text('Updated');

   // Instead of
   $all('.items').forEach(item => {
       item.addClass('processed');
       item.text('Updated');
   });
   ```

4. **Handle Storage with Care**: Always use the storage utility for consistency
   ```javascript
   // Good
   storage.set('preferences', { theme: 'dark', lang: 'en' });
   const prefs = storage.get('preferences');

   // Instead of
   localStorage.setItem('preferences', JSON.stringify(data));
   const prefs = JSON.parse(localStorage.getItem('preferences'));
   ```

5. **Use Request Configuration**: Leverage the request object's configuration options
   ```javascript
   // Good
   const user = await request.async({
       url: '/api/users/123',
       method: 'GET',
       responseType: 'json'
   });

   // Instead of
   const response = await fetch('/api/users/123');
   const user = await response.json();
   ```

### Error Handling

AI agents should implement proper error handling when using shiblin.js:

```javascript
try {
    const data = await request.async({
        url: '/api/problematic-endpoint',
        method: 'GET'
    });
    console.log('Success:', data);
} catch (error) {
    console.error('Request failed:', error.message);
}
```

### Performance Considerations

1. **Batch Operations**: Use NodeList methods for multiple elements instead of individual operations
2. **Caching**: Cache frequently used selectors
3. **Event Delegation**: Use event delegation for dynamic content
4. **Storage Limits**: Be aware of localStorage size limits (typically 5-10MB)

## Complete Examples

### Todo Application

```javascript
// Create todo app structure
const app = $create('div', { class: 'todo-app' }, [
    $create('h1', {}, 'My Todo List'),
    $create('div', { class: 'input-container' }, [
        $create('input', {
            type: 'text',
            placeholder: 'Add a new todo...',
            class: 'todo-input'
        }),
        $create('button', { class: 'add-btn' }, 'Add')
    ]),
    $create('ul', { class: 'todo-list' })
]);

document.body.appendChild(app);

// Add functionality
const input = $one('.todo-input');
const addBtn = $one('.add-btn');
const todoList = $one('.todo-list');

// Add new todo
const addTodo = () => {
    const text = input.attr('value');
    if (!text) return;

    const todoItem = $create('li', { class: 'todo-item' }, [
        $create('span', { class: 'todo-text' }, text),
        $create('button', { class: 'delete-btn' }, 'Delete')
    ]);

    todoList.appendChild(todoItem);
    input.attr('value', '');
};

// Event listeners
addBtn.event('click', addTodo);
input.event('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// Delete functionality
todoList.event('click', (e) => {
    if (e.target.class('delete-btn')) {
        e.target.parentElement.remove();
    }
});
```

### Data Fetching and Display

```javascript
// Fetch and display user data
const fetchUsers = async () => {
    try {
        const users = await request.async({
            url: '/api/users',
            method: 'GET'
        });

        const container = $one('.users-container');
        container.html(''); // Clear existing content

        users.forEach(user => {
            const userCard = $create('div', { class: 'user-card' }, [
                $create('h3', {}, user.name),
                $create('p', {}, user.email),
                $create('p', {}, `Age: ${user.age}`)
            ]);

            container.appendChild(userCard);
        });

    } catch (error) {
        console.error('Failed to fetch users:', error);
        $one('.error-message').text('Failed to load users');
    }
};

// Initialize
document.event('DOMContentLoaded', fetchUsers);
```

### Theme Toggle with Storage

```javascript
// Theme management
const themeToggle = $one('.theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = storage.get('theme') || 'light';
body.addClass(savedTheme);

// Toggle theme
const toggleTheme = () => {
    const currentTheme = body.class() === 'dark' ? 'light' : 'dark';
    body.class(currentTheme);
    storage.set('theme', currentTheme);
};

themeToggle.event('click', toggleTheme);
```

This documentation provides comprehensive coverage of shiblin.js functionality with clear examples showing both vanilla JavaScript and shiblin.js approaches, making it easy for developers and AI agents to understand and utilize the library effectively.
