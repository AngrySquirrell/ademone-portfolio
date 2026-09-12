onRecordAfterCreateSuccess(async (e) => {
    e.next();
    e.app.logger().info('[ISAO - CONTACT] Hook triggered', 'recordId', e.record.id);

    const to = [
        { address: 'lreville@equancy.com' },
        { address: 'louis.reville@gmail.com' },
        { address: 'contact@hycreo.fr' },
    ];

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
            to,
            subject: subject,
            html: body,
        });

        e.app.logger().info(
            '[ISAO - CONTACT] Sending mail',
            'toEmail',
            to.reduce((acc, curr) => acc + curr.address + ', ', ''),
            'subject',
            subject
        );

        e.app.newMailClient().send(message);

        e.app.logger().info(
            '[ISAO - CONTACT] Mail sent successfully',
            'toEmail',
            to.reduce((acc, curr) => acc + curr.address + ', ', '')
        );
    } catch (err) {
        e.app.logger().error('[ISAO - CONTACT] Failed to send contact email', 'error', err);
    }
    e.next();
}, 'isao_contact');
