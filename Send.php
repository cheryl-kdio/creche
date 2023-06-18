<?php
if(isset($_POST['envoyer'])) {
  $nom = $_POST['nom'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Destinataire de l'e-mail
  $destinataire = 'ibkebe13@gmail.com';
  $destinataire2 = 'Kebemarcelline7@gmail.com';

  // Sujet de l'e-mail
  $sujet = 'Nouveau message de formulaire de contact';

  // Construire le corps du message
  $contenu = "Nom: $nom\n";
  $contenu .= "Email: $email\n\n";
  $contenu .= "Message:\n$message\n";

  // En-têtes de l'e-mail
  $headers = "From: $nom <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Envoyer l'e-mail
  if(mail($destinataire, $sujet, $contenu, $headers) && mail($destinataire2, $sujet, $contenu, $headers)) {
    echo "<script type='text/javascript'>alert('Votre message a été envoyé avec succès');</script>" ;
  } else {
    echo "<script type='text/javascript'>Une erreur s'est produite lors de l'envoi du message;</script>";
  }
}
?>
