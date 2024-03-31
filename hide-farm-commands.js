 $(document).ready(function() {
            // Function to update count
            function updateCount() {
                var rowCount = $('#commands_outgoings table tr.command-row').length;
                $('.commands-command-count').text("(" + rowCount + ")");
            }

            // Remove unimportant rows and update count
            $('#commands_outgoings table tr.command-row').each(function() {
                // Find the span element with class command_hover_details and data-icon-hint attribute
                var spanElement = $(this).find('.command_hover_details[data-icon-hint="Rabujúci útok"], .command_hover_details[data-icon-hint="Rabujúci útok (vracajúce sa)"]');
                
                // Check if such span element exists and remove the row if found
                if (spanElement.length > 0) {
                    $(this).remove(); // Remove the row
                }
            });

            // Update count after removal
            updateCount();
        });
