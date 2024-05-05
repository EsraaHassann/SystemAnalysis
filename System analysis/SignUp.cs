using System;
using System.Windows.Forms;
using System_analysis;

namespace System_analysis
{
    public partial class SignUp : Form
    {
        public SignUp()
        {
            InitializeComponent();
        }

        private void buttonSignUp_Click(object sender, EventArgs e)
        {
            // Retrieve user input from textboxes
            string username = textBoxUsername.Text;
            string email = textBoxEmail.Text;
            string password = textBoxPassword.Text;
            string phoneNumber = textBoxPhoneNumber.Text; // Retrieve phone number

            // Validate input
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password) || string.IsNullOrEmpty(phoneNumber))
            {
                MessageBox.Show("Please fill in all fields.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Validate email format
            if (!IsValidEmail(email))
            {
                MessageBox.Show("Please enter a valid email address.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Validate password length (minimum 6 characters)
            if (password.Length < 6)
            {
                MessageBox.Show("Password must be at least 6 characters long.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Validate phone number format
            if (!IsValidPhoneNumber(phoneNumber))
            {
                MessageBox.Show("Please enter a valid phone number (at least 11 digits).", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Create a User object with the entered data
            User user = new User
            {
                Username = username,
                Email = email,
                Password = password,
                PhoneNumber = phoneNumber // Assign phone number
            };

            // Save user to the database
            bool success = Database.RegisterUser(user);

            if (success)
            {
                MessageBox.Show("Sign-up Successful!", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            else
            {
                MessageBox.Show("Failed to register user. Please try again later.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

            // Clear textboxes after sign-up
            textBoxUsername.Clear();
            textBoxEmail.Clear();
            textBoxPassword.Clear();
            textBoxPhoneNumber.Clear(); // Clear phone number textbox
        }

        // Helper method to validate email format using regular expression
        private bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        // Helper method to validate phone number format using regular expression
        private bool IsValidPhoneNumber(string phoneNumber)
        {
            // Use a regular expression to validate phone number format
            // Here's a simple pattern that matches 11 or more digit phone numbers: ^\d{11,}$
            // You can adjust the pattern based on your specific requirements
            return System.Text.RegularExpressions.Regex.IsMatch(phoneNumber, @"^\d{11,}$");
        }

        private void label1_Click(object sender, EventArgs e)
        {
            SignIn Form1Form = new SignIn();
            Form1Form.Show();
        }
    }
}