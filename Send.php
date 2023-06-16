<?php
if(isset($_POST['envoyer'])) {
  $nom = $_POST['nom'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Destinataire de l'e-mail
  $destinataire = 'ibkebe13@gmail.com';

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
  if(mail($destinataire, $sujet, $contenu, $headers)) {
    echo "Message envoyé avec succès";
  } else {
    echo "Une erreur s'est produite lors de l'envoi du message";
  }
}
?>
