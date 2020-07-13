namespace Flatten.The.Cost.Lib.Application.User.Models
{
    public class SetUserProfileRequest
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Bio { get; set; }
    }
}
