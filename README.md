# password-generator
A simple password generator that allows users to customize the length and character types (uppercase, lowercase, numbers, and symbols) of their generated passwords.

#Preview ::  ---

![password](https://github.com/user-attachments/assets/98912719-c6c6-49cc-80b3-6f7fa089a58e)

## Installation

To use the Password Generator, simply open the `index.html` file in a web browser. No additional installation is required.

## Usage

1. Specify the desired password length in the "Password Length" input field.
2. Select the character types to include in the password by checking the corresponding checkboxes.
3. Click the "Generate Password" button to generate a new password.
4. The generated password will be displayed in the "Generated password" input field.
5. Click the "Copy" button to copy the generated password to the clipboard.

Here's an example of how the password generator can be used:

```html
<div id="gen-password">
    <div id="align-gen-psd">
        <input type="text" placeholder="Generated password" readonly id="generated-password">
        <button id="copy">copy</button>
    </div>
    <div class="align-gen-psd">
        <input type="number" name="password-length" placeholder="Password Length" id="char-length">
    </div>
    <div class="include-checkbox">
        <label for="upper-case">UpperCase Include </label>
        <input type="checkbox" checked name="upper-case" id="upper-case" class="checkBoxes">
    </div>
    <!-- Additional checkboxes for other character types -->
    <div id="align-gen-btn">
        <button id="generate-btn">Genrate Password</button>
    </div>
</div>
```

## Contributing

Contributions to the Password Generator are welcome. If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue on the project's GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

## Testing

To test the Password Generator, you can open the `index.html` file in a web browser and interact with the various input fields and buttons. Ensure that the generated passwords meet your requirements and that the "Copy" button correctly copies the password to the clipboard.
