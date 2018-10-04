# Alert.css

### code

{% code-tabs %}
{% code-tabs-item title="/src/components/UI/Alert/Alert.css" %}
```css
.Alert {
    background-color: #fff;
    margin: 0 auto;
    width: 60%;
    position: relative;
    top: 36%;
    font-family: 'Roboto', sans-serif;
    border-radius: 5px;
    text-align: center;
}

.Alert p {
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0 35px 40px 35px;
    margin: 0 auto;
    width: 75%;
}

.Alert h2 {
    color: #fff;
    text-transform: capitalize;
    padding: 25px 0 0 0;
    font-size: 2rem;
}

.Alert img {
    float: right;
    cursor: pointer;
}

.success {
    background-color: #4caf50;
}

.failed {
    background-color: #e53935;
}

.warning {
    background-color: #d84315;
}

@media (max-width: 900px) {
    .Alert {
        width: 80%;
    }

    .Alert p {
        margin-bottom: 1em;
    }

    .Alert button {
        margin-bottom: 2.5em;
    }
}
```
{% endcode-tabs-item %}
{% endcode-tabs %}
