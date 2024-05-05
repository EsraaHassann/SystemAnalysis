using Microsoft.VisualBasic.ApplicationServices;
using MySql.Data.MySqlClient;

namespace System_analysis
{
    public static class Database
    {
        private static MySqlConnection connection;
        private static string server;
        private static string database;
        private static string uid;
        private static string password;

        static Database()
        {
            server = "localhost";
            database = "Roadmap"; // Change this to your database name
            uid = "root";
            password = ""; // Change this to your MySQL password
            string connectionString = $"SERVER={server};DATABASE={database};UID={uid};PASSWORD={password};";

            connection = new MySqlConnection(connectionString);
        }

        public static bool RegisterUser(User user)
        {
            try
            {
                using (MySqlCommand command = connection.CreateCommand())
                {
                    connection.Open();
                    string query = "INSERT INTO users (username, password, email, phonenumber) VALUES (@Username, @Password, @Email, @PhoneNumber)";
                    command.CommandText = query;
                    command.Parameters.AddWithValue("@Username", user.Username);
                    command.Parameters.AddWithValue("@Password", user.Password);
                    command.Parameters.AddWithValue("@Email", user.Email);
                    command.Parameters.AddWithValue("@PhoneNumber", user.PhoneNumber);

                    int rowsAffected = command.ExecuteNonQuery();

                    return rowsAffected > 0;
                }
            }
            catch (MySqlException ex)
            {
                Console.WriteLine($"MySQL Error: {ex.Message}");
                return false;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return false;
            }
            finally
            {
                if (connection.State != System.Data.ConnectionState.Closed)
                    connection.Close();
            }
        }


        public static bool ValidateUser(string username, string password)
        {
            try
            {
                using (MySqlCommand command = connection.CreateCommand())
                {
                    connection.Open();
                    string query = "SELECT COUNT(*) FROM users WHERE username = @Username AND password = @Password";
                    command.CommandText = query;
                    command.Parameters.AddWithValue("@Username", username);
                    command.Parameters.AddWithValue("@Password", password);

                    int count = Convert.ToInt32(command.ExecuteScalar());

                    return count > 0;
                }
            }
            catch (MySqlException ex)
            {
                Console.WriteLine($"MySQL Error: {ex.Message}");
                return false;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return false;
            }
            finally
            {
                if (connection.State != System.Data.ConnectionState.Closed)
                    connection.Close();
            }
        }
    }
}