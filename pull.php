<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
shell_exec( ‘cd /var/www/KeyservicesAPI && git pull’ );
}

?>hi