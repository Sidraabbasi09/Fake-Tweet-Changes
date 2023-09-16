<script>
  function redirectToHomePage() {
    window.location.href = "https://faketweet.online/"; // Replace with the URL of your home page
  }
</script>

<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  $to = "ahsan1001058@gmail.com"; // Replace with your email address
  $headers = "From: $name <$email>" . "\r\n";
  $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message";

  if (mail($to, $subject, $body, $headers)) {
    echo '<div class="alert alert-success">Message sent successfully.</div>';
  } else {
    echo '<div class="alert alert-danger">Failed to send message. Please try again later.</div>';
  }
}
?>
