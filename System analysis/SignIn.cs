using System;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;
using System_analysis;

namespace System_analysis
{
    public partial class SignIn : Form
    {
        public SignIn()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            // Retrieve user input
            string username = textBox1.Text;
            string password = textBox2.Text;

            // Validate input
            if (string.IsNullOrEmpty(username) || string.IsNullOrEmpty(password))
            {
                MessageBox.Show("Please fill in all fields.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            // Check if the username and password exist in the database
            if (Database.ValidateUser(username, password))
            {
                // Authentication successful
                MessageBox.Show("Sign-in Successful!", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);

                // Clear textboxes after sign-in
                textBox1.Clear();
                textBox2.Clear();
            }
            else
            {
                // Authentication failed
                MessageBox.Show("Invalid username or password.", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void label3_Click(object sender, EventArgs e)
        {
            SignUp signUpForm = new SignUp();
            signUpForm.Show();
        }
    }
}
