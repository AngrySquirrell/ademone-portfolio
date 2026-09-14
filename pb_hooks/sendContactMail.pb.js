/**
 * PocketBase hook — sends an email notification when a new contact form
 * submission is created.
 *
 * CONFIGURATION:
 * 1. Replace 'COLLECTION_NAME' below with your prefixed contact collection
 *    name (e.g., 'myproject_contact').
 * 2. Update the `to` array with the email addresses that should receive
 *    contact form submissions.
 */

// TODO: Replace with your collection name (e.g., 'myproject_contact')
const CONTACT_COLLECTION = 'myproject_contact';

// TODO: Replace with your recipient email addresses
const RECIPIENTS = [
    { address: 'admin@example.com' },
];

onRecordAfterCreateSuccess(async (e) => {
    e.next();
    e.app.logger().info('[CONTACT] Hook triggered', 'recordId', e.record.id);

    try {
        const subject = '[CONTACT] Formulaire de contact - ' + e.record.get('subject');
        const body = `
            <h2>Nouveau message de contact reçu</h2>
            <p><strong>Nom :</strong> ${e.record.get('name')}</p>
            <p><strong>Email :</strong> ${e.record.get('email')}</p>
            <p><strong>Sujet :</strong> ${e.record.get('subject')}</p>
            <p><strong>Message :</strong><br/>${e.record.get('message').replace(/\n/g, '<br/>')}</p>`;

        const message = new MailerMessage({
            from: {
                address: e.app.settings().meta.senderAddress,
                name: e.app.settings().meta.senderName,
            },
            to: RECIPIENTS,
            subject: subject,
            html: body,
        });

        e.app.logger().info(
            '[CONTACT] Sending mail',
            'toEmail',
            RECIPIENTS.reduce((acc, curr) => acc + curr.address + ', ', ''),
            'subject',
            subject
        );

        e.app.newMailClient().send(message);

        e.app.logger().info(
            '[CONTACT] Mail sent successfully',
            'toEmail',
            RECIPIENTS.reduce((acc, curr) => acc + curr.address + ', ', '')
        );
    } catch (err) {
        e.app.logger().error('[CONTACT] Failed to send contact email', 'error', err);
    }
    e.next();
}, CONTACT_COLLECTION);
